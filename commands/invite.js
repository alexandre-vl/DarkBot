exports.run = (client, message) => {
    var Discord = require("discord.js");
    const embed = new Discord.MessageEmbed()
        .setColor('#080808')
        .setTitle('Clique ici')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=721046486766452826&permissions=8&scope=bot')
        .setDescription('Lien pour inviter le bot')
        .setFooter('© Darkbot 2020', 'https://cdn.discordapp.com/attachments/619408928727367686/715128336158031933/image.png');
    message.channel.send(embed);
};