const fs = require('fs');
const path = require('path');

const godsDir = __dirname;
const godFiles = {};

// Loop through A-Z subdirectories
fs.readdirSync(godsDir).forEach((folder) => {
  const folderPath = path.join(godsDir, folder);

  // Only process directories
  if (fs.statSync(folderPath).isDirectory()) {
    fs.readdirSync(folderPath).forEach((file) => {
      const filePath = path.join(folderPath, file);

      if (file.endsWith('.js')) {
        const godName = path.basename(file, '.js');
        godFiles[godName] = require(filePath);
      }
    });
  }
});

module.exports = godFiles;
