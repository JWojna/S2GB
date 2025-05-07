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

## RESTful api

- The Gods table

  - Uses hardcoded godId's to create associations.
  - Stores higher level identifiers
  - Stats are stored in jsonb
  - Abilities are stored in jsob in their entirety including passives, basic attack info, and aspects if included

- The Image table is polymorphic.

  - Housing both item and god + their abilites image pathways. The images are served staticly with the front end build.
  - All ability icons will be pulled with god images

- The items table
  - Simply store higher level identifiers such as name and tier for querry purposes and the overall data in a jsonb format.

## Routes

### These routes will be used to querry data for the user to interact with

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
        ...
      ]
    }
    ```
