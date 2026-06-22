const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'data', 'map');

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    files.forEach((file) => {
        if(file.endsWith('.tsx')) {
            const filePath = path.join(directoryPath, file);
            let content = fs.readFileSync(filePath, 'utf8');
            const regex = /[\t ]*<div className=\{styles\.altTextSuggestions\}>[\s\S]*?<\/div>\n/g;
            content = content.replace(regex, '');
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Processed ' + file);
        }
    });
});
