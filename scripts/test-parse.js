const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../src/data/news/gta-6-release-date.tsx');
const content = fs.readFileSync(filePath, 'utf8');

// Find faq items
const faqItemRegex = /<div className=\{styles\.faqItem\}>[\s\S]*?<h3 className=\{styles\.faqQuestion\}>([\s\S]*?)<\/h3>[\s\S]*?<p className=\{styles\.faqAnswer\}>([\s\S]*?)<\/p>[\s\S]*?<\/div>/g;

let match;
console.log('Extracting FAQs...');
while ((match = faqItemRegex.exec(content)) !== null) {
  const question = match[1].trim();
  const answer = match[2].trim().replace(/\s+/g, ' ').replace(/<Link[^>]*>([\s\S]*?)<\/Link>/g, '$1').replace(/<strong>([\s\S]*?)<\/strong>/g, '$1');
  console.log(`Q: ${question}`);
  console.log(`A: ${answer}`);
  console.log('---');
}
