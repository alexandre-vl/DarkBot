exports.run = (client, message) => {
    const args1 = message.content.split(" ").slice(1).join(" ");
    var Discord = require("discord.js");
    const osu = require('node-osu');
    const { join } = require('path');
    const osuconfig = require("./osuconfig.json");
    const osuAPIkey = osuconfig.osuAPIkey;
    var osuApi = new osu.Api(osuAPIkey, {
        notFoundAsError: false,
        completeScores: false
    });
    if(!args1){
        const droit = new Discord.MessageEmbed()
        .setColor(client.config.red)
        .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser un utilisateur**`);
        return message.channel.send(droit);
    }
    osuApi.getUser({u: args1})
    .then(user => {
        let hour = user.secondsPlayed;
        let embed = new Discord.MessageEmbed()
          .setTitle("Statut OSU! de : "+user.name)
          .setColor(`RANDOM`)
          .setThumbnail('https://cdn.discordapp.com/attachments/731916127776538705/738998329341640744/OsuLogo_2015.png')
          .setTimestamp()
          .addField("Name :",user.name, true)
          .addField("ID :",user.id, true)
          .addField("Country :",user.country, true)
          .addField("Level :",user.level)
          .addField("Accuracy :",user.accuracyFormatted)
          .addField("Plays :",user.counts.plays)
          .addField("Seconds Played :",hour)
          .addField("PP :",user.pp.raw)
          .addField("Rank :","#"+user.pp.rank)
          .addField("Country Rank :","#"+user.pp.countryRank)
          .addField("SS :", user.counts.SS, true)
          .addField("S :",user.counts.S, true)
          .addField("A :",user.counts.A, true)
          .addField("Join Date :",user.raw_joinDate, true);
        message.channel.send(embed);
    })
    .catch(error => {
        const droit = new Discord.MessageEmbed()
            .setColor("#E74C3C")
            .setDescription(`<a:uncheckmoove:740634696198914070> **Cet utilisateur n'existe pas**`);
        return message.channel.send(droit);
    });
};