module.exports = (client, oldEmoji, newEmoji) => {
    var Discord = require("discord.js");
    const Enmap = require("enmap");
    const srv = new Enmap({name: "serveur"}); 
    let test = srv.ensure(newEmoji.guild.id, {
        guild: newEmoji.guild.id,
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
        let log = newEmoji.guild.channels.cache.get(srv.get(`${newEmoji.guild.id}`, "logschannel").id);
        const embed = new Discord.MessageEmbed()
        .setTitle('Mise à jour d\'un emoji')
        .addField('Avant :', `\`${oldEmoji.name}\``)
        .addField('Après :', `\`${newEmoji.name}\``)
        .setTimestamp()
        .setFooter('Logs', 'https://cdn.discordapp.com/attachments/619408928727367686/715128336158031933/image.png');
        log.send(embed);
    }

};