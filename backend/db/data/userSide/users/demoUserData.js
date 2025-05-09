const bcrypt = require("bcryptjs");

const seedUsers = [
    {
        username: 'SmiteEnjoyer',
        email: 'user@aa.io',
        hashedPassword: bcrypt.hashSync('password'),
        smite2IGN: 'Wrecktify',
        bio: null,
    },
    {
        username: 'Manny',
        email: 'user1@aa.io',
        hashedPassword: bcrypt.hashSync('password'),
        smite2IGN: '700C001',
        bio: null,
    },
    {
        username: 'DietyDestoyer',
        email: 'user2@aa.io',
        hashedPassword: bcrypt.hashSync('password'),
        smite2IGN: null,
        bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed tortor eros, convallis vitae quam eu, maximus facilisis ex.`,
    },
    {
        username: 'MinionMaster',
        email: 'user3@aa.io',
        hashedPassword: bcrypt.hashSync('password'),
        smite2IGN: null,
        bio: `ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor eros,
        convallis vitae quam eu, risus.`,
    },
]

module.exports = seedUsers;
