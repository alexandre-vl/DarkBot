module.exports = (client, oldRole, newRole) => {
    var Discord = require("discord.js");
    const Enmap = require("enmap");
    const srv = new Enmap({name: "serveur"}); 
    let test = srv.ensure(newRole.guild.id, {
        guild: newRole.guild.id,
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
        let log = newRole.guild.channels.cache.get(srv.get(`${newRole.guild.id}`, "logschannel").id);
        if(oldRole.name === newRole.name){
            const embed = new Discord.MessageEmbed()
            .setTitle('Mise à jour d\'un role')
            .addField('Role :', `\`${oldRole.name}\``)
            .setTimestamp()
            .setFooter('Logs', 'https://cdn.discordapp.com/attachments/619408928727367686/715128336158031933/image.png');
            return log.send(embed);
        }else {
            const embed = new Discord.MessageEmbed()
            .setTitle('Mise à jour d\'un role')
            .addField('Avant :', `\`${oldRole.name}\``)
            .addField('Après :', `\`${newRole.name}\``)
            .setTimestamp()
            .setFooter('Logs', 'https://cdn.discordapp.com/attachments/619408928727367686/715128336158031933/image.png');
            return log.send(embed);
        }
    }

};