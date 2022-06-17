module.exports = class CustomCommand {
    constructor(data, run) {
        this.data = data;
        this.run = run;
    }

    getData() {
        return this.data;
    }

    runCallback(interaction, client) {
        this.run(interaction, client);
    }
}