const fs = require('fs');
const path = require('path');

const imagesDir = __dirname;
const validExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.svg'];

function collectImagePaths(currentDir, relativePath = '') {
  const entries = fs.readdirSync(currentDir, { withFileTypes: true });
  const filePaths = [];

  for (const entry of entries) {
    // Skip hidden files and the index.js file itself
    if (entry.name.startsWith('.') || entry.name === 'index.js') continue;

    const fullPath = path.join(currentDir, entry.name);
    const entryRelativePath = path.join(relativePath, entry.name);

    if (entry.isDirectory()) {
      // Only descend into directories — not include them
      filePaths.push(...collectImagePaths(fullPath, entryRelativePath));
    } else if (
      entry.isFile() &&
      validExtensions.includes(path.extname(entry.name).toLowerCase())
    ) {
      filePaths.push(entryRelativePath.replace(/\\/g, '/')); // Normalize slashes
    }
  }

  return filePaths;
}

const imagePaths = collectImagePaths(imagesDir);

module.exports = imagePaths;

