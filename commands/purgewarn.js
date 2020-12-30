exports.run = (client, message, droit) => {
    var Discord = require("discord.js");
    const Enmap = require("enmap");
    const wrn = new Enmap({name: "warns"}); 
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription("<a:uncheckmoove:740634696198914070> **Vous n'avez pas la permission de faire cette commande**");
        return message.channel.send(droit);
    }
    var mentionned = message.mentions.users.first() || message.author;
    wrn.set(`${message.guild.id}_${mentionned.id}`, 0, "warns");
    wrn.set(`${message.guild.id}_${mentionned.id}`, [], "reasons");
    const embed = new Discord.MessageEmbed()
        .setDescription("<@" + mentionned.id + "> n'a plus de warn ");
    message.channel.send(embed);
};