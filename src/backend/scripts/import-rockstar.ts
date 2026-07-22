import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';
import sizeOf from 'image-size';
import { db } from '../db';
import {
  sources,
  trailers,
  media,
  characters,
  locations,
  vehicles,
  weapons,
  businesses,
  entityMedia,
  imageOptimizationQueue
} from '../db/schema';
import { eq, and } from 'drizzle-orm';
import { createSlug } from '../lib/db-utils';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// ==========================================
// CONFIGURATION & ENVIRONMENT
// ==========================================

const ASSETS_ROOT = process.env.ROCKSTAR_ASSETS_PATH || 'E:\\GTA VI\\public\\images';
const PUBLIC_PREFIX = 'E:\\GTA VI\\public';
const REPORT_OUTPUT_PATH = 'E:\\GTA VI\\backend-foundation\\import-report.json';

console.log(`🚀 Starting Refined Rockstar Asset Import Engine...`);
console.log(`📁 Source Assets Directory: ${ASSETS_ROOT}`);

if (!fs.existsSync(ASSETS_ROOT)) {
  console.error(`❌ Error: Source directory does not exist!`);
  process.exit(1);
}

// Strict slug validation regex (no spaces, only lowercase alphanumeric and single hyphens)
const SLUG_VALIDATOR = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function isValidSlug(slug: string): boolean {
  return SLUG_VALIDATOR.test(slug);
}

// SHA256 Hashing helper
function calculateFileHash(filePath: string): string {
  const fileBuffer = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(fileBuffer).digest('hex');
}

// ==========================================
// IMPORT REPORT STATE
// ==========================================

interface ImportReport {
  characters: number;
  locations: number;
  vehicles: number;
  weapons: number;
  businesses: number;
  images: number;
  relationships: number;
  warnings: string[];
}

const report: ImportReport = {
  characters: 0,
  locations: 0,
  vehicles: 0,
  weapons: 0,
  businesses: 0,
  images: 0,
  relationships: 0,
  warnings: [],
};

// ==========================================
// SEED ENTITIES DATA DEFINITION
// ==========================================

interface EntitySeed {
  slug: string;
  name: string;
  type: 'character' | 'location' | 'vehicle' | 'weapon' | 'business';
}

const charactersList: EntitySeed[] = [
  { slug: 'lucia', name: 'Lucia Caminos', type: 'character' },
  { slug: 'jason', name: 'Jason Duval', type: 'character' },
  { slug: 'boobie-ike', name: 'Boobie Ike', type: 'character' },
  { slug: 'brian-heder', name: 'Brian Heder', type: 'character' },
  { slug: 'cal-hampton', name: 'Cal Hampton', type: 'character' },
  { slug: 'drequan-priest', name: 'DreQuan Priest', type: 'character' },
  { slug: 'raul-bautista', name: 'Raul Bautista', type: 'character' },
  { slug: 'real-dimez', name: 'Real Dimez', type: 'character' },
];

const locationsList: EntitySeed[] = [
  { slug: 'vice-city', name: 'Vice City', type: 'location' },
  { slug: 'leonida-keys', name: 'Leonida Keys', type: 'location' },
  { slug: 'grassrivers', name: 'Grassrivers', type: 'location' },
  { slug: 'port-gellhorn', name: 'Port Gellhorn', type: 'location' },
  { slug: 'ambrosia', name: 'Ambrosia', type: 'location' },
  { slug: 'mount-kalaga', name: 'Mount Kalaga National Park', type: 'location' },
];

const weaponsList: EntitySeed[] = [
  { slug: 'ak-47', name: 'AK-47', type: 'weapon' },
  { slug: 'benelli-m4-shotgun', name: 'Benelli M4 Shotgun', type: 'weapon' },
  { slug: 'capo-pistol', name: 'Capo Pistol', type: 'weapon' },
  { slug: 'double-barreled-shotgun', name: 'Double Barreled Shotgun', type: 'weapon' },
  { slug: 'duke-carbine', name: 'Duke Carbine', type: 'weapon' },
  { slug: 'duke-sniper-rifle', name: 'Duke Sniper Rifle', type: 'weapon' },
  { slug: 'girardi-es9-pistol', name: 'Girardi ES9 Pistol', type: 'weapon' },
  { slug: 'grenade-launcher', name: 'Grenade Launcher', type: 'weapon' },
  { slug: 'klose-k17-pistol', name: 'Klose K17 Pistol', type: 'weapon' },
  { slug: 'm1a-rifle', name: 'M1A Rifle', type: 'weapon' },
  { slug: 'm249-lmg', name: 'M249 LMG', type: 'weapon' },
  { slug: 'mac-10-smg', name: 'MAC-10 SMG', type: 'weapon' },
  { slug: 'micro-smg', name: 'Micro SMG', type: 'weapon' },
  { slug: 'morgan-revolver', name: 'Morgan Revolver', type: 'weapon' },
  { slug: 'mp5-smg', name: 'MP5 SMG', type: 'weapon' },
  { slug: 'mustang-357-revolver', name: 'Mustang .357 Revolver', type: 'weapon' },
  { slug: 'nipper-38-revolver', name: 'Nipper .38 Revolver', type: 'weapon' },
  { slug: 'remington-700-rifle', name: 'Remington 700 Rifle', type: 'weapon' },
  { slug: 'remington-870-shotgun', name: 'Remington 870 Shotgun', type: 'weapon' },
];

const vehiclesList: EntitySeed[] = [
  { slug: 'grotti-cheetah', name: 'Grotti Cheetah', type: 'vehicle' },
  { slug: 'vapid-dominator-buggy', name: 'Vapid Dominator Buggy', type: 'vehicle' },
  { slug: 'squalo', name: 'Squalo', type: 'vehicle' },
  { slug: 'vapid-stanier', name: 'Vapid Stanier', type: 'vehicle' },
  { slug: 'vapid-ganado', name: 'Vapid Ganado', type: 'vehicle' },
  { slug: 'buggy', name: 'Buggy', type: 'vehicle' },
  { slug: 'watercraft', name: 'Watercraft', type: 'vehicle' },
];

const businessesList: EntitySeed[] = [
  { slug: 'ptt-store', name: 'PTT Store', type: 'business' },
  { slug: 'rideout-customs', name: 'Rideout Customs', type: 'business' },
  { slug: 'saras-salon', name: 'Saras Salon', type: 'business' },
];

const allSeeds = [
  ...charactersList,
  ...locationsList,
  ...weaponsList,
  ...vehiclesList,
  ...businessesList,
];

// ==========================================
// DEDICATED ENTITY RESOLVER
// ==========================================

class EntityResolver {
  private cache: Map<string, { id: string; type: string; name: string }> = new Map();

  /**
   * Initializes the resolver cache by loading loaded DB entity records.
   */
  async initialize() {
    console.log(`⚙️ Loading Entity Resolver cache...`);
    
    const dbCharacters = await db.select({ id: characters.id, slug: characters.slug, name: characters.name }).from(characters);
    const dbLocations = await db.select({ id: locations.id, slug: locations.slug, name: locations.name }).from(locations);
    const dbVehicles = await db.select({ id: vehicles.id, slug: vehicles.slug, name: vehicles.name }).from(vehicles);
    const dbWeapons = await db.select({ id: weapons.id, slug: weapons.slug, name: weapons.name }).from(weapons);
    const dbBusinesses = await db.select({ id: businesses.id, slug: businesses.slug, name: businesses.name }).from(businesses);

    for (const c of dbCharacters) this.cache.set(`character:${c.slug}`, { id: c.id, type: 'character', name: c.name });
    for (const l of dbLocations) this.cache.set(`location:${l.slug}`, { id: l.id, type: 'location', name: l.name });
    for (const v of dbVehicles) this.cache.set(`vehicle:${v.slug}`, { id: v.id, type: 'vehicle', name: v.name });
    for (const w of dbWeapons) this.cache.set(`weapon:${w.slug}`, { id: w.id, type: 'weapon', name: w.name });
    for (const b of dbBusinesses) this.cache.set(`business:${b.slug}`, { id: b.id, type: 'business', name: b.name });

    console.log(`✅ Cached ${this.cache.size} entities in Entity Resolver.`);
  }

  /**
   * Resolves entities and database IDs that match a given filepath.
   */
  resolve(normPath: string): { id: string; type: string; name: string }[] {
    const filePathNormalized = normPath.toLowerCase().replace(/_/g, '-');
    const resolved: { id: string; type: string; name: string }[] = [];

    for (const [key, value] of this.cache.entries()) {
      const [type, slug] = key.split(':');

      let matches = false;
      if (filePathNormalized.includes(slug)) {
        matches = true;
      } else if (slug === 'mount-kalaga' && filePathNormalized.includes('kalaga')) {
        matches = true;
      } else if (slug === 'boobie-ike' && filePathNormalized.includes('boobie')) {
        matches = true;
      } else if (slug === 'brian-heder' && filePathNormalized.includes('brian')) {
        matches = true;
      } else if (slug === 'cal-hampton' && filePathNormalized.includes('cal')) {
        matches = true;
      } else if (slug === 'drequan-priest' && filePathNormalized.includes('drequan')) {
        matches = true;
      } else if (slug === 'raul-bautista' && filePathNormalized.includes('raul')) {
        matches = true;
      } else if (slug === 'real-dimez' && filePathNormalized.includes('dimez')) {
        matches = true;
      }

      if (matches) {
        resolved.push(value);
      }
    }

    return resolved;
  }
}

// ==========================================
// MAIN RUNNER
// ==========================================

async function main() {
  try {
    // 1. REGISTER TRAILERS & SOURCES
    console.log(`\n📺 Registering Official YouTube Trailers & Sources...`);

    const trailersData = [
      {
        youtubeId: 'QdBZY2fkU-0',
        title: 'GTA VI Trailer 1',
        url: 'https://youtu.be/QdBZY2fkU-0',
        releaseDate: new Date('2023-12-05T00:00:00Z'),
        sourceName: 'Rockstar Games Official Trailer 1',
      },
      {
        youtubeId: 'VQRLujxTm3c',
        title: 'GTA VI Trailer 2',
        url: 'https://youtu.be/VQRLujxTm3c',
        releaseDate: new Date('2025-12-01T00:00:00Z'),
        sourceName: 'Rockstar Games Official Trailer 2',
      },
      {
        youtubeId: 'EiQEBYDox_k',
        title: 'GTA VI Official Cover Art Video',
        url: 'https://youtu.be/EiQEBYDox_k',
        releaseDate: new Date('2025-12-01T00:00:00Z'),
        sourceName: 'Rockstar Games Cover Art Reveal',
      },
    ];

    for (const item of trailersData) {
      // Validate Slugs
      const sourceSlug = createSlug(item.sourceName);
      const mediaSlug = createSlug(item.title);

      if (!isValidSlug(sourceSlug)) {
        report.warnings.push(`Skipped Source: Invalid Slug "${sourceSlug}" for "${item.sourceName}"`);
        continue;
      }
      if (!isValidSlug(mediaSlug)) {
        report.warnings.push(`Skipped Media: Invalid Slug "${mediaSlug}" for "${item.title}"`);
        continue;
      }

      // Upsert Source
      let [existingSource] = await db
        .select()
        .from(sources)
        .where(eq(sources.name, item.sourceName))
        .limit(1);

      if (!existingSource) {
        [existingSource] = await db
          .insert(sources)
          .values({
            name: item.sourceName,
            sourceType: 'trailer',
            url: item.url,
            officialReleaseDate: item.releaseDate,
          })
          .returning();
        console.log(`➕ Added Source: ${item.sourceName}`);
      } else {
        await db
          .update(sources)
          .set({
            url: item.url,
            officialReleaseDate: item.releaseDate,
          })
          .where(eq(sources.id, existingSource.id));
      }

      // Upsert Trailer
      const [existingTrailer] = await db
        .select()
        .from(trailers)
        .where(eq(trailers.youtubeId, item.youtubeId))
        .limit(1);

      if (!existingTrailer) {
        await db.insert(trailers).values({
          title: item.title,
          youtubeId: item.youtubeId,
          officialReleaseDate: item.releaseDate,
          description: `Official Rockstar Games upload for ${item.title}.`,
        });
        console.log(`➕ Registered Trailer: ${item.title}`);
      } else {
        await db
          .update(trailers)
          .set({
            title: item.title,
            officialReleaseDate: item.releaseDate,
          })
          .where(eq(trailers.id, existingTrailer.id));
      }

      // Upsert Trailer Media (Video link metadata)
      const [existingMedia] = await db
        .select()
        .from(media)
        .where(eq(media.slug, mediaSlug))
        .limit(1);

      const mediaValues = {
        slug: mediaSlug,
        title: item.title,
        mediaType: 'trailer' as const,
        provider: 'rockstar',
        storageProvider: 'youtube',
        storageKey: item.youtubeId,
        cdnUrl: item.url,
        youtubeId: item.youtubeId,
        sourceId: existingSource.id,
        status: 'official' as const,
      };

      if (!existingMedia) {
        await db.insert(media).values(mediaValues);
        console.log(`➕ Added Trailer Media: ${item.title}`);
      } else {
        await db.update(media).set(mediaValues).where(eq(media.id, existingMedia.id));
      }
    }

    // 2. SEED PRIMARY ENTITIES (Idempotent seed logic)
    console.log(`\n📦 Seeding primary entities into database tables...`);

    for (const seed of allSeeds) {
      await sleep(25);
      
      if (!isValidSlug(seed.slug)) {
        report.warnings.push(`Skipped Entity Seed: Invalid Slug "${seed.slug}" for "${seed.name}"`);
        continue;
      }

      if (seed.type === 'character') {
        const [existing] = await db.select().from(characters).where(eq(characters.slug, seed.slug)).limit(1);
        if (!existing) {
          await db.insert(characters).values({
            slug: seed.slug,
            name: seed.name,
            status: 'official',
            isOfficial: true,
          });
          console.log(`➕ Seeded Character: ${seed.name}`);
        }
        report.characters++;
      } else if (seed.type === 'location') {
        const [existing] = await db.select().from(locations).where(eq(locations.slug, seed.slug)).limit(1);
        if (!existing) {
          await db.insert(locations).values({
            slug: seed.slug,
            name: seed.name,
            status: 'official',
            isOfficial: true,
          });
          console.log(`➕ Seeded Location: ${seed.name}`);
        }
        report.locations++;
      } else if (seed.type === 'vehicle') {
        const [existing] = await db.select().from(vehicles).where(eq(vehicles.slug, seed.slug)).limit(1);
        if (!existing) {
          await db.insert(vehicles).values({
            slug: seed.slug,
            name: seed.name,
            status: 'official',
            isOfficial: true,
          });
          console.log(`➕ Seeded Vehicle: ${seed.name}`);
        }
        report.vehicles++;
      } else if (seed.type === 'weapon') {
        const [existing] = await db.select().from(weapons).where(eq(weapons.slug, seed.slug)).limit(1);
        if (!existing) {
          await db.insert(weapons).values({
            slug: seed.slug,
            name: seed.name,
            status: 'official',
            isOfficial: true,
          });
          console.log(`➕ Seeded Weapon: ${seed.name}`);
        }
        report.weapons++;
      } else if (seed.type === 'business') {
        const [existing] = await db.select().from(businesses).where(eq(businesses.slug, seed.slug)).limit(1);
        if (!existing) {
          await db.insert(businesses).values({
            slug: seed.slug,
            name: seed.name,
            status: 'official',
            isOfficial: true,
          });
          console.log(`➕ Seeded Business: ${seed.name}`);
        }
        report.businesses++;
      }
    }

    // 3. INITIALIZE ENTITY RESOLVER WITH SEEDED ENTITIES
    const resolver = new EntityResolver();
    await resolver.initialize();

    // 4. SCAN LOCAL ASSET FOLDER
    console.log(`\n🔍 Scanning Local Assets folder...`);
    const imageFiles: string[] = [];

    function scanDir(dir: string) {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          scanDir(fullPath);
        } else {
          const ext = path.extname(entry.name).toLowerCase();
          if (['.webp', '.png', '.jpg', '.jpeg'].includes(ext)) {
            imageFiles.push(fullPath);
          }
        }
      }
    }

    scanDir(ASSETS_ROOT);
    console.log(`✨ Found ${imageFiles.length} image files to process.`);

    // 5. EXTRACT METADATA & IMPORT IMAGES WITH RESOLVER & HASHING
    console.log(`\n🖼️ Processing and importing images...`);

    for (const imgPath of imageFiles) {
      await sleep(25);
      const filename = path.basename(imgPath);
      
      const relativePath = imgPath.replace(PUBLIC_PREFIX, '').replace(/\\/g, '/');
      const baseNameWithoutExt = path.parse(filename).name;
      const mediaSlug = createSlug(baseNameWithoutExt);
      const title = baseNameWithoutExt.replace(/_/g, ' ').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

      // Validate Slugs
      if (!isValidSlug(mediaSlug)) {
        report.warnings.push(`Skipped Image: Invalid Slug "${mediaSlug}" for file "${filename}"`);
        continue;
      }

      // Calculate SHA256 Image Hash
      const fileHash = calculateFileHash(imgPath);

      // Duplicate Check 1: Check by SHA256 Hash
      const [existingMediaByHash] = await db
        .select()
        .from(media)
        .where(eq(media.hash, fileHash))
        .limit(1);

      if (existingMediaByHash) {
        console.log(`⏭️ Ignored Duplicate Image (Identical SHA256 Hash): ${filename}`);
        report.images++;
        
        // Schedule Relationships for existing images anyway
        await linkEntitiesToMedia(existingMediaByHash.id, filename, relativePath, resolver);
        continue;
      }

      // Get dimensions using image-size
      let width = 0;
      let height = 0;
      try {
        const dimensions = sizeOf(imgPath);
        width = dimensions.width || 0;
        height = dimensions.height || 0;
      } catch (err) {}

      // Determine media type
      let mediaType: 'artwork' | 'screenshot' | 'wallpaper' | 'image' = 'screenshot';
      if (relativePath.toLowerCase().includes('artwork') || relativePath.toLowerCase().includes('logo')) {
        mediaType = 'artwork';
      } else if (relativePath.toLowerCase().includes('postcard')) {
        mediaType = 'artwork';
      } else if (relativePath.toLowerCase().includes('wallpaper')) {
        mediaType = 'wallpaper';
      }

      // Upsert Media Record
      let [existingMedia] = await db
        .select()
        .from(media)
        .where(eq(media.slug, mediaSlug))
        .limit(1);

      const mediaValues = {
        slug: mediaSlug,
        title,
        mediaType,
        provider: 'rockstar',
        storageProvider: 'local',
        storageKey: relativePath,
        cdnUrl: relativePath,
        width,
        height,
        status: 'official' as const,
        hash: fileHash,
        altText: `Official GTA 6 Rockstar Games ${mediaType}: ${title}`,
        caption: `Source: ${relativePath}`,
      };

      let insertedId = '';

      if (!existingMedia) {
        const [inserted] = await db.insert(media).values(mediaValues).returning();
        insertedId = inserted.id;
        console.log(`➕ Imported Image: ${filename} (${width}x${height})`);

        // Image Optimization Queue Scheduling (Future Prep)
        const sizes: ('thumbnail' | 'medium' | 'large')[] = ['thumbnail', 'medium', 'large'];
        for (const size of sizes) {
          await db.insert(imageOptimizationQueue).values({
            mediaId: inserted.id,
            status: 'pending',
            targetSize: size,
          });
        }
      } else {
        const [updated] = await db.update(media).set(mediaValues).where(eq(media.id, existingMedia.id)).returning();
        insertedId = updated.id;
        console.log(`🔄 Updated Image: ${filename}`);
      }

      report.images++;

      // Schedule Relationships
      await linkEntitiesToMedia(insertedId, filename, relativePath, resolver);
    }

    // 6. WRITE REPORT FILE
    fs.writeFileSync(REPORT_OUTPUT_PATH, JSON.stringify(report, null, 2), 'utf-8');
    console.log(`\n📝 Generated Import Report at: ${REPORT_OUTPUT_PATH}`);
    console.log(`\n🎉 Refined Rockstar Asset Import Engine completed successfully!`);
    process.exit(0);
  } catch (error: any) {
    console.error(`❌ Error executing importer:`, error);
    process.exit(1);
  }
}

// Relationship Builder utilizing EntityResolver & Knowledge Validation Layer
async function linkEntitiesToMedia(
  mediaId: string,
  filename: string,
  relativePath: string,
  resolver: EntityResolver
) {
  // Knowledge Validation: Ensure the media itself exists in the database
  const [validMedia] = await db.select().from(media).where(eq(media.id, mediaId)).limit(1);
  if (!validMedia) {
    report.warnings.push(`Knowledge Validation Failed: Orphan relation skipped. Media "${mediaId}" does not exist.`);
    return;
  }

  // Use Entity Resolver to find matching entities
  const matchedEntities = resolver.resolve(relativePath);

  for (const entity of matchedEntities) {
    // Knowledge Validation: Ensure the destination entity exists in the database
    let isValidEntity = false;

    if (entity.type === 'character') {
      const [ex] = await db.select().from(characters).where(eq(characters.id, entity.id)).limit(1);
      if (ex) isValidEntity = true;
    } else if (entity.type === 'location') {
      const [ex] = await db.select().from(locations).where(eq(locations.id, entity.id)).limit(1);
      if (ex) isValidEntity = true;
    } else if (entity.type === 'vehicle') {
      const [ex] = await db.select().from(vehicles).where(eq(vehicles.id, entity.id)).limit(1);
      if (ex) isValidEntity = true;
    } else if (entity.type === 'weapon') {
      const [ex] = await db.select().from(weapons).where(eq(weapons.id, entity.id)).limit(1);
      if (ex) isValidEntity = true;
    } else if (entity.type === 'business') {
      const [ex] = await db.select().from(businesses).where(eq(businesses.id, entity.id)).limit(1);
      if (ex) isValidEntity = true;
    }

    if (!isValidEntity) {
      report.warnings.push(
        `Knowledge Validation Failed: Orphan relation skipped. Entity "${entity.name}" (${entity.type}) with ID "${entity.id}" does not exist in DB.`
      );
      continue;
    }

    // Determine entity media role
    let role: 'hero' | 'gallery' | 'cover' | 'thumbnail' = 'gallery';
    if (filename.toLowerCase().includes('hero') || filename.toLowerCase().includes('banner')) {
      role = 'hero';
    } else if (filename.toLowerCase().includes('cover')) {
      role = 'cover';
    } else if (filename.toLowerCase().includes('thumb')) {
      role = 'thumbnail';
    }

    // Check if connection already exists
    const [existingLink] = await db
      .select()
      .from(entityMedia)
      .where(
        and(
          eq(entityMedia.entityType, entity.type),
          eq(entityMedia.entityId, entity.id),
          eq(entityMedia.mediaId, mediaId),
          eq(entityMedia.role, role)
        )
      )
      .limit(1);

    if (!existingLink) {
      await db.insert(entityMedia).values({
        entityType: entity.type,
        entityId: entity.id,
        mediaId,
        role,
      });
      console.log(`🔗 Linked ${entity.name} (${entity.type}) to ${filename} with role [${role}]`);
    }
    report.relationships++;
  }
}

main();
