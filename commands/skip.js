const { MessageEmbed } = require("discord.js");

exports.run = (client, message) => {
    let embed = new MessageEmbed();
    const { channel } = message.member.voice;
    if (!channel) {
      embed.setColor(client.config.red);
      embed.setAuthor("<a:uncheckmoove:740634696198914070> Vous n'êtes pas dans un channel audio");
      return message.channel.send(embed);
    }
    const serverQueue = client.queue.get(message.guild.id);
    let vote = client.vote.get(message.guild.id);
    if (!serverQueue) {
      embed.setColor(client.config.red);
      embed.setAuthor("Le bot n'est pas en train de jouer une musique");
      return message.channel.send(embed);
    }
    const okie = Math.ceil((channel.members.size - 1) / 2);
    console.log(message.guild.me.voice.channel.members.size);
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        if(vote.voters.includes(message.author.id)) {
          const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> Tu as déjà voté pour cette musique`);
          return message.channel.send(droit); 
        }
        vote.vote++;
        vote.voters.push(message.author.id);
        if(vote.vote >= okie) {
          vote.voters = []; 
          vote.vote = [];
          serverQueue.connection.dispatcher.end();
          embed.setDescription("<a:checkmarkmoove:740634693078089730> | Musique passée");
          embed.setThumbnail(client.user.displayAvatarURL());
          return message.channel.send(embed);
        }       
        const droit = new Discord.MessageEmbed()
          .setColor("#E74C3C")
          .setDescription(`<a:uncheckmoove:740634696198914070> Votes : ${vote.vote}/${okie} requis !`);
        return message.channel.send(droit); 
    } else {
        serverQueue.connection.dispatcher.end();
        embed.setDescription("<a:checkmarkmoove:740634693078089730> | Musique passée");
        embed.setThumbnail(client.user.displayAvatarURL());
        message.channel.send(embed)
    }
};