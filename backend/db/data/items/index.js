const fs = require('fs');
const path = require('path');

const itemsDir = __dirname;
const itemFiles = {};

// Loop through A-Z subdirectories
fs.readdirSync(itemsDir).forEach((folder) => {
  const folderPath = path.join(itemsDir, folder);

  // Only process directories
  if (fs.statSync(folderPath).isDirectory()) {
    fs.readdirSync(folderPath).forEach((file) => {
      const filePath = path.join(folderPath, file);

      if (file.endsWith('.js')) {
        const itemName = path.basename(file, '.js');
        itemFiles[itemName] = require(filePath);
      }
    });
  }
});

module.exports = itemFiles;
