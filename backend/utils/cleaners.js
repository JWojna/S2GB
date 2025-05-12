// icont placement helper
function getImageUrl(images, keyword) {
    return images.find(img => img.imageUrl.toLowerCase().includes(keyword.toLowerCase()))?.imageUrl || null;
}

function cleanBuildGod(god) {
    const godObj = god.get();
    const images = godObj.Images;
    const slug = godObj.godName.toLowerCase().replace(/\s+/g, '');

    const cleanGodObj = {
        icon: getImageUrl(images, `${slug}Image`),
        name: godObj.godName,
        title: godObj.title,
        pantheon: godObj.pantheon,
        stats: godObj.stats,
        aspect: {
            name: godObj.abilities.aspect.name || null,
            icon: getImageUrl(images, `${slug}Aspect`) || null
        },
        abilityOne: {
            name: godObj.abilities.ab1.name,
            icon: getImageUrl(images, `${slug}One`)
        },
        abilityTwo: {
            name: godObj.abilities.ab2.name,
            icon: getImageUrl(images, `${slug}Two`)
        },
        abilityThree: {
            name: godObj.abilities.ab3.name,
            icon: getImageUrl(images, `${slug}Three`)
        },
        abilityFour: {
            name: godObj.abilities.ab4.name,
            icon: getImageUrl(images, `${slug}Four`)
        }
    }

    return cleanGodObj;
};

function cleanItemSlotMap(hydratedItems) {
  const result = {};
  for (const [slot, item] of Object.entries(hydratedItems)) {
    if (!item) {
      result[slot] = null;
      continue;
    }

    const itemObj = item.get();
    result[slot] = {
      name: itemObj.name,
      stats: itemObj.data.stats,
      passive: itemObj.data.passive || null,
      stepCost: itemObj.data.stepCost || null,
      totalCost: itemObj.data.totalCost || null,
      icon: itemObj.Images?.imageUrl || null
    };
  }
  return result;
}

module.exports = { cleanBuildGod, cleanItemSlotMap}
