const fs = require('fs');
const path = require('path');

const targetFiles = [
  'src/app/compare/page.tsx',
  'src/app/contact/layout.tsx',
  'src/app/cookie-policy/page.tsx',
  'src/app/disclaimer/page.tsx',
  'src/app/dmca/page.tsx',
  'src/app/faq/page.tsx',
  'src/app/map/page.tsx',
  'src/app/news/page.tsx',
  'src/app/not-found.tsx',
  'src/app/online/page.tsx',
  'src/app/privacy-policy/page.tsx',
  'src/app/story/page.tsx',
  'src/app/tech/page.tsx',
  'src/app/terms-of-service/page.tsx',
  'src/app/world/page.tsx',
  'src/data/online/gta-plus.tsx'
];

function updateFile(filePath, isLayout = false) {
  const fullPath = path.resolve(__dirname, '..', filePath);
  if (!fs.existsSync(fullPath)) {
    console.error(`File not found: ${fullPath}`);
    return;
  }

  let content = fs.readFileSync(fullPath, 'utf8');

  if (isLayout) {
    // Target replacement for layout.tsx title template configuration
    // Replace the title object with a simple string
    const titleRegex = /title:\s*\{[\s\S]*?default:\s*['"](.*?)['"][\s\S]*?template:\s*['"](.*?)['"][\s\S]*?\}/;
    if (titleRegex.test(content)) {
      content = content.replace(titleRegex, "title: '$1'");
      console.log(`✓ Updated layout.tsx title template: ${filePath}`);
    } else {
      console.warn(`⚠ Could not match layout.tsx title regex in: ${filePath}`);
    }
  } else {
    // Replace all occurrences of " | GTA Vi Spot" or ' | GTA Vi Spot' with empty string
    const originalContent = content;
    content = content.replace(/ \| GTA Vi Spot/g, '');
    if (content !== originalContent) {
      console.log(`✓ Stripped '| GTA Vi Spot' from: ${filePath}`);
    } else {
      console.warn(`⚠ No changes made in: ${filePath}`);
    }
  }

  fs.writeFileSync(fullPath, content, 'utf8');
}

// 1. Process layout.tsx
updateFile('src/app/layout.tsx', true);

// 2. Process all other static metadata files
targetFiles.forEach(file => {
  updateFile(file, false);
});

console.log('Title suffix removal process completed!');
