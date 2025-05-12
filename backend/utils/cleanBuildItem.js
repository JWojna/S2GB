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

module.exports = cleanItemSlotMap;
