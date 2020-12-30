// https://www.textflip.net/
exports.run = (client, message) => {
    const args1 = message.content.split(" ").slice(1).join(" ");
    var Discord = require("discord.js");
    var flip = require('flip-text');
    if(args1 === '' || args1 === ' ' || args1 === '  ' || args1 === '   '){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Vous ne pouvez pas envoyer un message vide.**`);
        return message.channel.send(droit);
    }
    message.channel.send(flip(args1));
    message.delete();
};