exports.run = (client, message, droit) => {
    const member = message.mentions.members.first();
    const args1 = message.content.split(" ").slice(2).join(" ");
    var Discord = require("discord.js");
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        const embed = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription("<a:uncheckmoove:740634696198914070> **Vous n'avez pas la permission de faire cette commande**");
        return message.channel.send(embed);
    }else if (!member){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Merci de mentionner un membre.**`);
        return message.channel.send(droit);
    }else if(args1 === '' || args1 === ' ' || args1 === '  ' || args1 === '   '){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Vous ne pouvez pas envoyer un message vide.**`);
        return message.channel.send(droit);
    }
    member.send(args1);
    const embed = new Discord.MessageEmbed()
        .setColor(client.config.green)
        .setDescription(`<a:checkmarkmoove:740634693078089730> **${member}** a bien reçu le message.`);
    message.channel.send(embed);
};