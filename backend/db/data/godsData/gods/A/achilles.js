//! Achilles
//^ grACHI
const Achilles = {
    godId: 'grACHI',
    godName: 'Achilles',
    title: 'Hero Of The Trojan War',
    pantheon: 'Greek',
    tags: ['Melee', 'Physical', 'STR', 'Brawler', 'Execute', 'Lockdown'],
    stats: {
        "maxHealth": { "baseLevel": 622.5, "perLevel": 97.5 },
        "hp5": { "baseLevel": 1.768, "perLevel": 0.208 },
        "maxMana": { "baseLevel": 296, "perLevel": 42 },
        "mp5": { "baseLevel": 2.25, "perLevel": 0.25 },
        "basicDamage": { "baseLevel": 44.4, "perLevel": 2.4 },
        "baseAttackSpeed": 0.9672,
        "attackSpeedPercent": { "baseLevel": 1.456, "perLevel": 1.4560000000000002 },
        "physicalProtection": { "baseLevel": 19, "perLevel": 3 },
        "magicalProtection": { "baseLevel": 27.5, "perLevel": 1.5 },
        "movementSpeed": 375,
    },
    abilities: {
        "aspect": {
            "description": `Combat Dodge can now be recast after striking a Jungle Monster or Boss, with Spear Strike gaining increased Scaling when forgoing your Armor.
                Radiant Glory no longer grants increased Protections or Crowd Control Reduction.`,
            "name": "Aspect of Prowess",
            "spearStrikeBonusPercent": 15,
        },
        "basic": {
            "name": "Achilles Basic Attack",
            "shortDesc": "Deal Physical Damage to an enemy in front of you.",
            "valueKeys": {
                "scalePercent": { "inhandPower": 100, "strength": 100, "intelligence": 20 },
                "rangeData": { "ConeAngle": 120, "range": 2.56 },
            },
        },
        "passive": {
            "name": "Gift of the Gods",
            "shortDesc": `Choose to wear armor or forgo it. Wearing armor grants bonus Health and Protections, while forgoing it grants bonus Strength and Movement Speed.\r\n
                \r\n      • Swap between armor states by using Basic Attacks while the Passive targeter is active inside the Fountain.`,
            "valueKeys": {
                "health": { "baseLevel": 25, "perLevel": 10 },
                "protections": { "baseLevel": 5, "perLevel": 2 },
                "strength": { "baseLevel": 3, "perLevel": 1.5 },
                "movementSpeedPercent": { "baseLevel": 1, "perLevel": .25 },
            },
        },
        "ab1": {
            "name": "Shield of Achilles",
            "shortDesc": `Punch forward with your shield, dealing Physical Damage and Stunning enemies in a short cone. The force of the shield radiates further, dealing reduced damage.\r\n
                \r\n      • The radiated force deals 70% Damage.
                \r\n      • Non-God targets take 115% Damage.
                \r\n      • .2 seconds increased Stun duration when Armored, 15% increased Scaling when forgoing your Armor.`,
            "valueKeys": {
                "damage": [100, 155, 210, 265, 320],
                "scalePercent": { "strength": 80 },
                "stunDuration": 0.8,
                "rangeData": { "coneAngle": 80, "largeRadius": 8, "smallRadius": 3.2 },
                "cooldown": 14,
                "cost": [60, 65, 70, 75, 80],
            }
        },
        "ab2": {
            "name": "Radiant Glory",
            "shortDesc": `You are blessed by the Gods, gaining bonus Strength, Protections, and 20% CCR for a short duration.
                Damaging enemies with abilities during this time Heals you.\r\n
                \r\n      • When Armored, the Gods' blessings also grant you a Physical Shield.
                \r\n      • When forgoing your Armor, hitting an enemy god with your attacks from behind reduces their Protections.`,
            "shortDescAspect": `You are blessed by the Gods, gaining bonus Strength for a short duration. Damaging enemies with abilities during this time Heals you.\r\n
                \r\n      • When Armored, the Gods' blessings also grant you a Physical Shield.
                \r\n      • When forgoing your Armor, hitting an enemy god with your attacks from behind reduces their Protections.`,
            "valueKeys": {
                "strength": [6, 7, 8, 9, 10],
                "protections": [10, 12.5, 15, 17.5, 20],
                "crowdControlReductionPercent": 20,
                "heal": [18, 21, 24, 27, 30],
                "buffDuration": 6,
                "physicalShieldHealth": { "baseLevel": 50, "perLevel": 10 },
                "protectionReductionPerLevel": 1,
                "debuffDuration": 3,
                "cost": [40, 45, 50, 55, 60],
                "cooldown": 9,
            }
        },
        "ab3": {
            "name": "Combat Dodge",
            "shortDesc": `Dodge in your current direction and ready your spear to strike enemies for Physical Damage.
                Hitting an enemy god with the strike allows you to recast the ability once before it goes on cooldown.\r\n
                \r\n      • When Armored, striking an enemy god with your spear Slows them, stacking up to 2 times.
                \r\n      • When forgoing your Armor, the speed of your dodge is doubled.`,
            "shortDescAspect": `Dodge in your current direction and ready your spear to strike enemies for Physical Damage.
                Hitting a God or Jungle Monster with the strike allows you to recast the ability once before it goes on cooldown.\r\n
                \r\n      • When Armored, striking an enemy god with your spear Slows them, stacking up to 2 times.
                \r\n      • When forgoing your Armor, the speed of your dodge is doubled, and Spear Strike has 15% increased Scaling.`,
            "valueKeys": {
                "damage": [65, 100, 135, 170, 205],
                "scalePercent": { "strength": 45 },
                "slowPercentPerStack": 7.5,
                "slowDuration": 3,
                "rangeData": {
                    "dodgeRange": 3.2,
                    "spearStrikeRadius": 0.96,
                    "spearStrikeRange": 5.6
                },
                "cooldown": [14, 13.5, 13, 12.5, 12],
                "cost": [22, 24, 26, 28, 30],
            }
        },
        "ab4": {
            "name": "Fatal Strike",
            "shortDesc": `Prepare briefly, then Dash forward, dealing Physical Damage to enemies and Executing gods that are below 35% health.
                Killing a god allows you to recast this ability up to five times.\r\n
                \r\n      • Each kill exposes your heel, increasing your damage taken by 5%.`,
            "valueKeys": {
                "damage": [180, 270, 360, 450, 540],
                "scalePercent": { "strength": 100 },
                "rangeData": {
                    "dashRange": 5.6,
                    "dashRadius": 0.96,
                },
                "cooldown": 90,
                "cost": [60, 65, 70, 75, 80],
                "debuffDuration": 10,
            }
        }
    }
}
