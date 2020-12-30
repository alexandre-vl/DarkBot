module.exports = (client, channel) => {
    var Discord = require("discord.js");
    const Enmap = require("enmap");
    const srv = new Enmap({name: "serveur"});
    if(channel.type === 'dm') return;
    /*let test = srv.ensure(channel.guild.id, {
        guild: channel.guild.id,
        rolemute: "none",
        catticket: "none",
        statimgwelc: "off",
        imgwelcchannel: "none",
        statimgleave : "off",
        imgleavechannel : "none",
        statwelc : "off",
        welcchannel : "none",
        statleave : "off",
        leavechannel : "none",
        autorole : "none",
        statautorole : "off",
        suggchannel: "none",
        statbadword: "off",
        statspam: "off",
        statreact: "off",
        logschannel: "none",
        statlogs: "off",
  } , "statlogs")*/
    if(srv.get(`${channel.guild.id}`, "statlogs") === 'on'){
        let log = channel.guild.channels.cache.get(srv.get(`${channel.guild.id}`, "logschannel").id);
        const embed = new Discord.MessageEmbed()
        .setTitle('Création d\'un salon')
        .addField('Salon :', `\`${channel.name}\``)
        .addField('ID :', `\`${channel.id}\``)
        .setTimestamp()
        .setFooter('Logs', 'https://cdn.discordapp.com/attachments/619408928727367686/715128336158031933/image.png');
        log.send(embed);
    }
};