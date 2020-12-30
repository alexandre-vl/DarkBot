const Discord = require('discord.js');
const { YOUTUBE_API_KEY, QUEUE_LIMIT, COLOR } = require("../config.json");
const ytdl = require("ytdl-core");
const YoutubeAPI = require("simple-youtube-api");
const youtube = new YoutubeAPI(YOUTUBE_API_KEY);
const { play } = require("../system/music.js");
exports.run = async(client, message, args) => {
    let embed = new Discord.MessageEmbed()
    //FIRST OF ALL WE WILL ADD ERROR MESSAGE AND PERMISSION MESSSAGE
    if (!args.length) {
      //IF AUTHOR DIDENT GIVE URL OR NAME
      embed.setColor(client.config.red);
      embed.setAuthor("Mauvaise utilisation : Utilisez `play <URL> ou nom`");
      return message.channel.send(embed);
    }
    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setColor(client.config.red);
      embed.setAuthor("Vous n'êtes pas dans un channel audio");
      return message.channel.send(embed);
    }
    //WE WILL ADD PERMS ERROR LATER :(
    const targetsong = args.join(" ");
    const videoPattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
    const playlistPattern = /^.*(youtu.be\/|list=)([^#\&\?]*).*/gi;
    const urlcheck = videoPattern.test(args[0]);
    if (!videoPattern.test(args[0]) && playlistPattern.test(args[0])) {
      embed.setAuthor("<a:checkmarkmoove:740634693078089730> Je suis prêt à jouer une musique");
      return message.channel.send(embed);
    }
    const serverQueue = message.client.queue.get(message.guild.id);
    const queueConstruct = {
      textChannel: message.channel,
      channel,
      connection: null,
      songs: [],
      loop: false,
      volume: 100,
      playing: true
    };
    const voteConstruct = {
      vote: 0,
      voters: []
    };
    let songData = null;
    let song = null;
    if (urlcheck) {
      try {
        songData = await ytdl.getInfo(args[0]);
        song = {
             title: songData.videoDetails.title,
          url: songData.videoDetails.video_url,
          duration: songData.videoDetails.lengthSeconds,
          thumbnail: songData.videoDetails.thumbnails[3].url
        };
      } catch (error) {
        if (message.include === "copyright") {
          return message
            .reply("Cette vidéo contient un copyright")
            .catch(console.error);
        } else {
          console.error(error);
        }
      }
    } else {
      try {
        const result = await youtube.searchVideos(targetsong, 1);
        songData = await ytdl.getInfo(result[0].url);
        song = {
          title: songData.videoDetails.title,
          url: songData.videoDetails.video_url,
          duration: songData.videoDetails.lengthSeconds,
          thumbnail: songData.videoDetails.thumbnail.thumbnails[3].url,
        };
      } catch (error) {
        console.log(error);
        const droit = new Discord.MessageEmbed()
          .setColor(client.config.red)
          .setDescription(`<a:uncheckmoove:740634696198914070> **Cette musique n'existe pas.**`);
        return message.channel.send(droit);
      }
    }
    if (serverQueue) {
        if(serverQueue.songs.length > Math.floor(QUEUE_LIMIT - 1) && QUEUE_LIMIT !== 0) {
      return message.channel.send(`Vous ne pouvez pas ajouter plus de ${QUEUE_LIMIT} dans le file d'attente`);
    }
      serverQueue.songs.push(song);
      embed.setAuthor("Ajout d'une nouvelle musique à la file d'attente", client.user.displayAvatarURL());
      embed.setDescription(`**${song.title}**`, song.url,`\nDemandé par : ${message.author}`);
      embed.setThumbnail(song.thumbnail)
      //embed.setFooter("URL", song.url);
      return serverQueue.textChannel
        .send(embed)
        .catch(console.error);
    } else {
      queueConstruct.songs.push(song);
    }
    if (!serverQueue)
      message.client.queue.set(message.guild.id, queueConstruct);
       message.client.vote.set(message.guild.id, voteConstruct);
    if (!serverQueue) {
      try {
        queueConstruct.connection = await channel.join();
        play(queueConstruct.songs[0], message);
      } catch (error) {
        console.error(`Je ne peux pas rejoindre ce salon audio: ${error}`);
        message.client.queue.delete(message.guild.id);
        await channel.leave();
        return message.channel
          .send({
            embed: {
              description: `Je ne peux pas rejoindre ce salon audio: ${error}`,
              color: client.config.red
            }
          })
          .catch(console.error);
      }
    }
}