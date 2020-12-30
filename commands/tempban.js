exports.run = (client, message, droit) => {
    const args2 = message.content.split(" ").slice(2).join(" ");
    var Discord = require("discord.js");
    const ms = require("ms");
    let user = message.mentions.members.first();
    if (!message.member.hasPermission("BAN_MEMBERS")){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription("<a:uncheckmoove:740634696198914070> **Vous n'avez pas la permission de faire cette commande**");
        return message.channel.send(droit);
    }
    if (!user){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser l'utilisateur à bannir temporairement**`);
        return message.channel.send(droit);
    }
    if (user.hasPermission("MANAGE_MESSAGES")){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Vous ne pouvez pas bannir ce membre**`);
        return message.channel.send(droit);
    }
    if(user.id === message.author.id){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Tu ne peux pas te bannir**`);
        return message.channel.send(droit);
    }
    if(user.id === "721046486766452826"){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Je ne peux pas me bannir**`);
        return message.channel.send(droit);
    }
    if (!args2){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Vous n'avez pas précisé le temps de ban**`);
        return message.channel.send(droit);
    }
        message.guild.member(user).ban();
        const embed = new Discord.MessageEmbed()
            .setDescription(`<a:checkmarkmoove:740634693078089730> ${user} a été banni pour ${args2}.`);
        message.channel.send(embed);
    setTimeout(function () {
            message.guild.members.unban(user.id);
            const droit = new Discord.MessageEmbed()
                .setDescription(`<a:checkmarkmoove:740634693078089730> **${user}** a été débanni.`);
            message.channel.send(droit);
    }, ms(args2));
};