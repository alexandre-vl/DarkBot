exports.run = (client, message, droit) => {
    const Enmap = require("enmap"); 
    const exp = new Enmap({name: "points"}); 
    var Discord = require("discord.js");
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription("<a:uncheckmoove:740634696198914070> **Vous n'avez pas la permission de faire cette commande**");
        return message.channel.send(droit);
    }
    const filtered = exp.filter( p => p.guild === message.guild.id ); 
    const rightNow = new Date(); 
    const toRemove = filtered.filter(data => {
    //1
    return !message.guild.members.cache.has(data.user) || rightNow - 2592000000  > data.lastSeen;
    });
    //2
    toRemove.forEach(data => {
    exp.delete(`${message.guild.id}-${data.user}`);
    });
    if(toRemove.size < '2'){
        return message.channel.send(`${toRemove.size} user a été supprimer `);
    }else {
        return message.channel.send(`${toRemove.size} users ont été supprimer `);
    }
};