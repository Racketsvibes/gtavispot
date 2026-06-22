const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.resolve(__dirname, '../public');
const imagesDir = path.join(publicDir, 'images');
const srcDir = path.resolve(__dirname, '../src');

// Map of old paths to new paths
const pathMapping = new Map();

// Helper to check if a file is an image
function isImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return ['.png', '.jpg', '.jpeg', '.webp'].includes(ext);
}

// Recursively traverse directory
function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    const fullPath = path.join(dir, f);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath, callback);
    } else {
      callback(fullPath);
    }
  });
}

// Compress and convert image
async function processImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  // Calculate new path: replace spaces with underscores, extension to .webp
  const relativePath = path.relative(publicDir, filePath);
  const newRelativePath = relativePath.replace(/\s+/g, '_').replace(new RegExp(`\\${ext}$`, 'i'), '.webp');
  const destPath = path.join(publicDir, newRelativePath);

  // Keep track of the mapping (normalized with forward slashes)
  const oldUrl = '/' + relativePath.replace(/\\/g, '/');
  const newUrl = '/' + newRelativePath.replace(/\\/g, '/');
  
  if (oldUrl !== newUrl) {
    pathMapping.set(oldUrl, newUrl);
    // Also register the URL-encoded version if it contains spaces
    if (oldUrl.includes(' ')) {
      const encodedOldUrl = oldUrl.replace(/ /g, '%20');
      pathMapping.set(encodedOldUrl, newUrl);
    }
  }

  // Check if file is already webp and under 100 KB and has correct path
  const isWebp = ext === '.webp';
  const size = fs.statSync(filePath).size;
  const isUnder100KB = size <= 98 * 1024;
  
  if (isWebp && isUnder100KB && filePath === destPath) {
    console.log(`Skipping (already WebP, < 100 KB, correct path): ${newRelativePath} (${(size / 1024).toFixed(1)} KB)`);
    return;
  }

  console.log(`Processing: ${relativePath} -> ${newRelativePath}`);

  // Create destination directory if it doesn't exist
  fs.mkdirSync(path.dirname(destPath), { recursive: true });

  let quality = 85;
  let width = 1600;
  let currentSize = Infinity;
  let buffer;

  const targetSize = 98 * 1024; // 98 KB target to stay safely under 100 KB

  // Read input file into memory to prevent file locking on Windows
  let inputBuffer;
  try {
    inputBuffer = fs.readFileSync(filePath);
  } catch (err) {
    console.error(`Failed to read file ${relativePath}:`, err.message);
    return;
  }

  // Quality loop
  while (true) {
    try {
      let pipeline = sharp(inputBuffer);
      
      // Get image dimensions to avoid enlarging
      const metadata = await pipeline.metadata();
      const currentWidth = metadata.width || 0;

      if (width < currentWidth) {
        pipeline = pipeline.resize({ width: width, withoutEnlargement: true });
      }

      buffer = await pipeline
        .webp({ quality: quality, effort: 6 })
        .toBuffer();

      currentSize = buffer.length;

      // If we are under target size or hit quality/width floor, we break
      if (currentSize <= targetSize) {
        break;
      }

      // Step-wise reduction
      if (quality > 70) {
        quality = 70;
      } else if (width > 1200) {
        width = 1200;
      } else if (quality > 55) {
        quality = 55;
      } else if (quality > 40) {
        quality = 40;
      } else if (width > 800) {
        width = 800;
      } else if (quality > 30) {
        quality = 30;
      } else if (width > 600) {
        width = 600;
      } else if (width > 400) {
        width = 400;
      } else {
        // Absolute floor reached
        break;
      }
    } catch (err) {
      console.error(`Error during compression loop for ${relativePath}:`, err.message);
      break;
    }
  }

  if (buffer) {
    try {
      fs.writeFileSync(destPath, buffer);
      console.log(`✓ Saved: ${newRelativePath} (${(currentSize / 1024).toFixed(1)} KB) [quality=${quality}, width=${width}]`);
    } catch (err) {
      console.error(`Failed to write optimized file ${newRelativePath}:`, err.message);
      return;
    }

    // Delete original file if the path has changed
    if (filePath !== destPath) {
      try {
        fs.unlinkSync(filePath);
        console.log(`Deleted original: ${relativePath}`);
      } catch (err) {
        console.error(`Error deleting original file ${relativePath}:`, err.message);
      }
    }
  }
}

// Update image references in src files
function refactorSourceFiles() {
  console.log('\nRefactoring source file references...');
  if (pathMapping.size === 0) {
    console.log('No path changes detected. Skipping refactoring.');
    return;
  }

  const filesToScan = [];
  walkDir(srcDir, (filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    if (['.tsx', '.ts', '.css', '.js'].includes(ext)) {
      filesToScan.push(filePath);
    }
  });

  // Sort mappings by length of key descending so we don't do partial replacements
  const sortedMappings = Array.from(pathMapping.entries()).sort((a, b) => b[0].length - a[0].length);

  let replacementCount = 0;

  for (const filePath of filesToScan) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    for (const [oldUrl, newUrl] of sortedMappings) {
      // Find all matches for this old URL (case insensitive)
      // Escaping special characters for regex
      const escapedOldUrl = oldUrl.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regex = new RegExp(escapedOldUrl, 'gi');

      if (regex.test(content)) {
        content = content.replace(regex, newUrl);
        modified = true;
        console.log(`- Replacing ${oldUrl} -> ${newUrl} in ${path.relative(srcDir, filePath)}`);
        replacementCount++;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
    }
  }

  console.log(`Refactoring finished! Total replacement sites: ${replacementCount}`);
}

// Clean empty directories recursively
function removeEmptyDirectories(dir) {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir);
  if (files.length > 0) {
    files.forEach(f => {
      const fullPath = path.join(dir, f);
      if (fs.statSync(fullPath).isDirectory()) {
        removeEmptyDirectories(fullPath);
      }
    });
  }

  // Re-read after scanning children
  const filesAfter = fs.readdirSync(dir);
  if (filesAfter.length === 0 && dir !== imagesDir) {
    fs.rmdirSync(dir);
    console.log(`Removed empty directory: ${path.relative(publicDir, dir)}`);
  }
}

async function run() {
  console.log('--- STARTING IMAGE OPTIMIZATION & REFRACTORING ---');
  console.log(`Images directory: ${imagesDir}`);

  // Find all images in E:\GTA VI\public\images
  const filesToProcess = [];
  walkDir(imagesDir, (filePath) => {
    if (isImage(filePath)) {
      filesToProcess.push(filePath);
    }
  });

  console.log(`Found ${filesToProcess.length} images to process.\n`);

  for (const file of filesToProcess) {
    await processImage(file);
  }

  // Perform source file reference replacement
  refactorSourceFiles();

  // Clean empty subdirectories in public/images
  removeEmptyDirectories(imagesDir);

  console.log('--- IMAGE OPTIMIZATION COMPLETED SUCCESSFULLY ---');
}

run().catch(err => {
  console.error('Fatal error during optimization run:', err);
});
