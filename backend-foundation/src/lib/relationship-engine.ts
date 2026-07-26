import { findRelatedEntities, findEntity } from '../queries/helpers';
import { EntityType, RelationshipType } from '../types/database';

export interface ConnectionNode {
  id: string;
  type: EntityType;
  name: string;
  connected: {
    relationshipType: RelationshipType;
    node: ConnectionNode;
  }[];
}

export class RelationshipEngine {
  /**
   * Resolves a complete directional link tree starting from a root entity,
   * traversing relationships recursively up to a specified depth limit.
   */
  static async traceConnections(
    entityType: EntityType,
    entityId: string,
    depth: number = 2,
    visited: Set<string> = new Set()
  ): Promise<ConnectionNode | null> {
    const cacheKey = `${entityType}:${entityId}`;
    if (visited.has(cacheKey)) return null; // Prevent infinite circular recursion loops

    const root = await findEntity(entityType, entityId);
    if (!root) return null;

    visited.add(cacheKey);

    const node: ConnectionNode = {
      id: entityId,
      type: entityType,
      name: root.name || root.title || 'Unnamed',
      connected: [],
    };

    if (depth <= 0) return node;

    const related = await findRelatedEntities(entityType, entityId);

    for (const rel of related) {
      // Clone visited set to allow alternative path discovery but prevent loops in this branch
      const nextVisited = new Set(visited);
      const childNode = await this.traceConnections(rel.targetType, rel.targetId, depth - 1, nextVisited);
      
      if (childNode) {
        node.connected.push({
          relationshipType: rel.relationshipType,
          node: childNode,
        });
      }
    }

    return node;
  }
}
