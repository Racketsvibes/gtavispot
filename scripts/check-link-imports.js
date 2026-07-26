const fs = require('fs');
const path = require('path');

function getAllFiles(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllFiles(fullPath, files);
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  return files;
}

const allFiles = getAllFiles(path.join(__dirname, '../src/data'));
const missingLinkFiles = [];

for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('<Link') && !content.includes("import Link from 'next/link'")) {
    missingLinkFiles.push(file);
  }
}

console.log('Files with <Link> missing import Link from next/link:');
console.log(missingLinkFiles);
