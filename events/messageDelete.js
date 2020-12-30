module.exports = (client, message) => {
    var Discord = require("discord.js");
    const Enmap = require("enmap");
    const srv = new Enmap({name: "serveur"}); 
    let test = srv.ensure(message.guild.id, {
        guild: message.guild.id,
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
  } , "statlogs");
    if(test === 'on'){
        if(message.author.bot) return;
        let log = message.guild.channels.cache.get(srv.get(`${message.guild.id}`, "logschannel").id);
        const embed = new Discord.MessageEmbed()
            .setTitle('Message Supprimé')
            .addField('Message de :', `\`${message.author.tag}\``)
            .addField('Message :', `\`${message}\``)
            .addField("Salon :", `\`${message.channel.name}\``)
            .setTimestamp()
            .setFooter('Logs', 'https://cdn.discordapp.com/attachments/619408928727367686/715128336158031933/image.png');
            log.send(embed);
    }

};