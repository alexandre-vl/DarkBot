exports.run = (client, message, droit) => {
    var Discord = require("discord.js");
    const Enmap = require("enmap");
    const utg = new Enmap({name: "userperguild"});
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription("<a:uncheckmoove:740634696198914070> **Vous n'avez pas la permission de faire cette commande**");
        return message.channel.send(droit);
    }
    if (!message.channel.name.startsWith('ticket-')) {
            const notTicket = new Discord.MessageEmbed()
                .setColor(client.config.red)
                .setDescription(`<a:uncheckmoove:740634696198914070> **Vous ne pouvez utiliser cette commande seulement dans un ticket**`);
            return message.channel.send(notTicket);
    } else {
        //let tuser = message.channel.name;
        let tuser = message.channel.topic;
        //tuser = tuser.split('-');
        //tuser = message.guild.members.cache.get(tuser[1]);
        //console.log(`${tuser}`);
        message.channel.delete();
        utg.set(`${message.guild.id}_${tuser}`, false, "ticket");
    }
};