//! Achilles
//^ grACHI

// ! SLOTS
// ^ 'basicAttack',
// ^ 'Passive',
// ^ 'Ab1',
// ^ 'Ab2',
// ^ 'Ab3',
// ^ 'Ultimate',


const achillesAbilities = [
    {
        godId: 'grACHI',
        name: 'Achilles Basic Attack',
        slot: 'basicAttack',
        tag: 'Coming Soon',
        ranges: 'Cone Angle - 120 --- Range - 2.56',
        description: `Deal Physical Damage to an enemy in front of you.`,
        scaling: 'STR - 100% --- INT - 20% --- BAP - 100%',
        abilityValues: `If multiple enemies are in the area, the enemy closest to the center of the area will be hit`,
    },
    {
        godId: 'grACHI',
        name: 'Gift of the Gods',
        slot: 'Passive',
        tag: 'Coming Soon',
        ranges: 'none',
        description: `Choose to wear armor or forgo it.
        Wearing armor grants bonus Health and Protections, while forgoing it grants bonus Strength and Movement Speed.\r\n
         \r\n      • Swap between armor states by using Basic Attacks while the Passive targeter is active inside the Fountain.`,
        scaling: 'none',
        abilityValues: `Bonus Health - 25 | 0.25 --- Protections - 5 | 2 --- Movement Speed - 1.0% | 0.25% --- Strength - 3 | 1.5`,
    },
    {
        godId: 'grACHI',
        name: 'Shield of Achilles',
        slot: 'Ab1',
        tag: 'This ability can hit through walls.',
        ranges: 'Cone Angle - 80 --- Small Radius - 3.2 --- Large Radius - 8',
        description: `Punch forward with your shield, dealing [80% STR] Physical Damage and Stunning enemies in a short cone.
        The force of the shield radiates further, dealing reduced damage.\r\n
        \r\n      • The radiated force deals 70% Damage.
        \r\n      • Non-God targets take 115% Damage.
        \r\n      • .2 seconds increased Stun duration when Armored, 15% increased Scaling when forgoing your Armor.`,
        scaling: 'STR - 0.8',
        abilityValues: `Cooldown - 14 --- Cost - 60 | 65 | 70 | 75 | 80 --- Damage - 100 | 155 | 210 | 265 | 320 --- Stun Duration - 0.8`,
    },
    {
        godId: 'grACHI',
        name: 'Radiant Glory',
        slot: 'Ab2',
        tag: `You may only heal up to 4 times per ability hit. --- Healing 12 times during the buff's duration will cause the crows to cheer for you`,
        ranges: 'none',
        description: `You are blessed by the Gods, gaining bonus Strength, Protections, and 20% CCR for a short duration.
        Damaging enemies with abilities during this time Heals you.\r\n
        \r\n      • When Armored, the Gods' blessings also grant you a [50 HP + 10% STR] Physical Shield.
        \r\n      • When forgoing your Armor, hitting an enemy god with your attacks from behind reduces their Protections.`,
        scaling: 'none',
        abilityValues: `Stength - 6 | 7 | 9 | 10% --- Protections - 10 | 12.5 | 15 | 17.5 | 20% --- Crowd Control Reduction`,
    },
    {
        godId: 'grACHI',
        name: '',
        slot: 'Ab3',
        tag: 'Coming Soon',
        ranges: '',
        description: ``,
        scaling: '',
        abilityValues: ``,
    },
    {
        godId: 'grACHI',
        name: '',
        slot: 'Ultimate',
        tag: 'Coming Soon',
        ranges: '',
        description: ``,
        scaling: '',
        abilityValues: ``,
    },
]
