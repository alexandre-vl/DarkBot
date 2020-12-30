module.exports = (client, emoji) => {
    var Discord = require("discord.js");
    const Enmap = require("enmap");
    const srv = new Enmap({name: "serveur"}); 
    let test = srv.ensure(emoji.guild.id, {
        guild: emoji.guild.id,
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
  } , "statlogs")
    if(test === 'on'){
        let log = emoji.guild.channels.cache.get(srv.get(`${emoji.guild.id}`, "logschannel").id);
        const embed = new Discord.MessageEmbed()
        .setTitle('Suppression d\'un emoji')
        .addField('Emoji :', `\`:${emoji.name}:\``)
        .setTimestamp()
        .setFooter('Logs', 'https://cdn.discordapp.com/attachments/619408928727367686/715128336158031933/image.png');
        log.send(embed);
    }

};