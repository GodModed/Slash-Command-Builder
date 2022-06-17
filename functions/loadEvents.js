const fs = require('fs')

module.exports = async function (client, Collection) {
    console.log('Loading Events...')
    const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
    for (const file of eventFiles) {
        const event = require(`../events/${file}`);
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args));
        } else {
            client.on(event.name, (...args) => event.execute(...args, client));
        }
        console.log(`Loaded event ${event.name}.`);
    }
    console.log("Loaded all events.");
    require('./startBot.js')(client);
}