const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('../config.json');
const fs = require('node:fs')

module.exports = function (client, Collection) {
    console.log('Loading Commands...');

    let commands = [];

    fs.readdirSync(process.cwd() + '/commands').filter(file => file.endsWith('.js')).forEach(file => {
        const cmd = require(`../commands/${file}`);
        commands.push(cmd.getData().toJSON());
        console.log(`Loaded command ${cmd.getData().name}.`);
    });

    const rest = new REST({ version: '9' }).setToken(token);

    switch (process.argv[2]) {
        case 'dev':
            rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
                .then(() => {
                    console.log('Loaded all commands.')
                    require('./startBot.js')(client);
                })
                .catch(console.error);
            break;
        case 'prod':
        default:
            rest.put(
                Routes.applicationCommands(clientId),
                { body: commands },
            )                .then(() => {
                console.log('Loaded all commands.')
                require('./startBot.js')(client);
            })
            .catch(console.error);
            break;
    }
}