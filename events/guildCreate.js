module.exports = (client, message, guild) => {
    client.user.setActivity(client.guilds.cache.size+' serveurs | /help ', { type: 'WATCHING' });
};