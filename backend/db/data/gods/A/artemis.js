const artemis =
{
    godId: 'grARTE',
    godName: 'Artemis',
    title: 'Goddess Of The Hunt',
    pantheon: 'Greek',
    tags: ["Ranged", "Physical", "STR", "Sharpshooter", "Lockdown"],
    stats: {
        "AttackSpeedPercent": { "1": 1.484, "20": 29.68, "rate": "1.48" },
        "BaseAttackSpeed": { "1": 0.99, "20": 0.99, "rate": "0.00" },
        "MagicalProtection": { "1": 26.7, "20": 54.3, "rate": 1.4526315789473683 },
        "MaxHealth": { "1": 591.375, "20": 2351.25, "rate": 92.625 },
        "MaxMana": { "1": 296, "20": 1094, "rate": 42 },
        "PhysicalProtection": { "1": 18.4, "20": 73.7, "rate": 2.910526315789474 },
        "BasicDamage": { "1": 47, "20": 95, "rate": 2.526315789473684 },
        "ManaPerSecond": { "1": 2, "20": 7, "rate": 0 },
        "HealthPerSecond": { "1": 2, "20": 6, "rate": 0 }
    },
    abilities: {
        "aspect": {
            "description": "Transgressor's Fate no longer roots or cripples gods, but can now target minions. Triggered traps now also heal Artemis for [5% STR] 3 times over 3 seconds and deal [35% STR] Physical Damage to enemies in a larger area. ",
            "icon": "/icons/artemisAspect.webp",
            "name": "**__Aspect of the Wild__**",
            "valueKeys": {
                "Healing": [15, 23, 30, 37, 45],
                "Trap Damage": [12, 24, 36, 48, 60],
                "Damage Radius": [2.56]
            }
        },
        "basic": {
            "formulas": { "Damage_Formula": "{Damage} + {Damage_Scaling}" },
            "icon": "/Anhur/Icon_BasicAttack_Physical.webp",
            "key": "Basic.RangedPhys.InGame.Short",
            "name": "Anhur Basic Attack",
            "scales": {
                "Damage_Scaling": [
                    { "stat": "PhysicalPower", "values": [1] },
                    { "stat": "MagicalPower", "values": [0.2] }
                ]
            },
            "shortDesc": "Fire a projectile that deals  Physical Damage</> to the first enemy hit. ",
            "valueKeys": { "Damage": [0], "RadiusCheat": [0.48], "RangeCheat": [8.8] }
        },
        "passive": {
            "NamedValuesDuplicates": true,
            "icon": "/icons/artemisPassive.webp",
            "key": "Artemis.PSV.InGame.Short",
            "name": "Still Target",
            "shortDesc": "Artemis deals 15% increased Basic Attack Damage to gods that are affected by Crowd Control, and 30% increased Basic Attack Damage to non-gods affected by Crowd Control. She is also able to detect nearby enemy gods hidden in stealth grass."
        },
        "A01": {
            "formulas": {
                "DamageIncrease_Formula": "{DamageIncrease} + {DamageIncrease_Scaling}"
            },
            "icon": "/icons/artemisOne.webp",
            "key": "Artemis.A01.InGame.Short",
            "name": "Transgressor's Fate",
            "scales": {
                "Damage_Scaling": [
                    { "stat": "PhysicalPower", "values": [0.3, 0.3, 0.3, 0.3, 0.3] }
                ]
            },
            "shortDesc": "Place a trap on the ground. Enemy gods that come in contact with it activate it, Rooting, Crippling, and repeatedly dealing [30% STR] Physical damage per second for 3 seconds.\r\n\r\n  • A max of 4 traps can be placed at the same time.",
            "valueKeys": {
                "Cooldown": [14, 13, 12, 11, 10],
                "Cost": [45, 45, 45, 45, 45],
                "Damage": [26, 36, 46, 56, 66],
                "Radius": [0.8, 0.8, 0.8, 0.8, 0.8],
                "Range": [6.5, 6.5, 6.5, 6.5, 6.5],
                "Root Duration": [1.75, 1.75, 1.75, 1.75, 1.75],
                "Cripple Duration": [1.75, 1.75, 1.75, 1.75, 1.75]
            }
        },
        "A02": {
            "formulas": { "Damage_Formula": "{Damage} + {Damage_Scaling}" },
            "icon": "/icons/artemisTwo.webp",
            "key": "Artemis.A02.InGame.Short",
            "name": "Vengeful Assault",
            "shortDesc": "Greatly increase your Movement Speed and Attack Speed.\r\n\r\n  • On activation, you are cleansed of Slows and become Slow Immune for 0.6s.\r\n  • While the buff is active, gain a charge each time you hit an enemy god. At 4 charges, these charges are consumed to extend your buff duration by 3s. (This can occur infinite times)",
            "valueKeys": {
                "Cooldown": [14, 14, 14, 14, 14],
                "Cost": [60, 65, 70, 75, 80],
                "Movement Speed": [25, 25, 25, 25, 25],
                "Attack Speed": [25, 35, 45, 55, 65],
                "Buff Duration": [3, 3.5, 4, 4.5, 5]
            }
        },
        "A03": {
            "formulas": { "Damage_Formula": "{Damage} + {Damage_Scaling}" },
            "icon": "/icons/artemisThree.webp",
            "key": "Artemis.A03.InGame.Short",
            "name": "Suppress the Insolent",
            "scales": {
                "Damage_Scaling": [
                    { "stat": "PhysicalPower", "values": [0.75, 0.75, 0.75, 0.75, 0.75] }
                ]
            },
            "shortDesc": "Fire a volley at the target area, dealing [75% STR] Physical Damage and Slowing enemies.",
            "valueKeys": {
                "Cooldown": [9, 9, 9, 9, 9],
                "Cost": [50, 55, 60, 65, 70],
                "Slow Strength": ["25%", "25%", "25%", "25%", "25%"],
                "Slow Duration": [2, 2, 2, 2, 2],
                "Damage": [100, 150, 200, 250, 300],
                "Radius": [2.4, 2.4, 2.4, 2.4, 2.4],
                "Range": [8.8, 8.8, 8.8, 8.8, 8.8]
            }
        },
        "A04": {
            "formulas": {
                "Damage_Formula": "{Damage} + {Damage_Scaling}",
                "FinalDamage_Formula": "{FinalDamage} + {FinalDamage_Scaling}"
            },
            "icon": "/icons/artemisFour.webp",
            "key": "Artemis.A04.InGame.Short",
            "name": "Calydonian Boar",
            "scales": {
                "Damage_Scaling": [
                    { "stat": "PhysicalPower", "values": [0.9, 0.9, 0.9, 0.9, 0.9] }
                ]
            },
            "shortDesc": "Summon the great Calydonian Boar, charging at the closest enemy god, dealing [90% STR] Physical Damage and Stunning them.\r\n\r\n  \r\n  • The boar is immune until it hits its first god, then charges at remaining enemy gods. If none are left, it will begin to basic attack minions.\r\n  • You are CC immune for 1.5s after using this ability.",
            "valueKeys": {
                "Boar Health": [350, 450, 550, 650, 750],
                "Cooldown": [90, 90, 90, 90, 90],
                "Cost": [45, 45, 45, 45, 45],
                "Damage": [150, 220, 290, 360, 430],
                "Stun Duration": [0.9, 1, 1.1, 1.2, 1.3],
                "Radius": [9.6, 9.6, 9.6, 9.6, 9.6],
                "Range": [9.6, 9.6, 9.6, 9.6, 9.6]
            }
        }
    }
}


module.exports = artemis;
