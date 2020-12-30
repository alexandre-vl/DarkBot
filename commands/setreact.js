exports.run = (client, message, args, droit) => {
    var Discord = require("discord.js");
    const Enmap = require("enmap");
    const srv = new Enmap({name: "serveur"}); 
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription("<a:uncheckmoove:740634696198914070> **Vous n'avez pas la permission de faire cette commande**");
        return message.channel.send(droit);
    }
    if(!args[0]){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser on/off.**`);
        return message.channel.send(droit);
    }
    if(args[0] === "on"){
        srv.set(`${message.guild.id}`, "on", "statreact");
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.green)
            .setDescription("<a:checkmarkmoove:740634693078089730> Les reactions sur les messages de salutation sont ON");
        message.channel.send(droit);
    }else if(args[0] === "off"){
        srv.set(`${message.guild.id}`, "off", "statreact");
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.green)
            .setDescription("<a:checkmarkmoove:740634693078089730> Les reactions sur les messages de salutation sont OFF");
        message.channel.send(droit);
    }else {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser on/off.**`);
        return message.channel.send(droit);
    }
};