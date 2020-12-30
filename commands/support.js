exports.run = (client, message) => {
    var Discord = require("discord.js");
    const embed = new Discord.MessageEmbed()
        .setColor('#080808')
        .setTitle('Serveur Support')
        .setURL('https://discord.gg/BHECqVK')
        .setDescription('Lien pour rejoindre le serveur support du bot')
        .setFooter('© Darkbot 2020', 'https://cdn.discordapp.com/attachments/619408928727367686/715128336158031933/image.png');
    message.channel.send(embed);
};