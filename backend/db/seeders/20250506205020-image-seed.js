'use strict';

const { Image } = require('../models')
const processedImagesPromise = require('../data/images')

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      const processedImages = await processedImagesPromise;
      const createdImages = await Image.bulkCreate(processedImages)
      console.log(`Successfully seeded ${createdImages.length} images.`);
    } catch (error) {
      console.log(error);
      if (error.errors) {
        error.errors.forEach(err => {
            console.error("Detailed error:", err.message, err.path, err.type);
        });
    } else {
        console.error("Generic error:", error.message);
    }
    }
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Images';
    await queryInterface.bulkDelete(options);
  }
};
