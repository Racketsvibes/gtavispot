const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcPath = 'C:\\Users\\Hafiz\\.gemini\\antigravity\\brain\\2cf5ee0e-55b2-418e-875b-74b6ecaddda7\\gta_6_pc_requirements_feature_1784655229925.png';
const destDir = path.join(__dirname, '../public/images/tech');
const destPath = path.join(destDir, 'gta-6-pc-requirements.webp');

async function processImage() {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  if (!fs.existsSync(srcPath)) {
    console.error('Source file does not exist:', srcPath);
    return;
  }

  let quality = 80;
  let width = 1200;
  let buffer = await sharp(srcPath)
    .resize({ width: width, withoutEnlargement: true })
    .webp({ quality: quality })
    .toBuffer();

  fs.writeFileSync(destPath, buffer);
  console.log(`Successfully converted image to WebP: ${destPath} (${(buffer.length / 1024).toFixed(1)} KB)`);
}

processImage().catch(console.error);
