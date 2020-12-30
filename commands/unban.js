exports.run = (client, message, args, droit) => {
    var Discord = require("discord.js");
    if (!message.member.hasPermission("BAN_MEMBERS")){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription("<a:uncheckmoove:740634696198914070> **Vous n'avez pas la permission de faire cette commande**");
        return message.channel.send(droit);
    }
    if(!args[0]){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser une ID valide**`);
        return message.channel.send(droit);
    }
    if(args[0] === message.author.id){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Tu ne peux pas te débannir**`);
        return message.channel.send(droit);
    }
    message.guild.members.unban(args[0]);
    const embed = new Discord.MessageEmbed()
        .setDescription(`<a:checkmarkmoove:740634693078089730> <@!${args[0]}> a été débanni`);
    message.channel.send(embed);
};