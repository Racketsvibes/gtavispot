const fs = require('fs');
const path = require('path');

const publicImagesDir = path.join(__dirname, 'public', 'images');
const srcDataDir = path.join(__dirname, 'src', 'data');

// Recursively find all files in a directory
function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, file));
    }
  });

  return arrayOfFiles;
}

// 1. Build a map of lowercase base filenames to their actual relative URL path
const allImages = getAllFiles(publicImagesDir);
const imageMap = {};

allImages.forEach(filePath => {
  const ext = path.extname(filePath);
  const baseName = path.basename(filePath, ext).toLowerCase();
  
  // Create relative URL from public/
  // Replace backslashes with forward slashes
  let relativePath = filePath.replace(path.join(__dirname, 'public'), '').replace(/\\/g, '/');
  
  // encode URI to handle spaces safely for web
  let urlParts = relativePath.split('/');
  urlParts = urlParts.map(part => encodeURIComponent(part));
  let finalUrl = urlParts.join('/');
  
  // Store it in the map
  imageMap[baseName] = finalUrl;
});

// 2. Find all .tsx files in src/data
const allTsxFiles = getAllFiles(srcDataDir).filter(f => f.endsWith('.tsx'));

let updatedCount = 0;

allTsxFiles.forEach(tsxFile => {
  let content = fs.readFileSync(tsxFile, 'utf-8');
  
  // Regex to find featureImage: '...' or "..."
  const regex = /featureImage:\s*['"]([^'"]+)['"]/g;
  let modified = false;
  
  let newContent = content.replace(regex, (match, currentUrl) => {
    // Extract base name of the current URL
    const parts = currentUrl.split('/');
    const fileName = parts[parts.length - 1];
    
    // Attempt to decode in case it's already encoded
    const decodedFileName = decodeURIComponent(fileName);
    const ext = path.extname(decodedFileName);
    let baseName = path.basename(decodedFileName, ext).toLowerCase();
    
    // Replace underscores with spaces to try another match if needed
    // e.g., Lucia_Caminos_03 -> lucia_caminos_03
    
    if (imageMap[baseName]) {
      if (currentUrl !== imageMap[baseName]) {
        console.log(`Updated ${currentUrl} -> ${imageMap[baseName]} in ${path.basename(tsxFile)}`);
        modified = true;
        return `featureImage: '${imageMap[baseName]}'`;
      }
    } else {
      // Try replacing underscores with spaces as another fallback
      let spacedBaseName = baseName.replace(/_/g, ' ');
      if (imageMap[spacedBaseName]) {
        if (currentUrl !== imageMap[spacedBaseName]) {
          console.log(`Updated ${currentUrl} -> ${imageMap[spacedBaseName]} in ${path.basename(tsxFile)}`);
          modified = true;
          return `featureImage: '${imageMap[spacedBaseName]}'`;
        }
      } else {
        console.log(`WARNING: Could not find image for ${baseName} in ${path.basename(tsxFile)}`);
      }
    }
    return match; // Keep original if no update
  });
  
  if (modified) {
    fs.writeFileSync(tsxFile, newContent, 'utf-8');
    updatedCount++;
  }
});

console.log(`Finished updating image paths. Modified ${updatedCount} files.`);
