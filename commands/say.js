exports.run = (client, message, droit) => {
    const args1 = message.content.split(" ").slice(1).join(" ");
    var Discord = require("discord.js");
    let oh = message.content.slice(client.config.prefix.length).split(/ +/);
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const embed = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription("<a:uncheckmoove:740634696198914070> **Vous n'avez pas la permission de faire cette commande**");
        return message.channel.send(embed);
    }
    if (!args1) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser un message**`);
        return message.channel.send(droit);
    }
    if(oh[1].startsWith(client.config.prefix)){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Vous ne pouvez pas faire de commandes avec le /say**`);
        return message.channel.send(droit);
    }
    message.delete();
    message.channel.send(args1);
};