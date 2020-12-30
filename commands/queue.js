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
    if (!serverQueue) {
    embed.setColor(client.config.red);
    embed.setAuthor("Aucune musique est dans la file d'attente");
      return message.channel.send(embed);
    }
    embed.setDescription(
      `${serverQueue.songs
        .map((song, index) => index + 1 + ") " + song.title)
        .join("\n\n")}`,
      { split: true }
    );
    embed.setThumbnail(client.user.displayAvatarURL());
    message.channel.send(embed)
};