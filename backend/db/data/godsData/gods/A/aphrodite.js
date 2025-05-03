const Aphrodite =
{
    godId: 'grAPHR',
    godName: 'Aphrodite',
    title: 'Goddess Of Beauty',
    pantheon: 'Greek',
    tags: ["Ranged", "Magical", "INT", "Healing", "Buffs", "Sustain"],
    stats: {
        "maxHealth": { "baseLevel": 591.375, "perLevel": 92.625 },
        "hp5": { "baseLevel": 2, "perLevel": 0.2105263157894737 },
        "maxMana": { "baseLevel": 296, "perLevel": 42 },
        "mp5": { "baseLevel": 2, "perLevel": 0.2631578947368421 },
        "basicDamage": { "baseLevel": 42.18, "perLevel": 2.28 },
        "baseAttackSpeed": 0.93,
        "attackSpeedPercent": { "baseLevel": 1.4, "perLevel": "1.40" },
        "physicalProtection": { "baseLevel": 17.57, "perLevel": 1.425 },
        "movementSpeed": 365
    },
    abilities: {
        "aspect": {

        },
        "basic": {
            "name": "Aphrodite Basic Attack",
            "shortDesc": "Fire a projectile that deals Magical Damage to the first enemy hit.",
            "valueKeys": {
                "Damage": [5, 5, 5, 5, 5],
                "scalePercent": { "inhandPower": 100, "strength": 100, "intelligence": 20 },
                "rangeDate": { "radius": 0.48, "range": 8.8 }
            }
        },
        "passive": {
            "name": "Center of Attention",
            "shortDesc": "Gain Physical Protection and Magical Protection for each friendly or enemy god nearby.",
            "valueKeys": { "protections": 3 }
        },
        "ab1": {
            "name": "Kiss",
            "shortDesc": `Fire a kiss projectile at an allied god to link a Soul Mate, giving you both increased movement speed, and reduce Kiss's cooldown.
                If the kiss hits an enemy god, they take Magical Damage, are Stunned and your Soul Mate becomes Jealous, increasing their damage dealt.
                \r\n\t\r\n\t  •The Soul Mate gains 50% of your MP5 and 8% of your Protections.`,
            "valueKeys": {
                "damage": [40, 60, 80, 100, 120],
                "scalePErcent": { "intelligence": 25 },
                "stun": 0.8,
                "damageBuffPercent": [6, 7, 8, 9, 10],
                "buffDuration": 5,
                "movementSpeedPercent": [6, 6.5, 7, 7.5, 8],
                "rangeData": { "range": 8.8, "radius": 0.8, },
                "cooldown": [14, 13.5, 13, 12.5, 12],
                "cost": [50, 55, 60, 65, 70],
            }
        },
        "ab2": {
            "name": "Back Off!",
            "shortDesc": `Deal [85% INT] Magical Damage, Slow, and Push away enemies around you.
             \r\n\t\r\n\t  •If you have a Soul Mate, Deal Magical Damage, Slow, and Push away enemies around them as well.
              If an enemy is hit by both areas, they take 85% reduced damage from the 2nd area.`,
            "valueKeys": {
                "damage": [80, 140, 200, 260, 320],
                "scalePercent": { "Intelligence": 85 },
                "linkDamage": [80, 140, 200, 260, 320],
                "linkScalePercent": { "Intelligence": 50 },
                "bonusAreaDamage": [20, 35, 50, 65, 80],
                "bonusScalePercent": { "Intelligence": 15 },
                "slowPercent": 20,
                "slowDuration": 2,
                "cooldown": [14, 13.5, 13, 12.5, 12],
                "cost": [70, 75, 80, 85, 90],
            }
        },
        "ab3": {
            "name": "Love Birds",
            "shortDesc": `Fire a doves projectile that deals Magical Damage repeatedly over time to enemies hit.
                \r\n\t\r\n\t • On fire, Aphrodite and her Soul Mate start Healing repeatedly over time, and have their active cooldowns decreased per tick.`,
            "valueKeys": {
                "damage": [15, 25, 35, 45, 55],
                "scalePercent": { "intelligence": 17.5 },
                "heal": [10, 15, 20, 25, 30],
                "selfHealscalePercent": { "intelligence": 7.5 },
                "allyHealscalePercent": { "intelligence": 5 },
                "cooldown": 16,
                "cost": [70, 75, 80, 85, 90],
            }
        },
        "ab4": {
            "name": "Undying Love",
            "shortDesc": `You and your Soul Mate become Damage Immune, CC Immune, and gain the Jealousy effect for a short duration.
            \r\n\t\r\n\t  •Reactivate to Leap to your Soul Mates location.`,
            "valueKeys": {
                "buffDuration": [0.8, 1.1, 1.4, 1.7, 2],
                "cooldown": 100,
                "cost": [50, 55, 60, 65, 70]
            }
        }
    }
}

