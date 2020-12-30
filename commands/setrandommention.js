exports.run = (client, message) => {
    var Discord = require("discord.js");
    const Enmap = require("enmap");
    const srv = new Enmap({name: "serveur"}); 
    const config = require('../config.json');
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const droit = new Discord.MessageEmbed()
            .setColor("#E74C3C")
            .setDescription(`<a:uncheckmoove:740634696198914070> **Vous n'avez pas les droits pour utiliser cette commande !**`);
        return message.channel.send(droit);
    }
    let args = message.content.slice(config.prefix.length).split(/ +/);
    if(!args[1]){
        const droit = new Discord.MessageEmbed()
            .setColor("#E74C3C")
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser on/off.**`);
        return message.channel.send(droit);
    }
    if(args[1] === "on"){
        srv.set(`${message.guild.id}`, "on", "randommention");
        const droit = new Discord.MessageEmbed()
            .setDescription("<a:checkmarkmoove:740634693078089730> Le @random est désormais actif");
        message.channel.send(droit);
    }else if(args[1] === "off"){
        srv.set(`${message.guild.id}`, "off", "randommention");
        const droit = new Discord.MessageEmbed()
            .setDescription("<a:checkmarkmoove:740634693078089730> Le @random est désormais inactif");
        message.channel.send(droit);
    }else {
        const droit = new Discord.MessageEmbed()
            .setColor("#E74C3C")
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser on/off.**`);
        return message.channel.send(droit);
    }
};