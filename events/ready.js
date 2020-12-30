module.exports = (client) => {
  console.log(`Bot pret`);
  client.user.setActivity(client.guilds.cache.size+' serveurs | /help ', { type: 'WATCHING' });
};