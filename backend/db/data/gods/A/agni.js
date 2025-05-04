const agni =
{
    godId: 'hiAGNI',
    godName: 'Agni',
    title: 'God Of Fire',
    pantheon: 'Hindu',
    tags: ["Ranged", "Magical", "INT", "Nuker", "Burst", "Damage", "Sniper"],
    stats: {
        "maxHealth": { "baseLevel": 617.625, "perLevel": 92.625 },
        "hp5": { "baseLevel": 2, "perLevel": 0.2105263157894737 },
        "maxMana": { "baseLevel": 296, "perLevel": 42 },
        "mp5": { "baseLevel": 2, "perLevel": 0.2631578947368421 },
        "basicDamage": { "baseLevel": 42.18, "perLevel": 2.28 },
        "baseAttackSpeed": { "baseLevel": 1, "perLevel": 0 },
        "attackSpeedPercent": { "baseLevel": 1.33, "perLevel": 1.33 },
        "physicalProtection": { "baseLevel": 17.57, "perLevel": 2.85 },
        "magicalProtection": { "baseLevel": 27.425, "perLevel": 1.425 },
        "movementSpeed": 365,
    },
    abilities: {
        "aspect": {
            "name": "Aspect of Combustion",
            "description": " Your Basic Attacks now ignite enemies dealing Magiacl Damage over time and stacking 5 times. Flame Wave and Rain of Fire consume ignites dealing a burst of damage. Rain of Fire has 45% reduced INT Scaling. Combustion gains 50 base damage per rank of the ability that consumes it. For every stack of Ignite, Combustion deals 30% more damage. ",
            "valueKeys": {
                "inginte": {
                    "baseDamage": 3,
                    "scalePercent": { "strength": 3 },
                    "igniteDuration": 3,
                    "maxIgniteStacks": 5,
                    "igniteStacksPerBasic": 1,
                    "igniteStacksPerCriticalStrike": 2,
                    "burstPerStack": { "baseDamage": 30, "scalePercent": { "strength": 80 } },
                }
            }
        },
        "basic": {
            "name": "Anubis Basic Attack",
            "shortDesc": "Fire a projectile that deals  Magical Damage to the first enemy hit. ",
            "valueKeys": {
                "scalePercent": { "inhandPower": 100, "strength": 100, "intelligence": 20 },
                "rangeData": { "radius": 0.48, "range": 8.8 }
            }
        },
        "passive": {
            "name": "Combustion",
            "shortDesc": `Hitting an enemy with a Basic Attack provides 1 stack of Combustion.
                Hitting an enemy god provides 2. At 4 stacks Agni's next Flame Wave or Rain Fire will ignite all enemies hit, dealing Magical Damage every 0.5s for 3s. When Agni kills an enemy god, he goes on a Hot Streak.
                When on a Hot Streak, Combustion is fully charged and using Flame Wave or Rain Fire does not consume Combustion.`,
            "valueKeys": {
                "damage": 5,
                "scalePercent": 6,
                "duration": 3,
                "hotStreakDuration": 10
            }
        },
        "ab1": {
            "name": "Noxious Fumes",
            "shortDesc": `Summon a cloud of noxious fumes which deals Magical Damage every second.
            Hitting the fumes with any of your other abilities detonates the gas, Stunning and dealing Magical Damage to enemies in the area.\r\n
            \r\n  • Fumes last for 10 seconds.`,
            "valueKeys": {
                "ticDamage": [10, 20, 30, 40, 50],
                "ticScalePercent": { "intelligence": 5 },
                "explodeDamage": [20, 40, 60, 80, 100],
                "explodeScalePercent": { "intelligence": 20 },
                "stunDuration": 0.8,
                "rangeData": { "radius": 3.2, "range": 8.8 },
                "cooldown": 13,
                "cost": [60, 65, 70, 75, 80],
            }
        },
        "ab2": {
            "name": "Flame Wave",
            "shortDesc": "Summon a wave of fire, dealing Magical Damage. \r\n\r\n  • Ignites Noxious Fumes",
            "valueKeys": {
                "damage": [100, 155, 210, 265, 320],
                "scalePercent": { "intelligence": 65 },
                "cooldown": [15, 14.5, 14, 13.5, 13],
                "cost": [60, 65, 70, 75, 80],
                "rangeData": { "radius": 2.6, "range": 8 },
            }
        },
        "ab3": {
            "shortDesc": `Dash forward and leave a trail of fire behind you.
                Enemies that enter the area take Magical Damage every .5s for 2s. \r\n
                \r\n • Flame trail lasts for 3s \r\n
                \r\n • Ignites Noxious Fumes`,
            "name": "Path of Flames",
            "valueKeys": {
                "damage": [20, 30, 40, 50, 60],
                "scalePercent": { "intelligence": 15 },
                "rangeData": { "range": 9.6 },
                "Cooldown": 16,
                "Cost": [40, 50, 60, 70, 80],
            }
        },
        "ab4": {
            "name": "Rain Fire",
            "shortDesc": `Summon a meteor, dealing Magical Damage.
                You can have up to 3 charges of this ability. \r\n
                \r\n  • Ignites Noxious Fumes`,
            "valueKeys": {
                "damage": [135, 175, 215, 255, 295],
                "scales": { "intelligence": 65 },
                "rangeData": { "Radius": 3.2, "Range": 10.4 },
                "Cooldown": 18,
                "Cost": [90, 90, 90, 90, 90],
            }
        }
    }
}


module.exports = agni;
