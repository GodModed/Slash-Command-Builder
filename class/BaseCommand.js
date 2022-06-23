const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = class BaseCommand {
    constructor(name, description, permissions, run) {
        this.data = new SlashCommandBuilder().setName(name).setDescription(description);
        this.run = run;
        this.permissions = permissions;
    }

    getData() {
        return this.data;
    }

    runCallback(interaction, client) {
        this.run(interaction, client);
    }

    getPermissions() {
        return this.permissions;
    }
}