var times = 0;
const config = require('../config.json');

module.exports = function(client) {
    times++;
    if (times == 3) {
        console.log('Starting Bot...');
        client.login(config.token);
    }
}