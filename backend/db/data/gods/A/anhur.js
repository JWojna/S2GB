const anhur =
{
    godId: 'egANHU',
    godName: 'Anhur',
    title: 'Slayer Of Enemies',
    pantheon: 'Egyptian',
    tags: ["Ranged" | "Physical" | "STR" | "Sharpshooter" | "Lockdown" | "Mobility"],
    stats: {
        "maxHealth": { "baseLevel": 591.375, "perLevel": 92.625 },
        "hp5": { "baseLevel": 2, "perLevel": 0.2105263157894737 },
        "maxMana": { "baseLevel": 296, "perLevel": 42 },
        "mp5": { "baseLevel": 2, "perLevel": 0.2631578947368421 },
        "basicDamage": { "baseLevel": 47, "perLevel": 2.526315789473684 },
        "baseAttackSpeed": 0.99,
        "attackSpeedPercent": { "baseLevel": 1.484, "perLevel": 1.48 },
        "physicalProtection": { "baseLevel": 18.4, "perLevel": 2.910526315789474 },
        "magicalProtection": { "baseLevel": 26.7, "perLevel": 1.4526315789473683 },
        "movementSpeed": 375,
    },
    abilities: {
        "aspect": {
            "description": `Enfeeble no longer Debuffs enemies but dealing damage to the same enemy god with Basic Attacks provides you up to 100% bonus Attack Speed.
                Dealing damage to another enemy god immediately resets all stacks.`,
            "name": "Aspect of Pride",
            "valueKeys": {
                "buffDuration": 3,
                "maxBuffStacks": 4,
                "attackSpeedStackPercent": 25
            }
        },
        "basic": {
            "name": "Anhur Basic Attack",
            "shortDesc": "Fire a projectile that deals Physical Damage to the first enemy hit. ",
            "valueKeys": {
                "scalePercent": { "inhandPower": 100, "strength": 100, "intelligence": 20 },
                "rangeData": { "radius": 0.48, "range": 8.8 }
            }
        },
        "passive": {
            "name": "Enfeeble",
            "shortDesc": "Dealing Damage to enemies reduces their Physical Protection.",
            "valueKeys": {
                "debuffDuration": 4,
                "protDebuff": 20,
                "maxStacks": 1
            }
        },
        "ab1": {
            "name": "Shifting Sands",
            "shortDesc": `Summon an obelisk, surrounded by shifting sands.
                \r\n\r\n  • Enemies in the sands are Slowed and take additional damage from your basic attacks
                \r\n  • The obelisk acts as a Wall`,
            "valueKeys": {
                "slowPercent": 15,
                "additionalSlowPercent": 15,
                "damageIncreasePrecent": [8, 11, 14, 17, 20],
                "lifetime": 7.5,
                "rangeData": { "range": 10.4, "radius": 9.6 },
                "cost": [40, 50, 60, 70, 80],
                "cooldown": [14, 13.5, 13, 12.5, 12],
            }
        },
        "ab2": {
            "name": "Impale",
            "shortDesc": `Throw a large spear, dealing Physical Damage in a line.
                \r\n\r\n  • The first God hit is Pushed
                \r\n  • If the God hits a Wall, they are Stunned`,
            "valueKeys": {
                "Damage": [125, 185, 245, 305, 365],
                "scalePercerm": { "strength": 90 },
                "Stun Duration": [0.9, 0.95, 1, 1.05, 1.1],
                "rangeData": { "range": 8.8, "radius": 0.48, },
                "Cooldown": 11,
                "Cost": [50, 60, 70, 80, 90],
            }
        },
        "ab3": {
            "name": "Disperse",
            "shortDesc": "Leap forward, dealing Physical Damage where you land.\r\n\r\n  • Knock Back all enemies from your landing point",
            "valueKeys": {
                "damage": [90, 130, 170, 210, 250],
                "scalePercent": { "strength": 60 },
                "rangeData": { "radius": 2.4, "range": 8.8, },
                "cooldown": [15, 14.5, 14, 13.5, 13],
                "cost": [40, 50, 60, 70, 80],
            }
        },
        "ab4": {
            "name": "Desert Fury",
            "shortDesc": `Hurl a series of empowered spears, each dealing [45% STR] Physical Damage.
                \r\n\r\n  • The final spear deals a burst of [90% STR] Physical Damage
                \r\n  • These spears pass through everything
                \r\n  • You are CC Immune while using this ability`,
            "valueKeys": {
                "damage": [65, 90, 115, 140, 165],
                "perTickscalePercent": { "stregth": 45 },
                "finalDamage": [125, 175, 225, 275, 325],
                "finalScalePercent": { "stregth": 115 },
                "rangeData": { "range": 12.8, "radius": 0.56, "finalRadius": 0.72 },
                "channel Duration": 1.5,
                "cooldown": [90, 85, 80, 75, 70],
                "cost": [80, 85, 90, 95, 100],
            }
        }
    }
}

// health: '591.375 | 92.625',
// mana: '296 | 42',
// speed: '375',
// baseAttackSpeed: '0.99',
// attackSpeedPercent: '1.484 | 1.48',
// physProt: '18.4 | 2.910526315789474',
// magProt: '26.7 | 1.4526315789473683',
// hp5: '1.7 | ?',
// mp5: '2.14 | ?'


module.exports = anhur;
