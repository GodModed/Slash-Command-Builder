module.exports = {
    name: 'interactionCreate',
    once: false,
    async execute(interaction, client) {
        if (!interaction.isCommand()) return;
        const cmd = require('../commands/' + interaction.commandName);
        cmd.runCallback(interaction, client);
    },
};