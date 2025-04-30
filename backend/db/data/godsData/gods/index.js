const fs = require("fs");
const path = require("path");

const godsDir = __dirname; // Current directory (data/godsData/gods)
const godFiles = fs.readdirSync(godsDir).filter(file => file.endsWith("Gods.js"));

// Dynamically require all pantheon files
const gods = godFiles.flatMap(file => require(path.join(godsDir, file)));


module.exports = gods;
