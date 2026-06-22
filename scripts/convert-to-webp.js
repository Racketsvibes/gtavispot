const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, '../public/images');

async function processImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;

  const dirName = path.dirname(filePath);
  const baseName = path.basename(filePath, ext);
  const destPath = path.join(dirName, `${baseName}.webp`);

  console.log(`Processing: ${filePath}`);

  let quality = 80;
  let width = 1200;
  let currentSize = Infinity;
  let buffer;

  // We loop to ensure the size is less than 100 KB (102400 bytes)
  while (currentSize > 100 * 1024 && quality > 10) {
    buffer = await sharp(filePath)
      .resize({ width: width, withoutEnlargement: true })
      .webp({ quality: quality })
      .toBuffer();
    
    currentSize = buffer.length;
    console.log(`- Try: width=${width}, quality=${quality} -> size=${(currentSize / 1024).toFixed(1)} KB`);
    
    if (currentSize > 100 * 1024) {
      if (width > 800) {
        width -= 100;
      } else {
        quality -= 10;
      }
    }
  }

  fs.writeFileSync(destPath, buffer);
  console.log(`✓ Saved: ${destPath} (${(currentSize / 1024).toFixed(1)} KB)`);

  // Delete original file
  fs.unlinkSync(filePath);
  console.log(`Deleted original: ${filePath}`);
}

async function run() {
  if (!fs.existsSync(imagesDir)) {
    console.error(`Directory not found: ${imagesDir}`);
    return;
  }
  const files = fs.readdirSync(imagesDir);
  for (const file of files) {
    await processImage(path.join(imagesDir, file));
  }
}

run();
