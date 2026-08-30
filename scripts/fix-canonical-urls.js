const fs = require('fs');
const path = require('path');

const targetDir = path.resolve(__dirname, '../src');
const searchStr = 'https://gtavispot.com';
const replaceStr = 'https://www.gtavispot.com';

let fileCount = 0;
let replacementCount = 0;

function walkDir(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else {
      const ext = path.extname(fullPath);
      if (['.tsx', '.ts', '.css'].includes(ext)) {
        processFile(fullPath);
      }
    }
  });
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.includes(searchStr)) {
    const parts = content.split(searchStr);
    const count = parts.length - 1;
    if (count > 0) {
      const newContent = parts.join(replaceStr);
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated ${path.relative(path.resolve(__dirname, '..'), filePath)}: replaced ${count} occurrence(s)`);
      fileCount++;
      replacementCount += count;
    }
  }
}

console.log(`🚀 Starting domain migration from "${searchStr}" to "${replaceStr}" in "${targetDir}"...`);
walkDir(targetDir);
console.log(`\n🎉 Done! Updated ${fileCount} files with a total of ${replacementCount} replacements.`);
