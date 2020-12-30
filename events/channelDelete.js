module.exports = (client, channel) => {
    var Discord = require("discord.js");
    const Enmap = require("enmap");
    const srv = new Enmap({name: "serveur"}); 
    
    if(channel.id === srv.get(`${channel.guild.id}`, "membercountchannel")){
        srv.set(`${channel.guild.id}`, "none", "membercountchannel");
    }
    
    if(srv.get(`${channel.guild.id}`, "statlogs") === 'on'){
        let log = channel.guild.channels.cache.get(srv.get(`${channel.guild.id}`, "logschannel").id);
        const embed = new Discord.MessageEmbed()
        .setTitle('Suppression d\'un salon')
        .setAuthor('Logs')
        .addField('Salon :', `\`${channel.name}\``)
        .addField('ID :', `\`${channel.id}\``)
        .setTimestamp()
        .setFooter('Logs', 'https://cdn.discordapp.com/attachments/619408928727367686/715128336158031933/image.png');
        log.send(embed);
    }
};