const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = class BaseCommand {
    constructor(name, description, run) {
        this.data = new SlashCommandBuilder().setName(name).setDescription(description);
        this.run = run;
    }

    getData() {
        return this.data;
    }

    runCallback(interaction, client) {
        this.run(interaction, client);
    }
}