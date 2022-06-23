const fs = require('node:fs');

module.exports = function(client, Collection) {
    const mode = process.argv[2] ? process.argv[2] : 'prod';
    console.log(`Starting innstance in ${mode} mode.`);
    console.log('Loading functions...');
    fs.readdirSync(process.cwd() + '/functions').filter(file => file.endsWith('.js')).forEach(file => {
        if (file === 'functionHandler.js') return;
        const handler = require(`./${file}`);
        handler(client, Collection);
    });
}