import { RelationshipType, EntityType } from '../types/database';
import { RelationshipError } from '../errors';

interface EntityStatusCheck {
  id: string;
  type: EntityType;
  status: string;
}

export class RelationshipDomain {
  /**
   * Enforces that relationships cannot link to archived or drafted entities.
   */
  static validateStatuses(
    fromEntity: EntityStatusCheck,
    toEntity: EntityStatusCheck
  ): void {
    if (fromEntity.status === 'archived' || fromEntity.status === 'draft') {
      throw new RelationshipError(
        `Invalid link: Source entity "${fromEntity.id}" (${fromEntity.type}) is currently "${fromEntity.status}". Links can only be made from published/official entities.`
      );
    }
    if (toEntity.status === 'archived' || toEntity.status === 'draft') {
      throw new RelationshipError(
        `Invalid link: Target entity "${toEntity.id}" (${toEntity.type}) is currently "${toEntity.status}". Links can only be made to published/official entities.`
      );
    }
  }
}
