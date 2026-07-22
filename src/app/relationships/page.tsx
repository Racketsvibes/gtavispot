import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { characterApplication } from '@/backend/application/character.application';
import { locationApplication } from '@/backend/application/location.application';
import { vehicleApplication } from '@/backend/application/vehicle.application';
import { weaponApplication } from '@/backend/application/weapon.application';
import { businessApplication } from '@/backend/application/business.application';
import { relationshipRepository } from '@/backend/repositories/relationship.repository';
import { mediaRepository } from '@/backend/repositories/media.repository';
import { db } from '@/backend/db';
import { trailers, entityMedia } from '@/backend/db/schema';
import RelationshipsClient from './RelationshipsClient';

export const metadata: Metadata = {
  title: 'Relationship Explorer | GTA VI Spot',
  description: 'Interactive force-directed relationship graph visualizing characters, locations, businesses, vehicles, and weapons in GTA VI Leonida.',
  alternates: {
    canonical: 'https://gtavispot.com/relationships',
  },
  openGraph: {
    title: 'Relationship Explorer | GTA VI Spot',
    description: 'Explore the interconnected network of GTA VI Leonida characters, vehicles, and locations via an interactive graph.',
    url: 'https://gtavispot.com/relationships',
  },
};

// Next.js ISR: Revalidate relationships page daily
export const revalidate = 86400;

export default async function RelationshipsPage() {
  // Query all database nodes on the server
  const [
    chars,
    locs,
    vehs,
    weaps,
    bus,
    mediaList,
    trailerList,
    allRelations,
    allEntityMedia
  ] = await Promise.all([
    characterApplication.charactersList().catch(() => []),
    locationApplication.locationsList().catch(() => []),
    vehicleApplication.vehiclesList().catch(() => []),
    weaponApplication.weaponsList().catch(() => []),
    businessApplication.businessesList().catch(() => []),
    mediaRepository.findAll().catch(() => []),
    db.select().from(trailers).catch(() => []),
    relationshipRepository.findAll().catch(() => []),
    db.select().from(entityMedia).catch(() => [])
  ]);

  // Construct Nodes list
  const nodes: any[] = [];
  const nodeIds = new Set<string>();

  const addNode = (id: string, name: string, slug: string, type: string, desc: string, thumb: string | null) => {
    if (nodeIds.has(id)) return;
    nodeIds.add(id);
    nodes.push({ id, name, slug, type, description: desc || '', thumbnailUrl: thumb });
  };

  chars.forEach((c: any) => addNode(c.id, c.name, c.slug, 'character', c.shortDescription || '', null));
  locs.forEach((l: any) => addNode(l.id, l.name, l.slug, 'location', l.description || '', null));
  vehs.forEach((v: any) => addNode(v.id, v.name, v.slug, 'vehicle', v.description || '', null));
  weaps.forEach((w: any) => addNode(w.id, w.name, w.slug, 'weapon', w.description || '', null));
  bus.forEach((b: any) => addNode(b.id, b.name, b.slug, 'business', b.description || '', null));
  mediaList.forEach((m: any) => addNode(m.id, m.title || 'Untitled Media', m.slug, m.mediaType || 'screenshot', m.altText || '', m.cdnUrl));
  trailerList.forEach((t: any) => addNode(t.id, t.title, t.youtubeId, 'trailer', t.description || '', null));

  // Construct Edges list
  const edges: any[] = [];

  // Direct relational bindings
  allRelations.forEach((r: any) => {
    edges.push({
      id: r.id,
      source: r.fromEntityId,
      target: r.toEntityId,
      type: r.relationshipType || 'connected_to'
    });
  });

  // Business to locations edge mapping
  bus.forEach((b: any) => {
    if (b.locationId) {
      edges.push({
        id: `bus-loc-${b.id}`,
        source: b.id,
        target: b.locationId,
        type: 'located_in'
      });
    }
  });

  // Entity to media references edge mapping
  allEntityMedia.forEach((em: any) => {
    edges.push({
      id: `ent-med-${em.id}`,
      source: em.entityId,
      target: em.mediaId,
      type: em.role === 'hero' ? 'featured_in' : 'appears_in'
    });
  });

  return (
    <Suspense fallback={
      <div className="flex h-screen w-screen items-center justify-center bg-[#090b0e]">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-pink-500 border-t-transparent" />
      </div>
    }>
      <RelationshipsClient initialNodes={nodes} initialEdges={edges} />
    </Suspense>
  );
}
