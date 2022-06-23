const permissionHandler = require('../util/permissionHandler.js');

module.exports = {
    name: 'interactionCreate',
    once: false,
    async execute(interaction, client) {
        if (!interaction.isCommand()) return;
        const cmd = require('../commands/' + interaction.commandName);

        if (permissionHandler(cmd, interaction)) return;

        cmd.runCallback(interaction, client);
    },
};