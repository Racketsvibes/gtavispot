import sharp from 'sharp';
import * as fs from 'fs';
import * as path from 'path';

const BASE_IMAGE_PATH = 'E:\\GTA VI\\public\\images\\GTA_6_MAp.webp';
const OUTPUT_DIR = 'E:\\GTA VI\\public\\tiles';
const MAX_ZOOM = 3; // Generates zoom levels 0, 1, 2, 3 (64 tiles total at level 3)

async function run() {
  console.log(`🖼️ Loading base map image from: ${BASE_IMAGE_PATH}`);
  if (!fs.existsSync(BASE_IMAGE_PATH)) {
    console.error(`❌ Error: Base image not found at ${BASE_IMAGE_PATH}`);
    process.exit(1);
  }

  // Clear previous tiles if any
  if (fs.existsSync(OUTPUT_DIR)) {
    fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
    console.log('🗑️ Cleared previous tiles directory.');
  }
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const metadata = await sharp(BASE_IMAGE_PATH).metadata();
  console.log(`Base image dimensions: ${metadata.width}x${metadata.height}`);

  for (let z = 0; z <= MAX_ZOOM; z++) {
    const numTiles = Math.pow(2, z); // Number of tiles in each dimension
    const mapSize = numTiles * 256;  // Total map size at this zoom level in pixels
    console.log(`\n⏳ Generating Zoom Level ${z} (${numTiles}x${numTiles} tiles, total size ${mapSize}x${mapSize})...`);

    // 1. Resize base map to standard map size for this zoom level
    const resizedImage = await sharp(BASE_IMAGE_PATH)
      .resize(mapSize, mapSize, { fit: 'fill' })
      .toBuffer();

    // 2. Crop 256x256 tiles and export to XYZ folders
    for (let x = 0; x < numTiles; x++) {
      for (let y = 0; y < numTiles; y++) {
        const tileDir = path.join(OUTPUT_DIR, `${z}`, `${x}`);
        fs.mkdirSync(tileDir, { recursive: true });

        const tilePath = path.join(tileDir, `${y}.png`);
        
        await sharp(resizedImage)
          .extract({
            left: x * 256,
            top: y * 256,
            width: 256,
            height: 256,
          })
          .png()
          .toFile(tilePath);
      }
    }
    console.log(`✅ Zoom Level ${z} tiles generated successfully.`);
  }

  console.log('\n🎉 Sliced custom interactive map tiles generated successfully under public/tiles/');
  process.exit(0);
}

run();
