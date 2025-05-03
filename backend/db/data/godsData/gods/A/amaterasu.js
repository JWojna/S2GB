const Amaterasu =
{
    godId: 'jpAMAT',
    godName: 'Amaterasu',
    title: 'The Shining Light',
    pantheon: 'Japanese',
    tags: ["Melee", "Physical", "Hybrid", "Brawler", "Tank", "Buffs"],
    stats: {
        "maxHealth": { "baseLevel": 647.4, "perLevel": 101.39999999999999 },
        "hp5": { "baseLevel": 2, "20": 6, "perLevel": 0.2105263157894737 },
        "maxMana": { "baseLevel": 287, "perLevel": 41 },
        "mp5": { "baseLevel": 2, "20": 7, "perLevel": 0.2631578947368421 },
        "basicDamage": { "baseLevel": 43, "perLevel": 2.3157894736842106 },
        "baseAttackSpeed": 1,
        "attackSpeedPercent": { "baseLevel": 1.442, "perLevel": "1.44" },
        "magicalProtection": { "baseLevel": 28.3, "perLevel": 1.5473684210526317 },
        "physicalProtection": { "baseLevel": 19.6, "perLevel": 3.089473684210526 },
        "movementSpeed": 365,
    },
    abilities: {
        "aspect": {
            "name": "Aspect Of Valor",
            "description": `Divine Presence now defaults to Red Buff, and when activated you gain Movement Speed, Haste, and Basic Attack Power in addition to the original effects.
                It no longer alternates to Gold Buff, or Heals you when activated.`,
            "valueKeys": {
                "basicDamage": [6, 12, 18, 24, 30],
                "hastePercent": 10,
                "movementSpeed": [15, 17.5, 20, 22.5, 25]
            }
        },
        "basic": {
            "name": "Amaterasu Basic Attack",
            "shortDesc": "Deal Physical Damage to an enemy in front of you. Has three hit chain.",
            "valueKeys": {
                "rangeData": { "coneAngle": 120, "range": 1.92 },
                "attackProgressionDamage": [1, 0.5, 1],
                "attackProgressionSpeed": [1, 0.5, 1],
            }
        },
        "passive": {
            "name": "Illuminating Strike",
            "shortDesc": `Basic attack an enemy 3 times to illuminate their weaknesses, causing them and other nearby enemies to take more damage from all sources.`,
            "valueKeys": {
                "damagePercent": 10,
                "debuffDuration": 6,
                "radius": 4.8
            }
        },
        "ab1": {
            "name": "Divine Presence",
            "shortDesc": `Heal yourself for over 4s, and alternate between the Gold and Red buff effects.
                \n\t\t\t\n\t • Gold buff provides a Health Shield for 6s on activation, and a persistent Movement Speed Buff
                \n\t • Red buff provides an Attack Speed buff for 6s on activation, and a persistent Strength and Intelligence Buff \n`,
            "valueKeys": {
                "healTick": [15, 25, 35, 45, 55],
                "healSacalePercent": { "intelligence": 5 },
                "healthShieldPercent": [4, 5, 6, 7, 8],
                "movespeedPercent": [5, 7, 9, 11, 13],
                "attackSpeedPercent": [10, 14, 18, 22, 26],
                "strengthAura": [14, 18, 22, 26, 30],
                "strengthAuraScalePercent": { "intelligence": 5 },
                "intelligenceAura": [9, 11, 13, 15, 17],
                "intelligencethAuraScalePercent": { "intelligence": 3 },
                "rangeData": { "radius": 5.6 },
                "buffDuration ": 6,
                "cooldown": 12,
                "cost": 30,
            }
        },
        "ab2": {
            "name": "Heavenly Reflection",
            "shortDesc": `Charge your Mirror for 5s and decrease all damage you take while charging.
                Reactivate the ability to fire a projectile that deals Physical Damage to enemies, increased by the Mirror's charge amount.
                \r\n\t\t\r\n\t • Deal and take damage to charge the Mirror \r\n\t • Base Damage is doubled when Mirror is fully charged`,
            "valueKeys": {
                "damage": [70, 105, 140, 175, 210],
                "scalePercent": { "strength": 60, "intelligence": 60 },
                "mitigationPercent": [7, 9, 11, 13, 15],
                "mitigationScalePercent": { "intelligence": 5 },
                "buffDuration": 5,
                "rangeData": { "range": 8.8, "radius": 0.8, },
                "cooldown": 12,
                "cost": [60, 65, 70, 75, 80],
            }
        },
        "ab3": {
            "name": "Glorious Charge",
            "shortDesc": `Silence enemies in front of you for 1s, then dash forward and deal Physical Damage.
                \r\n\t\t\r\n\t  • Pierces through and damages minions but stops on first god hit `,
            "valueKeys": {
                "damage": [80, 135, 190, 245, 300],
                "scalePercent": { "strength": 60 },
                "silenceDuration": 1,
                "rangeData": { "radius": 3.2, "range": 8.8 },
                "cost": 60,
                "cooldown": 15,
            }
        },
        "ab4": {
            "name": "Dazzling Offensive",
            "shortDesc": `Become CC Immune and then attack 3 times to deal Physical Damage to enemies in front of you each time.
                \r\n\t\t\r\n\t  • Attacks deal more damage and have bonus effects on each subsequent successful hit
                \r\n\t  • 2nd hit deals 1.2x damage and Slows by 30% for 2s
                \r\n\t  • 3rd hit deals 1.4x damage and Stuns for 1.5s`,
            "valueKeys": {
                "damage": [100, 140, 180, 220, 260],
                "scalePercent": { " strength": 45, "intelligence" : 35 },
                "slowPercent": 30,
                "slowDuration": 2,
                "stunDuration": 1.5,
                "coneAngle": 110,
                "radiusCheat": 5.6,
                "cooldown": [110, 105, 100, 95, 90],
                "cost": 100,
            }
        }

    }
}

