const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDir = path.resolve(__dirname, '../public/images/People');

async function processImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;

  const dirName = path.dirname(filePath);
  const baseName = path.basename(filePath, ext);
  const destPath = path.join(dirName, `${baseName}.webp`);

  // If the webp version already exists, skip unless we want to overwrite
  if (fs.existsSync(destPath)) {
    console.log(`WebP already exists for: ${filePath}, skipping.`);
    return;
  }

  console.log(`Processing: ${filePath}`);

  let quality = 80;
  let width = 1200;
  let currentSize = Infinity;
  let buffer;

  while (currentSize > 120 * 1024 && quality > 10) {
    try {
      buffer = await sharp(filePath)
        .resize({ width: width, withoutEnlargement: true })
        .webp({ quality: quality })
        .toBuffer();
      
      currentSize = buffer.length;
      console.log(`- Try: width=${width}, quality=${quality} -> size=${(currentSize / 1024).toFixed(1)} KB`);
      
      if (currentSize > 120 * 1024) {
        if (width > 800) {
          width -= 100;
        } else {
          quality -= 10;
        }
      }
    } catch (err) {
      console.error(`Error processing ${filePath}:`, err.message);
      break;
    }
  }

  if (buffer) {
    fs.writeFileSync(destPath, buffer);
    console.log(`✓ Saved WebP: ${destPath} (${(currentSize / 1024).toFixed(1)} KB)`);
  }
}

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

async function run() {
  console.log(`Scanning People directory: ${targetDir}`);
  const filesToProcess = [];

  if (!fs.existsSync(targetDir)) {
    console.error(`Directory not found: ${targetDir}`);
    return;
  }

  walkDir(targetDir, (filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    if (['.png', '.jpg', '.jpeg'].includes(ext)) {
      filesToProcess.push(filePath);
    }
  });

  console.log(`Found ${filesToProcess.length} source images to convert.`);

  for (const file of filesToProcess) {
    await processImage(file);
  }

  console.log('People folder image conversion finished!');
}

run().catch(err => {
  console.error('Fatal error during image conversion:', err);
});
