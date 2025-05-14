function hydrateBuildItems(slotMap, items) {
  const itemMap = {};
  items.forEach(item => {
    itemMap[item.name] = item;
  });

  const hydrated = {};
  for (const [slot, name] of Object.entries(slotMap)) {
    hydrated[slot] = name ? itemMap[name] || null : null;
  }

  return hydrated;
}

function hydrateTierData(tierData, godMap) {
  const hydrated = {};

  for (const [tier, ids] of tierData) {
    hydrated[tier] = ids.map(identifier => {
      const god = godMap[identifier];
      return {
        id: identifier,
        name: god?.name || null,
        icon: god?.icon || null
      }
    });
  }

  return hydrated;
}


module.exports = { hydrateBuildItems, hydrateTierData };
