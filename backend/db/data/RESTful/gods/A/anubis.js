const anubis =
{
    godId: 'egANUB',
    godName: 'Anubis',
    title: 'God Of The Dead',
    pantheon: 'Egyptian',
    tags: ["Ranged", "Magic", "INT", "Nuker", "Lockdown"],
    stats: {
        "maxHealth": { "baseLevel": 591.375, "perLevel": 92.625 },
        "hp5": { "baseLevel": 2, "perLevel": 0.2105263157894737 },
        "maxMana": { "baseLevel": 314, "perLevel": 45 },
        "mp5": { "baseLevel": 2, "perLevel": 0.2631578947368421 },
        "basicDamage": { "baseLevel": 42, "perLevel": 2.3157894736842106 },
        "baseAttackSpeed": { "baseLevel": 0.93, "perLevel": "0.00" },
        "attackSpeedPercent": { "baseLevel": 1.358, "perLevel": "1.36" },
        "physicalProtection": { "baseLevel": 19, "perLevel": 3 },
        "magicalProtection": { "baseLevel": 26.7, "perLevel": 1.4526315789473683 },
        "movementSpeed": 375
    },
    abilities: {
        "aspect": {

        },
        "basic": {
            "name": "Anubis Basic Attack",
            "shortDesc": "Fire a projectile that deals Magical Damage to the first enemy hit. ",
            "valueKeys": {
                "scalePercent": { "inhandPower": 100, "strength": 100, "intelligence": 20 },
                "rangeDate": { "radius": 0.48, "range": 8.8 }
            }
        },
        "passive": {
            "name": "The Scales",
            "shortDesc": `As your health declines, gain additional Lifesteal, Physical Protection, and Magical Protection.
                \r\n\r\n  • Gain 1 stack per 10% missing health
                \r\n  • At max stacks protections are doubled and lifesteal is tripled`,
            "valueKeys": {
                "protections": { "baseLevel": 10, "perLevel": 0.5 },
                "lifestealPercent": 6,
                "maxStacks": 8,
            }
        },
        "ab1": {
            "name": "Plague Of Locusts",
            "shortDesc": `Locusts fly from your mouth, repeatedly dealing Magical Damage in an area in front of you.
                \r\n\r\n  • This is a Channeled ability
                \r\n  • You are Displacement Immune and move at reduced Movement Speed while Channeling,
                \r\n  • This ability hits 12 times over 2.5 seconds`,
            "valueKeys": {
                "damage": [15, 22, 29, 36, 43],
                "scalePercent": { "intelligence": [18, 19, 20, 21, 22] },
                "selfSlowPercent": [35, 30, 25, 20, 15],
                "rangeDate": { "radius": 5.6, "coneAngle": 110 },
                "cooldown": [10, 9.5, 9, 8.5, 8],
                "cost": [30, 40, 50, 60, 70],
            }
        },
        "ab2": {
            "name": "Mummify",
            "shortDesc": `Fire a bandage projectile, mummifying and Stunningthe first god hit.
                \r\n\r\n  • This ability deals Magical Damage, only to gods`,
            "valueKeys": {
                "damage": [60, 85, 110, 135, 160],
                "scalePercent": { "intelligence": 55 },
                "stunDuration": [0.85, 0.9, 0.95, 1, 1.05],
                "rangeData": { "range": [11.2, 11.2, 11.2, 11.2, 11.2], "radius": 0.56 },
                "cooldown": [16, 15.5, 15, 14.5, 14],
                "cost": [50, 55, 60, 65, 70],
            }
        },
        "ab3": {
            "name": "Grasping Hands",
            "shortDesc": `Summon allies from the underworld, dealing Magical Damage repeatedly to enemies in an area.
                \r\n\r\n   • This also Slows enemies in the area,
                \r\n\r\n   • This ability hits 4 times over 1.5 seconds.,
                \r\n\r\n   • Slow is refreshed on each hit, and does not stack.`,
            "valueKeys": {
                "damage": [25, 45, 65, 85, 105],
                "scalePercent": { "intelligence": 35 },
                "slowPercent ": 25,
                "slowDuration": 2,
                "rangedData": { "range": 8.8, "radius": 3.2, },
                "coldown": [14, 13, 12, 11, 10],
                "cost": [40, 50, 60, 70, 80],
            }
        },
        "ab4": {
            "name": "Death Gaze",
            "shortDesc": `Your piercing gaze burns enemies in a line.
                \r\n\r\n  • This deals an initial burst of Magical Damage
                \r\n  • Then Channels to repeatedly deal Magical Damage
                \r\n  • You are CC Immune while using this ability,
                \r\n  • Ability hits 24 times, plus the intial burst, over 2.4 seconds.`,
            "valueKeys": {
                "1nitialDamage": [140, 170, 200, 230, 260],
                "intitialScalePercent": { "intelligence": 90 },
                "damagePerTick": [27, 32, 37, 42, 47],
                "tickScalePercent": { "intelligence": 20 },
                "rangeData": { "range": 11.2, "radius": 0.72, },
                "cooldown": 90,
                "cost": 90,
            }
        }
    }
}


module.exports = anubis;
