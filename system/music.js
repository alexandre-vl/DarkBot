//I WILL BE BACK AFTER 5 min
const ytdlDiscord = require("ytdl-core-discord");
const { MessageEmbed } = require("discord.js");
const { QUEUE_LIMIT, COLOR } = require("../config.json");

module.exports = {
  async play(song, message) {
    const queue = message.client.queue.get(message.guild.id);
    let embed = new MessageEmbed();
    if (!song) {
      queue.channel.leave();
      message.client.queue.delete(message.guild.id);
      embed.setAuthor("Musique finie");
      return queue.textChannel
        .send(embed)
        .catch(console.error);
    }
    try {
      var stream = await ytdlDiscord(song.url, {
        highWaterMark: 1 << 25
      });
    } catch (error) {
      if (queue) {
        queue.songs.shift();
        module.exports.play(queue.songs[0], message);
      }

      if (error.message.includes === "copyright") {
        return message.channel.send("Cette vidéo contient un copyright");
      } else {
        console.error(error);
      }
    }
    const dispatcher = queue.connection
      .play(stream, { type: "opus" })
      .on("finish", () => {
        if (queue.loop) {
          let lastsong = queue.songs.shift();
          queue.songs.push(lastsong);
          module.exports.play(queue.songs[0], message);
        } else {
          queue.songs.shift();
          module.exports.play(queue.songs[0], message);
        }
      })
      .on("error", console.error);
    dispatcher.setVolumeLogarithmic(queue.volume / 100); //VOLUME
    embed.setAuthor("Commence à jouer :", message.client.user.displayAvatarURL())
    .setDescription(`**${song.title}**`)
    embed.setThumbnail(song.thumbnail)
    //embed.setFooter("URL", song.url)
    return queue.textChannel
        .send(embed)
        .catch(console.error);
    
  }
};