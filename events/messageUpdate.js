module.exports = (client, oldMessage, newMessage, message) => {
    var Discord = require("discord.js");
    const Enmap = require("enmap");
    const srv = new Enmap({name: "serveur"});
    if(newMessage.channel.type === 'dm') return;
    let test = srv.ensure(newMessage.guild.id, {
        guild: newMessage.guild.id,
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
        if(newMessage.author.bot) return;
        if (newMessage.channel.type == 'text' && newMessage.cleanContent != oldMessage.cleanContent) {
        let log = newMessage.guild.channels.cache.get(srv.get(`${newMessage.guild.id}`, "logschannel").id);
        const embed = new Discord.MessageEmbed()
            .setTitle('Message Modifié')
            .addField('Message de :', `\`${newMessage.author.tag}\``)
            .addField('Avant :', `\`${oldMessage}\``)
            .addField('Après :', `\`${newMessage}\``)
            .addField("Salon :", `\`${oldMessage.channel.name}\``)
            .setTimestamp()
            .setFooter('Logs', 'https://cdn.discordapp.com/attachments/619408928727367686/715128336158031933/image.png');
            log.send(embed);
        }
    }

};