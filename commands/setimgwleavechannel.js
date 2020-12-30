exports.run = (client, message, droit) => {
    const channel = message.mentions.channels.first();
    var Discord = require("discord.js");
    const Enmap = require("enmap");
    const srv = new Enmap({name: "serveur"}); 
    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription("<a:uncheckmoove:740634696198914070> **Vous n'avez pas la permission de faire cette commande**");
        return message.channel.send(droit);
    }
    if(!channel){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser un channel (mention)**`);
        return message.channel.send(droit);
    }
    srv.set(`${message.guild.id}`, channel, "imgleavechannel");
    srv.set(`${message.guild.id}`, "on", "statimgleave");
    const embed = new Discord.MessageEmbed()
        .setColor(client.config.green)
        .setDescription('<a:checkmarkmoove:740634693078089730> Le channel a été défini : ' + channel);
    message.channel.send(embed);
};