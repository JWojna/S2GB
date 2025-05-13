const { body } = require('express-validator');

const isObject = (obj) =>
  typeof obj === 'object' && obj !== null && !Array.isArray(obj);

const checkIsObject = (key) =>
  body(key).custom((value) => {
    if (!isObject(value)) {
      throw new Error(`${key} must be a valid object`);
    }
    return true;
  });

const isValidTierData = (data, minCount = 4, enforceGlobalUniqueness = true) => {
  if (!isObject(data)) return false;

  const validTiers = ['sTier', 'aTier', 'bTier', 'cTier', 'dTier', 'fTier'];
  const allGodIds = new Set();
  let total = 0;

  for (const key of validTiers) {
    const tier = data[key];
    if (!tier) continue;

    if (!Array.isArray(tier)) return false;

    const localSet = new Set();

    for (const id of tier) {
      if (typeof id !== 'string' && typeof id !== 'number') return false;

      if (localSet.has(id)) return false; // duplicate within tier
      localSet.add(id);

      if (enforceGlobalUniqueness && allGodIds.has(id)) return false; // across tiers
      allGodIds.add(id);

      total++;
    }
  }

  return total >= minCount;
};


const isValidAbilityDataWithRules = (data) => {
  if (!isObject(data)) return false;

  const validSlots = ['ab1', 'ab2', 'ab3', 'ab4'];
  const counts = {
    ab1: 0,
    ab2: 0,
    ab3: 0,
    ab4: 0,
  };

  const keys = Object.keys(data);
  if (keys.length !== 20) return false;

  for (let i = 1; i <= 20; i++) {
    const key = String(i);
    const ability = data[key];

    if (!validSlots.includes(ability)) return false;

    // ab4 (ult) cannot be chosen before level 5
    if (ability === 'ab4' && i < 5) return false;

    // Any ability chosen 3 times before level 5 is invalid
    if (i < 5 && counts[ability] >= 2) return false;

    counts[ability]++;
  }

  // No ability should be leveled more than 5 times
  return Object.values(counts).every(count => count <= 5);
};


const isValidSlotObject = (obj, validKeys) =>
  isObject(obj) &&
  keyChecker(obj, validKeys) &&
  Object.values(obj).every(
    val => val === null || typeof val === 'string' || typeof val === 'number'
  );

const isValidItemData = (data) => {
  if (!isObject(data)) return false;

  const { items, relic, consumables } = data;

  // items must have all 6 keys, values can be null
  if (!isValidSlotObject(items, validItemSlots)) return false;

  // consumables optional, but if present must match format
  if (consumables && !isValidSlotObject(consumables, validConsumableSlots)) {
    return false;
  }

  // relic must be null, string, or number
  if (relic !== null && typeof relic !== 'string' && typeof relic !== 'number') {
    return false;
  }

  return true;
};

module.exports = {
  isObject,
  isValidTierData,
  isValidAbilityDataWithRules,
  isValidItemData,
  checkIsObject
};
