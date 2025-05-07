# S2GB

Smite 2 God builder
'Become a God!'

## RESTful api

![api-schema]

[api-schema]: ./images/RESTfulAPI.png

## user features api

![user-schema]

[user-schema]: ./images/userSideAPI.png

# Documentation

Since this project is for a game that is currently in beta developement, there is no current public api. So I built one.

The logic here is to keep the user side features tables seperate from the api data table

**SOME DATA IS STILL BEING SCRUBBED AND NORMALIZED AS THE GAME DEVELOPES SO WILL THIS**

## RESTful api

- The Gods table

  - Uses hardcoded godId's to create associations.
    - logic is for better data handeling, a simple tool will create an id i and when new gods are input
    - the standard id convention is <2 letter lowercse pantheon><4 letter capitals god>
      - ex: Achilles is grACHI , greek achilles
      - some names use an additional param for instance Baron Samedi of VooDoo is vdBASA
      - still tweaking normalization but GEFN
  - Stores higher level identifiers
  - Stats are stored in jsonb
  - Abilities are stored in jsob in their entirety including passives, basic attack info, and aspects if included

- The items table

  - Simply store higher level identifiers such as name and tier for querry purposes and the overall data in a jsonb format.

- The Image table is polymorphic.

  - Housing both item and god + their abilites image pathways. The images are served staticly with the front end build.
  - All ability icons will be pulled with god images.

## Routes

### These routes will be used to querry data for the user to interact with.

## GODS

### Get all Gods

Returns all the Gods.

- Require Authentication: false

- query logic

  - Pulls only higher level identifiers for filtering and associated image icon.
  - Used to display a tile style all page

- Request

  - Method: GET
  - Route path: api/Gods
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "Gods": [
        {
          "id": 1,
          "godId": "grACHI",
          "godName": "Achilles",
          "title": "Hero Of The Trojan War",
          "pantheon": "Greek",
          "tags": ["Melee", "Physical", "STR", "Brawler", "Execute", "Lockdown"],
          "icon": "images/gods/a/achilles/art/achillesImage.Webp"
        },
        {
          "id": 2,
          "godId": "hiAGNI",
          "godName": "Agni",
          "title": "God Of Fire",
          "pantheon": "Hindu",
          "tags": ["Ranged", "Magical", "INT", "Nuker", "Burst", "Damage", "Sniper"],
          "icon": "images/gods/a/agni/art/agniImage.Webp"
        },
        ... many objects
      ]
    }
    ```

### Get details of a God from a godId

Returns the details of a god specified by its hardcoded godId which gets pulled with the all querry, the tiles from all will have the godID for use

- Require Authentication: false

* query logic
  - Pulls all god data including all associated images for gods and abilities via imageableID.
  - Used to fill details component
  - Assets will be available for front end use: stats, ability images.

- Request

  - Method: GET
  - Route path: api/gods/:godId
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
     "God" = {
        "godId": "grACHI",
        "godName": "Achilles",
        "title": "Hero Of The Trojan War",
        "pantheon": "Greek",
        "tags": ["Melee", "Physical", "STR", "Brawler", "Execute", "Lockdown"],
        "stats": {
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
        "abilities": {
            "aspect": {
                "name": "Aspect of Prowess",
                "shortDesc": "Combat Dodge can now be recast after striking a Jungle Monster or Boss, with Spear Strike gaining increased Scaling when forgoing your Armor.
                    Radiant Glory no longer grants increased Protections or Crowd Control Reduction.",
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
                "shortDesc": "Choose to wear armor or forgo it. Wearing armor grants bonus Health and Protections, while forgoing it grants bonus Strength and Movement Speed.\r\n
                    \r\n      • Swap between armor states by using Basic Attacks while the Passive targeter is active inside the Fountain.",
                "valueKeys": {
                    "health": { "baseLevel": 25, "perLevel": 10 },
                    "protections": { "baseLevel": 5, "perLevel": 2 },
                    "strength": { "baseLevel": 3, "perLevel": 1.5 },
                    "movementSpeedPercent": { "baseLevel": 1, "perLevel": .25 },
                },
            },
            "ab1": {
                "name": "Shield of Achilles",
                "shortDesc": "Punch forward with your shield, dealing Physical Damage and Stunning enemies in a short cone. The force of the shield radiates further, dealing reduced damage.\r\n
                    \r\n      • The radiated force deals 70% Damage.
                    \r\n      • Non-God targets take 115% Damage.
                    \r\n      • .2 seconds increased Stun duration when Armored, 15% increased Scaling when forgoing your Armor.",
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
                "shortDesc": "You are blessed by the Gods, gaining bonus Strength, Protections, and 20% CCR for a short duration.
                    Damaging enemies with abilities during this time Heals you.\r\n
                    \r\n      • When Armored, the Gods' blessings also grant you a Physical Shield.
                    \r\n      • When forgoing your Armor, hitting an enemy god with your attacks from behind reduces their Protections.",
                "shortDescAspect": "You are blessed by the Gods, gaining bonus Strength for a short duration. Damaging enemies with abilities during this time Heals you.\r\n
                    \r\n      • When Armored, the Gods' blessings also grant you a Physical Shield.
                    \r\n      • When forgoing your Armor, hitting an enemy god with your attacks from behind reduces their Protections.",
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
                "shortDesc": "Dodge in your current direction and ready your spear to strike enemies for Physical Damage.
                    Hitting an enemy god with the strike allows you to recast the ability once before it goes on cooldown.\r\n
                    \r\n      • When Armored, striking an enemy god with your spear Slows them, stacking up to 2 times.
                    \r\n      • When forgoing your Armor, the speed of your dodge is doubled.",
                "shortDescAspect": "Dodge in your current direction and ready your spear to strike enemies for Physical Damage.
                    Hitting a God or Jungle Monster with the strike allows you to recast the ability once before it goes on cooldown.\r\n
                    \r\n      • When Armored, striking an enemy god with your spear Slows them, stacking up to 2 times.
                    \r\n      • When forgoing your Armor, the speed of your dodge is doubled, and Spear Strike has 15% increased Scaling.",
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
                "shortDesc": "Prepare briefly, then Dash forward, dealing Physical Damage to enemies and Executing gods that are below 35% health.
                    Killing a god allows you to recast this ability up to five times.\r\n
                    \r\n      • Each kill exposes your heel, increasing your damage taken by 5%.",
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
        },
        "icons": [
            {
                "imageableType": "god",
                "imageableId": "grACHI",
                "url": "images/gods/a/achilles/art/achillesImage.webp"
            },
            {
                "imageableType": "god",
                "imageableId": "grACHI",
                "url": "images/gods/a/achilles/abilities/achillesAspect.webp"
            },
            {
                "imageableType": "god",
                "imageableId": "grACHI",
                "url": "images/gods/a/achilles/abilities/achillesPassive.webp"
            },
            {
                "imageableType": "god",
                "imageableId": "grACHI",
                "url": "images/gods/a/achilles/abilities/achillesOne.webp"
            },
            {
                "imageableType": "god",
                "imageableId": "grACHI",
                "url": "images/gods/a/achilles/abilities/achillesTwo.webp"
            },
            {
                "imageableType": "god",
                "imageableId": "grACHI",
                "url": "images/gods/a/achilles/abilities/achillesThree.webp"
            },
            {
                "imageableType": "god",
                "imageableId": "grACHI",
                "url": "images/gods/a/achilles/abilities/achillesFour.webp"
            },
        ],
    };
    ```

- Error response: Couldn't find a God with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "God couldn't be found"
    }
    ```

### Create a God

- This is a future feature.
  - Admin protected route to allow for easier addition of newer gods through the front end.

### Update a God

- This is a future feature.
  - Admin protected route to allow for easier updating of gods (buffs/nerfs happen) through the front end.

### Delete a God

- This is a future feature.
  - Admin protected route, however will unlikely be implemented as i dont forsee god removal being necissary

## Items

### Get all Items

Returns all the Items.

- Require Authentication: false

- query logic

  - Pulls only higher level identifiers for filtering and associated image icon.
  - Used to display a all page, as well as populate the builder modal for user interactions
    - This route will be used for its own all page as well as the builder page.
  - **Future feature**
    - May impliment the ability for user to create a items tier list as well as favorite items

- Request

  - Method: GET
  - Route path: api/Gods
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:
    ```json
    {
      "Items": [
        {
          "id": 1,
          "name": "Axe",
          "tier": 1,
          "tags": [
            "Strength",
            "Passive",
            "ItemTier.Tier1",
            "StartingLoadout",
            "Tier1",
            "Carry.STR",
            "Mid.STR",
            "Carry.Hybrid"
          ],
          "icon": "images/items/axe.webp"
        },
        {
          "id": 2,
          "name": "Blood-Soaked Shroud",
          "tier": 1,
          "tags": ["Starter", "Intelligence", "Lifesteal"],
          "icon": "images/items/bloodSoaked.webp"
        },
        ... many objects
      ]
    }
    ```

### Get details of an Item from the item Id

Returns the details of a item specified by its internal Id , the tiles from all will have the Id for use.

- Require Authentication: false

* query logic
  - Pulls all item data including associated images for items via imageableID.
  - Used to fill details component
  - Assets will be available for front end use: stats, passive, totalcost, stepcost .

- Request

  - Method: GET
  - Route path: api/items/:itemId
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:
    ```json
    "Item" = {
        "name": "Axe",
        "tier": 1,
        "data": {
        "buildsIntoT2": [
        "AdamantineSickle",
        "BattleAxe",
        "Caestus",
        "InfusedAxe",
        "Kopesh",
        "LucerneHammer",
        "ManchuBow",
        "Skeggox",
        "Zither"
        ],
        "buildsIntoT3": [
        "AtalantasBow",
        "AvatarsParashu",
        "BanefulRapier",
        "BragisHarp",
        "BrawlersRuin",
        "DaggerOfFrenzy",
        "DeathMetal",
        "Deathbringer",
        "DevourersGauntlet",
        "Dominance",
        "EyeOfTheStorm",
        "Heartseeker",
        "HydrasLament",
        "JotunnsRevenge",
        "LernaeanBow",
        "MeteorHammer",
        "MusashisDualSwords",
        "ObsidianMacuahuitl",
        "PendulumBlade",
        "ProtectionOfItus",
        "QinsBlade",
        "SerpentSpear",
        "SerratedEdge",
        "ShieldSplitter",
        "SunBeamBow",
        "TekkoKagi",
        "TheCrusher",
        "TheExecutioner",
        "TheReaper",
        "Transcendence",
        "TritonsConch",
        "VoidShield"
        ],
        "internalName": "Axe",
        "passive": "",
        "stats": {
        "Strength": 10
        },
        "stepCost": 450,
        "tags": [
        "Strength",
        "Passive",
        "ItemTier.Tier1",
        "StartingLoadout",
        "Tier1",
        "Carry.STR",
        "Mid.STR",
        "Carry.Hybrid"
        ],
        "totalCost": 450
        },
        "Icon": "images/items/axe.webp"
    }
    ```
* Error response: Couldn't find a Item with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Item couldn't be found"
    }
    ```

### Create an Item

- This is a future feature.
  - Admin protected route to allow for easier addition of newer items through the front end.

### Update an Item

- This is a future feature.
  - Admin protected route to allow for easier updating of items (buffs/nerfs happen) through the front end.

### Delete an Item

- This is a future feature.
  - Admin protected route, may be implemented quicker than god deletion as some items usually do get renamed or removed in testing


## IMAGES

### Future feature

- CREATE/UPDATE/DELETE operations for images will eventually be handled by a 3rd party provider
