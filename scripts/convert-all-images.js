const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.resolve(__dirname, '../public');
const destDir = path.join(publicDir, 'images');

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

async function processImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;

  // Skip files already inside public/images
  if (filePath.startsWith(destDir)) return;

  const baseName = path.basename(filePath, ext).replace(/\s+/g, '_');
  const destPath = path.join(destDir, `${baseName}.webp`);

  console.log(`Processing: ${filePath}`);

  let quality = 80;
  let width = 1200;
  let currentSize = Infinity;
  let buffer;

  // Loop to ensure image size is under 120 KB
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
      console.error(`Error processing ${filePath} at width=${width}, quality=${quality}:`, err.message);
      break;
    }
  }

  if (buffer) {
    fs.writeFileSync(destPath, buffer);
    console.log(`✓ Saved: ${destPath} (${(currentSize / 1024).toFixed(1)} KB)`);
  }
}

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      // Skip the images output directory to prevent infinite recursion
      if (dirPath !== destDir) {
        walkDir(dirPath, callback);
      }
    } else {
      callback(dirPath);
    }
  });
}

async function run() {
  console.log(`Scanning directory: ${publicDir}`);
  const filesToProcess = [];

  // Recurse public directory
  walkDir(publicDir, (filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    if (['.png', '.jpg', '.jpeg'].includes(ext)) {
      filesToProcess.push(filePath);
    }
  });

  // Also process root directory images mentioned in PROJECT_BIBLE.md
  const rootDir = path.resolve(__dirname, '..');
  fs.readdirSync(rootDir).forEach(f => {
    const filePath = path.join(rootDir, f);
    if (fs.statSync(filePath).isFile()) {
      const ext = path.extname(f).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        filesToProcess.push(filePath);
      }
    }
  });

  console.log(`Found ${filesToProcess.length} images to process.`);

  for (const file of filesToProcess) {
    await processImage(file);
  }

  console.log('All image conversions finished!');
}

run().catch(err => {
  console.error('Fatal error during image conversion:', err);
});
