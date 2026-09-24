const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '../public/images/Voice city Collection');
const outDir = path.resolve(__dirname, '../public/images/news');

async function processImages() {
  const mapping = [
    {
      src: 'wm-Cap.0ysk2b4egnoj_.avif',
      dest: 'gta-6-vice-city-collection-cap.webp',
      alt: 'GTA 6 Vice City Collection New Era 9FORTY Snapback Hat'
    },
    {
      src: 'wm-Map.0jmhhbywjx7n4.avif',
      dest: 'gta-6-vice-city-collection-map-poster.webp',
      alt: 'GTA 6 The Goodtime State Vice City Collection Double Sided Map Poster'
    },
    {
      src: 'wm-Pins.0o.x6_09~ykv9.avif',
      dest: 'gta-6-vice-city-collection-pins.webp',
      alt: 'GTA 6 Leonida Keys Enamel Pin Set in Custom Metal Tin'
    }
  ];

  for (const item of mapping) {
    const srcPath = path.join(srcDir, item.src);
    const destPath = path.join(outDir, item.dest);
    
    if (fs.existsSync(srcPath)) {
      const info = await sharp(srcPath)
        .webp({ quality: 85 })
        .toFile(destPath);
      console.log(`Converted ${item.src} -> ${item.dest} (${info.width}x${info.height}, ${info.size} bytes)`);
    } else {
      console.error(`Source not found: ${srcPath}`);
    }
  }

  // Also create a dedicated feature image for the article combining/using the high-res map/collection artwork
  const mapPath = path.join(srcDir, 'wm-Map.0jmhhbywjx7n4.avif');
  const featureDest = path.join(outDir, 'gta-6-vice-city-collection-feature.webp');
  if (fs.existsSync(mapPath)) {
    const featInfo = await sharp(mapPath)
      .resize(1200, 630, { fit: 'cover', position: 'center' })
      .webp({ quality: 85 })
      .toFile(featureDest);
    console.log(`Created feature image ${featureDest} (${featInfo.width}x${featInfo.height}, ${featInfo.size} bytes)`);
  }
}

processImages().catch(err => {
  console.error(err);
  process.exit(1);
});
