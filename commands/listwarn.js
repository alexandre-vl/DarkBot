exports.run = (client, message) => {
    var Discord = require("discord.js");
    const Enmap = require("enmap");
    const wrn = new Enmap({name: "warns"}); 
    var mentionned = message.mentions.users.first() || message.author;
    let warns = wrn.get(`${message.guild.id}_${mentionned.id}`, "warns");
    var thewarnlist = wrn.get(`${message.guild.id}_${mentionned.id}`, "reasons");
    thewarnlist = thewarnlist.join(" \n");
    const droit = new Discord.MessageEmbed()
        .setAuthor(mentionned.tag, mentionned.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .addField("Warns :", "``" + warns + "``")
        //.setDescription("<@" + mentionned.id + ">" + " possède " + warns + " warn(s)");
        .setDescription(thewarnlist);
    message.channel.send(droit);
};