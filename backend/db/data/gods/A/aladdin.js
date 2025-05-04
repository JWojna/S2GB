const aladdin =
{
    godId: 'taALAD',
    godName: 'Aladdin',
    title: 'The Sultan',
    pantheon: 'Tales of Arabia',
    tags: ["Melee", "Magical", "Hybrid", "Slayer", "Burst Damage", "Mobile"],
    stats: {
        "maxHealth": { "baseLevel": 591.375, "perLevel": 92.625 },
        "hp5": { "baseLevel": 2, "perLevel": 0.2105263157894737 },
        "maxMana": { "baseLevel": 296, "perLevel": 42 },
        "mp5": { "baseLevel": 2, "perLevel": 0.2631578947368421 },
        "basicDamage": { "baseLevel": 43, "perLevel": 2.3157894736842106 },
        "baseAttackSpeed": 1,
        "attackSpeedPercent": { "baseLevel": 1.442, "perLevel": "1.44" },
        "physicalProtection": { "baseLevel": 19.6, "perLevel": 3.089473684210526 },
        "magicalProtection": { "baseLevel": 28.3, "perLevel": 1.5473684210526317 },
        "movementSpeed": 365,
    },
    abilities: {
        "aspect": {

        },
        "basic": {
            "name": "Aladdin Basic Attack",
            "shortDesc": "Deal Physical Damage to an enemy in front of you. The final three hits cleave.",
            "valueKeys": {
                "scalePercent": { "inhandPower": 100, "strength": 100, "intelligence": 20 },
                "rangeData": { "coneAngle": 120, "range": 1.92 },
                "attackProgression": [1, 1, 0.33, 0.33, 0.5],
            }
        },
        "passive": {
            "name": "Three Wishes",
            "shortDesc": `Make 3 wishes at any time in the match. Gain up to 2 charges of Genie's Strength every 15s.
                \n\t\t\t• Wish: Wealth. Gain 250 gold. God Kills & Assists provide 100 more gold for 3 minutes
                \n\t\t\t• Wish Immortality. While dead, wish to be instantly revived. Gain 75% Movement Speed for 10s when leaving the fountain
                \n\t\t\t• Wish Power. Reset ability and item cooldowns. Gain 2 charges of Genie's Strength`
        },
        "ab1": {
            "name": "Kufic Invocation",
            "shortDesc": `Fire 5 Kufic symbols that deal Magical Damage to enemies in a cone.
                \t\t\t\t• When fully charged the symbols merge dealing increased Magical Damage.
                \n\t\t\t\t• When fully charged the symbol travels further and hits a larger area
                \n\t\t\t\t• Use a charge of Genie's Strength to send symbols back to Aladdin, dealing Magical Damage/`,
            "valueKeys": {
                "smallDamageSend": [40, 60, 80, 100, 120],
                "smallSendScalePercent": { "intelligence": 45, "strength": 40 },
                "chargeDamageSend": [70, 120, 170, 220, 270],
                "chargeSendScalePercent": { "intelligence": 81, "strength": 72 },
                "smallDamageReturn": [40, 60, 80, 100, 120],
                "smallReturnScalePercent": { "intelligence": 40, "strength": 45 },
                "chargeDamageReturn": [70, 120, 170, 220, 270],
                "chargeReturnScalePercent": { "intelligence": 60, "strength": 65 },
                "rangeData": {
                    "maxStartingAngle": 90,
                    "radius": 0.8,
                    "radiusCharged": 1.6,
                    "range": 8.8,
                    "rangedCharged": 11.2
                },
                "cooldown": 11,
                "cost": [65, 70, 75, 80, 85]
            }
        },
        "ab2": {
            "name": "Sultan's Grace",
            "shortDesc": `Dash forward dealing Magical Damage to enemies you pass through.
                \n\t\t\t\t• Deals increased damage to enemies for each % Health below 50%
                \n\t\t\t\t• Use a charge of Genie's Strength to summon the Genie to unleash a flurry of 5 punches that deal Magical Damage to enemies in front of Aladdin`,
            "valueKeys": {
                "dashDamage": [70, 120, 170, 220, 270],
                "dashScalePercent": { 'intelligence': 65, "strength": 65 },
                "missingHPBonusScalePercent": { "intelligence": 0.13 },
                "punchDamage": [20, 30, 40, 50, 60],
                "punchScalePercent": { "intelligence": 15, "strength": 30 },
                "rangeData": { "range": 8.8 },
                "Cooldown": [16, 15.5, 15, 14.5, 14],
                "Cost": [60, 65, 70, 75, 80],
            }
        },
        "ab3": {
            "name": "Agile Run",
            "shortDesc": `Dash forward. Dashing into a wall causes you to run along it before leaping to a location, dealing Magical Damage to enemies in the landing area.
                \n\t\t\t\t• Use a charge of Genie's Strength to call the Genie to slam down at the landing location. Enemies take Magical Damage and are knocked straight up `,
            "valueKeys": {
                "landingDamage": [60, 105, 150, 195, 240],
                "landingScalePercent": { "intelligence": 55, "strength": 50 },
                "genieDamage": [20, 30, 40, 50, 60],
                "genieScalePercent": { "intelligence": 15, "strength": 25 },
                "rangeDate": {
                    "leapRadius": 3.2,
                    "leapRange": 8.8,
                },
                "cooldown": 16,
                "cost": [50, 55, 60, 65, 70],
            }
        },
        "ab4": {
            "name": "Into The Lamp",
            "shortDesc": `Throw the Lamp forward, stopping on first enemy god hit and dealing [65% INT + 50% STR] Magical Damage.
                This damage cannot proc item effects and cannot bring the target lower than the health they would be healed to.
                If successful, Aladdin and the enemy god are pulled into the lamp to challenge each other.
                \n\t\t\t\t• They have their health restored to a minimum amount. Aladdin's non-ultimate cooldowns are reset. The target's non-ultimate cooldowns are halved
                \n\t\t\t\t• The Lamp is left behind, allowing any god to enter the lamp and join the ongoing challenge.
                \n\t\t\t\t• The fight lasts for 16s, after which everyone is kicked out of the lamp. An escape lamp appears at 8s into a fight.
                \n\t\t\t\t•The escape can open early when either the main Aladdin and fight target (hereby referred to as combatants) die, or if only 1 team remains in the lamp.
                \n\t\t\t\t•Entering the lamp or leaving the lamp requires interacting with the lamp. This interaction takes 0.5s and is interrupted by taking damage.
                \n\t\t\t\t•Non-combatants deal 25% reduced damage to and take 12.5% increased damage from combatants.
                \n\t\t\t\t• If while a fight is active a different Aladdin brings a target into the lamp, they become the new combatants.
                The previous combatants are now treated as non-combatants and the arena resets its fight timer and closes the escape if it was active.
                \n\t\t\t\t• Gods outside the lamp cannot target gods inside the lamp. Gods inside the lamp cannot target gods outside the lamp.
                \n\t\t\t\t• Being kicked out of the lamp interrupts any currently firing ability.
                \n\t\t\t\t• Gods will be returned to the original locations and camera rotations when leaving the lamp.
                \n\t\t\t\t• Recalling and Aladdin's A04 are blocked from being used while inside the lamp.
                \n\t\t\t\t•**__This ability will always go off if it connects BEFORE CC immunity is cast. You have to pre-cleanse this ultimate to not get pulled into the lamp.__**`,
            "valueKeys": {
                "damage": [80, 140, 200, 260, 320],
                "scalePercent": { "intelligence": 65, "strength": 50 },
                "selfHealPercent": 50,
                "enemyHealPercent": 50,
                "selfCDR": [50, 55, 60, 65, 70],
                "enemyCDR": 50,
                "protections": [30, 35, 40, 45, 50],
                "cooldown": [110, 105, 100, 95, 90],
                "cost": [60, 65, 70, 75, 80],
            }
        }
    },
}


module.exports = aladdin;
