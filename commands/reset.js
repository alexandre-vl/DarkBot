exports.run = (client, message, droit) => {
    var Discord = require("discord.js");
    const Enmap = require("enmap");
    const srv = new Enmap({name: "serveur"}); 
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription("<a:uncheckmoove:740634696198914070> **Vous n'avez pas la permission de faire cette commande**");
        return message.channel.send(droit);
    }
    srv.set(`${message.guild.id}`, rolemute, "none");
    srv.set(`${message.guild.id}`, catticket, "none");
    srv.set(`${message.guild.id}`, statimgwelc, "off");
    srv.set(`${message.guild.id}`, imgwelcchannel, "none");
    srv.set(`${message.guild.id}`, statimgleave, "off");
    srv.set(`${message.guild.id}`, imgleavechannel, "none");
    srv.set(`${message.guild.id}`, statwelc, "off");
    srv.set(`${message.guild.id}`, welcchannel, "none");
    srv.set(`${message.guild.id}`, statleave, "off");
    srv.set(`${message.guild.id}`, leavechannel, "none");
    srv.set(`${message.guild.id}`, autorole, "none");
    srv.set(`${message.guild.id}`, statautorole, "off");
    srv.set(`${message.guild.id}`, suggchannel, "none");
    srv.set(`${message.guild.id}`, statbadword, "off");
    srv.set(`${message.guild.id}`, statspam, "off");
    srv.set(`${message.guild.id}`, statreact, "off");
    srv.set(`${message.guild.id}`, logschannel, "none");
    srv.set(`${message.guild.id}`, statlogs, "off");
    srv.set(`${message.guild.id}`, antipub, "on");
    srv.set(`${message.guild.id}`, adchannel, "none");
    srv.set(`${message.guild.id}`, reportchannel, "none");
    srv.set(`${message.guild.id}`, modlogschannel, "none");
    srv.set(`${message.guild.id}`, ticketmessage, "none");
    const reset = new Discord.MessageEmbed()
        .setColor(client.config.green)
        .setDescription(`<a:checkmarkmoove:740634693078089730> **La configuration du serveur a été reset**`);
    return message.channel.send(reset);
};