exports.run = (client, message, droit) => {
    var Discord = require("discord.js");
    const args = message.content.slice(client.config.prefix.length).split(/ +/);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription("<a:uncheckmoove:740634696198914070> **Vous n'avez pas la permission de faire cette commande**");
        return message.channel.send(droit);
    }
    if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Je n'ai pas la permission de faire cela**`);
        return message.channel.send(droit);
    }
    var clearnbr = args[1]++;
    if (clearnbr < 1) {
        const sup0 = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser un nombre supérieur à 0**`);
        return message.channel.send(sup0);
    }
    if (clearnbr > 99) {
        const inf100 = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser un nombre inférieur à 100**`);
        return message.channel.send(inf100);
    }
    //console.log(args[1])
    if (isNaN(args[1]+args[1])){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser un nombre correct**`);
        return message.channel.send(droit);
    } 
    message.channel.messages.fetch({ limit: args[1] }).then(messages => { 
        message.channel.bulkDelete(messages);
    });
};