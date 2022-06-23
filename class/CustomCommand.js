module.exports = class CustomCommand {
    constructor(data, permissions, run) {
        this.data = data;
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