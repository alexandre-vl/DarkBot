exports.run = (client, message) => {
    const config = require('../config.json');
    var Discord = require("discord.js");
    const moment = require('moment');
    let user = message.mentions.users.first() || message.author;//|| message.guild.members.cache.get(args[1])
    const embed = new Discord.MessageEmbed()
        .setTitle("Information de " + user.tag, 'https://cdn.discordapp.com/attachments/619408928727367686/715128336158031933/image.png')
        .setFooter('Userinfos', 'https://cdn.discordapp.com/attachments/619408928727367686/715128336158031933/image.png')
        .setThumbnail(user.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .setColor(message.guild.member(user).displayHexColor === '#000000' ? '#ffffff' : message.guild.member(user).displayHexColor)
        .addField(`ID :`, user.id, true)
        .addField(`Tag:`, user.tag, true)
        .addField(`Username:`, user.username, true)
        .addField("Game:", `${message.guild.member(user).presence.game ? message.guild.member(user).presence.game.name : 'Aucun'}`, true)
        .addField("Created", moment(user.createdAt).format('DD/MM/YYYY HH:mm'), false)
        .addField("Date join", moment(user.joinedAt).format('DD/MM/YYYY HH:mm'), false)
        .addField("Roles", `<@&${message.guild.member(user)._roles.join('> | <@&')}>`, true)
        .setTimestamp();
    message.channel.send(embed);
};