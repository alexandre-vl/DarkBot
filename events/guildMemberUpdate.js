module.exports = (client, oldMember, newMember, message) => {
    var Discord = require("discord.js");
    const Enmap = require("enmap");
    const srv = new Enmap({name: "serveur"}); 
    let test = srv.ensure(newMember.guild.id, {
        guild: newMember.guild.id,
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
    if(test === "on"){
        let log = newMember.guild.channels.cache.get(srv.get(`${newMember.guild.id}`, "logschannel").id);
        const embed = new Discord.MessageEmbed()
                .setTitle('Mise à jour d\'un membre')
                .addField('Avant :', `\`${oldMember.displayName}\``)
                .addField('Après :', `\`${newMember.displayName}\``)
                .addField('Membre :', `\`${newMember.user.tag}\``)
                .setTimestamp()
                .setFooter('Logs', 'https://cdn.discordapp.com/attachments/619408928727367686/715128336158031933/image.png');
            return log.send(embed);
    }

};