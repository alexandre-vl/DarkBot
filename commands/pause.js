const { MessageEmbed } = require("discord.js");

exports.run = (client, message) => {
  const { channel } = message.member.voice;
   let embed = new MessageEmbed();
    if (!channel) {
      embed.setColor(client.config.red);
      embed.setAuthor("Vous n'êtes pas dans un channel audio");
      return message.channel.send(embed);
    }
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) {
      embed.setColor(client.config.red);
      embed.setAuthor("Le bot n'est pas en train de jouer une musique");
      return message.channel.send(embed);
    }
    if(serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause(true);
      embed.setDescription("<a:checkmarkmoove:740634693078089730> | La musique à été mise en pause");
      embed.setThumbnail(client.user.displayAvatarURL());
      return message.channel.send(embed)
  }
};