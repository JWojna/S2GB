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

module.exports = { hydrateBuildItems };
