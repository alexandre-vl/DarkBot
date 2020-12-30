exports.run = (client, message) => {
    const member = message.mentions.users.first();
    var Discord = require("discord.js");
    if (!member) {
        const embed = new Discord.MessageEmbed()
            .setTitle(`Ton avatar`)
            .setImage(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setColor(`RANDOM`);
        return message.channel.send(embed);
    } else {
        const embed = new Discord.MessageEmbed()
            .setTitle(`Avatar de ${member.tag}`)
            .setImage(member.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setColor(`RANDOM`);
        return message.channel.send(embed);
    }
};