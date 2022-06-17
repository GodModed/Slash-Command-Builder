console.clear();

const { Client, Collection } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({intents: 131071});

require('./functions/functionHandler.js')(client, Collection);