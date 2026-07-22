import { relationshipRepository } from '../repositories/relationship.repository';
import { findEntity } from '../queries/helpers';
import { DbRelationship, RelationshipType, EntityType } from '../types/database';
import { RelationshipError, EntityNotFoundError } from '../errors';
import { validateRelationship } from '../lib/db-utils';
import { uuidSchema, relationshipTypeSchema, entityTypeSchema } from '../validation';

export class RelationshipService {
  async connectEntities(
    fromType: EntityType,
    fromId: string,
    relType: RelationshipType,
    toType: EntityType,
    toId: string
  ): Promise<DbRelationship> {
    // 1. Schema Validation
    const fromTypeParsed = entityTypeSchema.parse(fromType);
    const toTypeParsed = entityTypeSchema.parse(toType);
    const relTypeParsed = relationshipTypeSchema.parse(relType);
    const fromIdParsed = uuidSchema.parse(fromId);
    const toIdParsed = uuidSchema.parse(toId);

    // 2. Knowledge Validation: Ensure both entities exist
    const [fromEntity, toEntity] = await Promise.all([
      findEntity(fromTypeParsed, fromIdParsed),
      findEntity(toTypeParsed, toIdParsed),
    ]);

    if (!fromEntity) {
      throw new EntityNotFoundError(fromTypeParsed, fromIdParsed);
    }
    if (!toEntity) {
      throw new EntityNotFoundError(toTypeParsed, toIdParsed);
    }

    // 3. Semantic Validation: Ensure relationship is logically valid
    if (!validateRelationship(fromTypeParsed, relTypeParsed, toTypeParsed)) {
      throw new RelationshipError(
        `Invalid relationship combination: Entity of type "${fromTypeParsed}" cannot link via "${relTypeParsed}" to Entity of type "${toTypeParsed}".`
      );
    }

    // 4. Create connection
    return relationshipRepository.connect(
      fromTypeParsed,
      fromIdParsed,
      relTypeParsed,
      toTypeParsed,
      toIdParsed
    );
  }

  async disconnectEntities(relationshipId: string): Promise<boolean> {
    const parsedId = uuidSchema.parse(relationshipId);
    const exists = await relationshipRepository.exists(parsedId);
    if (!exists) {
      throw new EntityNotFoundError('relationship', parsedId);
    }
    return relationshipRepository.disconnect(parsedId);
  }
}

export const relationshipService = new RelationshipService();
