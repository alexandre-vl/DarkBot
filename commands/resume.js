const { MessageEmbed } = require("discord.js");

exports.run = (client, message) => {
    let embed = new MessageEmbed();
      const { channel } = message.member.voice;
    if (!channel) {
      embed.setColor(client.config.red);
      embed.setAuthor("Vous n'êtes pas dans un channel audio");
      return message.channel.send(embed);
    }
    const serverQueue = message.client.queue.get(message.guild.id);
 if(serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
    embed.setDescription("<a:checkmarkmoove:740634693078089730> | Joue la musique mise en pause");
   embed.setThumbnail(client.user.displayAvatarURL());
  return message.channel.send(embed);
 }
    embed.setDescription("Aucune musique n'a été mise en pause.");
    message.channel.send(embed)
};