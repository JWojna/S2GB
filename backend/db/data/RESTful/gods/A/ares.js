const ares =
{
    godId: 'grARES',
    godName: 'Ares',
    title: 'God Of War',
    pantheon: 'Greek',
    tags: ["Melee", "Magical", "Hybrid", "Tank", "Lockdown", "Buffs"],
    stats: {
        "maxHealth": { "baseLevel": 672.3, "perLevel": 105.3 },
        "mp5": { "baseLevel": 2, "perLevel": 0.2631578947368421 },
        "maxMana": { "baseLevel": 296, "perLevel": 42 },
        "mp5": { "baseLevel": 2, "perLevel": 0.2105263157894737 },
        "basicDamage": { "baseLevel": 43, "perLevel": 2.3157894736842106 },
        "baseAttackSpeed": 0.93,
        "attackSpeedPercent": { "baseLevel": 1.4, "perLevel": "1.40" },
        "physicalProtection": { "baseLevel": 20.1, "perLevel": 3.184210526315789 },
        "magicalProtection": { "baseLevel": 29.2, "perLevel": 1.5894736842105264 },
        "movementSpeed": 375
    },
    abilities: {
        "aspect": {
            "name": "Aspect of Reverberation",
            "shortDesc": `Call to Arms no longer grants Protections or affects allies.
                 Instead, Ares empowers his Shield for his next Basic Attack, stunning the target and spreading damage to nearby enemies.`,
            "valueKeys": {
                "bonusBasicAttackDamage": [8, 16, 24, 30, 36],
                "stunDuration": 0.75,
                "buffDuration": 6
            }
        },
        "basic": {
            "name": "Ares Basic Attack",
            "shortDesc": "Deal Magical Damage to an enemy in front of you. ",
            "valueKeys": {
                "scalePercent": { "inhandPower": 100, "strength": 100, "intelligence": 20 },
                "rangeDate": { "coneAngle": 120, "range": 1.92 }
            }
        },
        "passive": {
            "name": "Blessed Armaments",
            "shortDesc": `Provide Strength and Intelligence in an Aura.
                \r\n\r\n  • Build Protections to increase Strength Aura [8%]
                \r\n  • Build Cooldown Rate to increase Intelligence Aura [80%]
                \r\n  • Both Auras increase with Level,
                \r\n  • Allies gain 50% of the buff`,
            "valueKeys": {
                "perLevel": 1,
                "strengthScalePercent": { "protections": 8 },
                "intelligenceScalePercent": { "cooldown": 80 }
            }
        },
        "ab1": {
            "name": "Shackles",
            "shortDesc": `Fire a Shackle projectile that deals Magical Damage and Slows.
                \r\n\r\n  • You can refire after hitting an enemy god
                \r\n  • Three Shackles may be out at one time
                \r\n  • Gain Movement Speed for each Shackled god
                \r\n  • Shackled gods take repeating Magical Damage and are Crippled`,
            "valueKeys": {
                "initialDamage": [40, 65, 90, 115, 140],
                "initialScalePercent": { "strength": 25, },
                "tickDamage": [20, 40, 60, 80, 100],
                "tickScalePercent": { "intelligence": 15 },
                "slowPercent": 15,
                "slowDuration": 4,
                "crippleDuration": 4,
                "speedBuffPercent": 15,
                "rangedata": { "range": 8.8, "radius": 2.4, },
                "cooldown": 15,
                "cost": [70, 75, 80, 85, 90],
            }
        },
        "ab2": {
            "name": "Call To Arms",
            "shortDesc": `You and nearby allied gods gain Magical and Physical Protections and Basic Attack Damage.
                You also gain HP/s while this buff is active.
                \r\n\r\n  • Damaging enemy gods increases the duration and the effects of this buff`,
            "valueKeys": {
                "physProtBuff": [20, 25, 30, 35, 40],
                "magProtBuff": [20, 25, 30, 35, 40],
                "inhandBuff": [8, 16, 24, 30, 36],
                "healthRegen": [10, 15, 20, 25, 30],
                "buffDuration": 6,
                "rangedata": { "radius": 5.6, },
                "cooldown": [15, 14.5, 14, 13.5, 13],
                "cost": [40, 45, 50, 55, 60],
            }
        },
        "ab3": {
            "name": "Searing Flesh",
            "shortDesc": `Flames pour from your shield, dealing Magical Damage repeatedly to enemies in front of you.
                \r\n\r\n  • This is a Channeled ability, but you can fire Shackles
                \r\n  • Deals bonus damage based on the enemies' maximum Health
                \r\n  • You are Displacement Immune while Channeling`,
            "valueKeys": {
                "tickDamage": [15, 20, 25, 30, 35],
                "tickDamageScalePercent": { "intelligence": 7, "maxHealth": [1, 1, 2, 3, 3] },
                "minionDamage": [15, 20, 25, 30, 35],
                "minionDamageScalePercent": { "intelligence": 7, "maxHealth": 4 },
                "rangedata": { "range": 5.6, "coneangle": 45, },
                "cooldown": 12,
                "cost": [55, 60, 65, 70, 75],
            }
        },
        "ab4": {
            "name": "No Escape",
            "shortDesc": `Attach a chain to nearby gods, then Pull the gods toward you, and finally Stun enemies around you.
                \r\n\r\n  • Deal Magical Damage when Chains attach
                \r\n  • Deal Magical Damage to nearby enemies while Stunning
                \r\n  • You are CC Immune and gain Damage Mitigation while using this ability`,
            "valueKeys": {
                "chainDamage": [60, 80, 100, 120, 140],
                "chainScalePercent": { "strength": 30 },
                "finalDamage": [250, 325, 400, 475, 550],
                "finalScalePercent": { "strength": 55 },
                "stun Duration": 0.75,
                "damage Mitigation": [20, 30, 40, 50, 60],
                "rangedata": { "range": 5.6, "finalRange": 2.8, },
                "cooldown": 90,
                "cost": [80, 85, 90, 95, 100],
            }
        }
    }
}


module.exports = ares;
