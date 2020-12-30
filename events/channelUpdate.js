module.exports = (client, oldChannel, newChannel) => {
    var Discord = require("discord.js");
    const Enmap = require("enmap");
    const srv = new Enmap({name: "serveur"}); 
    if(srv.get(`${newChannel.guild.id}`, "statlogs") === 'on'){
        let log = newChannel.guild.channels.cache.get(srv.get(`${newChannel.guild.id}`, "logschannel").id);
        const embed = new Discord.MessageEmbed()
        .setTitle('Mise à jour d\'un salon')
        .addField('Avant :', `\`${oldChannel.name}\``)
        .addField('Après :', `\`${newChannel.name}\``)
        .setTimestamp()
        .setFooter('Logs', 'https://cdn.discordapp.com/attachments/619408928727367686/715128336158031933/image.png');
        log.send(embed);
    }
};