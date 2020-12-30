exports.run = (client, message) => {
  var Discord = require("discord.js");
  var ping = Date.now() - message.createdTimestamp + " ms";
    const embed = new Discord.MessageEmbed()
      .setColor('#080808')
      .setTitle(":ping_pong: Pong !")
      .setDescription("Mon ping est de : "+ping+"\nPing API : "+client.ws.ping+" ms")
      .setFooter('© Darkbot 2020', 'https://cdn.discordapp.com/attachments/619408928727367686/715128336158031933/image.png');
    message.channel.send(embed); 
};