module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`Bot is ready!`)
        client.user.setActivity("Slash Commands", { type: "STREAMING", url: "https://www.twitch.tv/discord" });


        // iterate through all guilds
        // client.guilds.cache.forEach(guild => {
        //   // get the first channel in the guild which is a text channel
        //   const channel = guild.channels.cache.find(channel => channel.type === "GUILD_TEXT");
        //   console.log(channel)
        //   // generate an invite for the channel
        //   channel.createInvite().then(invite => console.log(`Created an invite with a code of ${invite.code}`))
        // });  
    },
};