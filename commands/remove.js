const { MessageEmbed } = require("discord.js");

exports.run = (client, message) => {
    let embed = new MessageEmbed();
    const { channel } = message.member.voice;
    if (!channel) {
      embed.setColor(client.config.red);
      embed.setAuthor("Vous n'êtes pas dans un channel audio");
      return message.channe.send(embed);
    }
    const serverQueue = client.queue.get(message.guild.id);
    if (!serverQueue) {
      embed.setAuthor("The Queue is empty");
      return message.channel.send(embed);
    }
     if(isNaN(args[0])) {
      embed.setColor(client.config.red);
      embed.setAuthor("Please Use Numerical Values Only");
      return message.channel.send(embed);
    }
    if(args[0] > serverQueue.songs.length) {
      embed.setColor(client.config.red);
      embed.setAuthor("Unable to find this song");
      return message.channel.send(embed);
    }
    serverQueue.songs.splice(args[0] - 1, 1);
    embed.setDescription("DROPED THE SONG FROM QUEUE");
    embed.setThumbnail(client.user.displayAvatarURL());
    return message.channel.send(embed);
};