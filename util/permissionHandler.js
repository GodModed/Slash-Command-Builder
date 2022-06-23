const { PERMISSION_MESSAGE } = require('../config.json')
const { Permissions } = require('discord.js')

const newPermissions = invertObject(Permissions.FLAGS);

module.exports = ((cmd, interaction) => {
    const permissions = cmd.getPermissions();

    let permissionName = [];
    permissions.forEach(permission => {
        permissionName.push(newPermissions[permission]);
    });

    if (permissions && permissions.length > 0) {
        if (!interaction.member.permissions.has(permissions)) return interaction.reply(PERMISSION_MESSAGE.replace("{permission}", String(permissionName)));
    }
    return false;
})

function invertObject(obj) {
    return Object.entries(obj).reduce(function (newObj, pair) {
        newObj[pair[1]] = pair[0];
        return newObj;
    }, {});
}
