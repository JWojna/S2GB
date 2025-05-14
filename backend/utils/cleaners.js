// icont placement helper
function getImageUrl(images, keyword) {
  return images.find(img => img.imageUrl.toLowerCase().includes(keyword.toLowerCase()))?.imageUrl || null;
}

function cleanBuildGod(god) {
  const godObj = god?.get?.() || {};
  const images = godObj.Images || [];
  const slug = (godObj.godName || '').toLowerCase().replace(/\s+/g, '');

  // ! null protection for unfinished god data
  const abilities = godObj.abilities || {};
  const {
    aspect = {},
    ab1 = {},
    ab2 = {},
    ab3 = {},
    ab4 = {}
  } = abilities;

  //! single for builds
  const cleanGodObj = {
    icon: getImageUrl(images, `${slug}Image`) || null,
    name: godObj.godName,
    title: godObj.title,
    pantheon: godObj.pantheon,
    stats: godObj.stats,
    aspect: {
      name: aspect.name || null,
      icon: getImageUrl(images, `${slug}Aspect`) || null
    },
    abilityOne: {
      name: ab1.name || null,
      icon: getImageUrl(images, `${slug}One`) || null
    },
    abilityTwo: {
      name: ab2.name || null,
      icon: getImageUrl(images, `${slug}Two`) || null
    },
    abilityThree: {
      name: ab3.name || null,
      icon: getImageUrl(images, `${slug}Three`) || null
    },
    abilityFour: {
      name: ab4.name || null,
      icon: getImageUrl(images, `${slug}Four`) || null
    }
  }

  return cleanGodObj;
};

//! multy for tierlist
function cleanTierGods(gods) {
  const cleaned ={};

  for (const god of gods) {
    const raw = god?.get?.() || {};
    const images = raw.Images || [];
    const identifier = raw.godId;
    const slug = (raw.godName || '').toLowerCase().replace(/\s+/g, '');

    cleaned[identifier] = {
      name: raw.godName,
      icon: getImageUrl(images, `${slug}Image`) || null
    };
  }

  return cleaned
}

//! all gods cleaner
function cleanSimpleGodList(gods) {
  return gods
    .map(god => {
      const raw = god?.get?.() || {};
      const images = raw.Images || [];
      const slug = (raw.godName || '').toLowerCase().replace(/\s+/g, '');

      return {
        godId: raw.godId,
        name: raw.godName,
        icon: getImageUrl(images, `${slug}Image`) || null
      };
    })
    .filter(god => god.godId && god.name); // removes placeholder/incomplete gods
}



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

module.exports = { cleanBuildGod, cleanItemSlotMap, cleanTierGods, cleanSimpleGodList }
