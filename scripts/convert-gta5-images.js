const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imgDir = path.join(__dirname, '../public/images');
const destDir = path.join(imgDir, 'compare');

async function convert() {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const files = [
    { src: 'GTA 5 Main Characters.jpg', dest: 'gta-5-main-characters.webp' },
    { src: 'GTA 5 (PS4) - Prologue & Mission #1.jpg', dest: 'gta-5-prologue-mission.webp' }
  ];

  for (const f of files) {
    const srcPath = path.join(imgDir, f.src);
    const destPath = path.join(destDir, f.dest);
    if (fs.existsSync(srcPath)) {
      await sharp(srcPath)
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(destPath);
      console.log(`Converted ${f.src} to ${f.dest}`);
    } else {
      console.error(`Source file does not exist: ${srcPath}`);
    }
  }

  // Copy Grass Roots Michael GTA 5.webp to compare folder as well
  const srcWebp = path.join(imgDir, 'Grass Roots Michael GTA 5.webp');
  const destWebp = path.join(destDir, 'gta-5-grass-roots-michael.webp');
  if (fs.existsSync(srcWebp)) {
    fs.copyFileSync(srcWebp, destWebp);
    console.log(`Copied Grass Roots Michael GTA 5.webp to compare folder`);
  }
}

convert().catch(console.error);
