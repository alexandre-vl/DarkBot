exports.run = (client, message, droit) => {
    var Discord = require("discord.js");
    const member = message.guild.member(message.mentions.users.first());
    if (!message.member.hasPermission("BAN_MEMBERS")) {
        let droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription("<a:uncheckmoove:740634696198914070> **Vous n'avez pas la permission de faire cette commande**");
        return message.channel.send(droit);
    }

    if (!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Je n'ai pas la permission de bannir des utilisateurs**`);
        return message.channel.send(droit);
    }
    if(!member) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez mentionner un membre à bannir**`);
        return message.channel.send(droit);
    }
    if(member.id === message.author.id){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Tu ne peux pas te bannir**`);
        return message.channel.send(droit);
    }
    if(member.id === "721046486766452826"){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Je ne peux pas me bannir**`);
        return message.channel.send(droit);
    }
        message.guild.member(member).ban().catch(error => {
            console.log(error);
            });
        const embed = new Discord.MessageEmbed()
            .setDescription("<a:checkmarkmoove:740634693078089730> `" + member.displayName + "` **a bien été banni par** " + message.author.toString());
        message.channel.send(embed);
};