const bcrypt = require("bcryptjs");

const seedUsers = [
    {
        username: 'SmiteEnjoyer',
        email: 'user@aa.io',
        hashedPassword: bcrypt.hashSync('password'),
        smite2IGN: 'Wrecktify',
        profilePic: null,
        bio: null,
        lastLogin: new Date()
    },
    {
        username: 'Manny',
        email: 'user1@aa.io',
        hashedPassword: bcrypt.hashSync('password'),
        smite2IGN: '700C001',
        profilePic: null,
        bio: null,
        lastLogin: new Date()
    },
    {
        username: 'DietyDestoyer',
        email: 'user2@aa.io',
        hashedPassword: bcrypt.hashSync('password'),
        smite2IGN: null,
        profilePic: null,
        bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed tortor eros, convallis vitae quam eu, maximus facilisis ex.`,
        lastLogin: new Date()
    },
    {
        username: 'MinionMaster',
        email: 'user3@aa.io',
        hashedPassword: bcrypt.hashSync('password'),
        smite2IGN: null,
        profilePic: null,
        bio: `ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor eros,
        convallis vitae quam eu, risus.`,
        lastLogin: new Date()
    },
]

module.exports = seedUsers;
