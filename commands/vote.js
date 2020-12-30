exports.run = (client, message) => {
    var Discord = require("discord.js");
    const embed = new Discord.MessageEmbed()
        .setColor('#080808')
        .setTitle('Clique ici')
        .setURL('https://top.gg/bot/721046486766452826')
        .setDescription('Lien pour voter pour notre bot')
        .setFooter('© Darkbot 2020', 'https://cdn.discordapp.com/attachments/619408928727367686/715128336158031933/image.png');
    message.channel.send(embed);
};