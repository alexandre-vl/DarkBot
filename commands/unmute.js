exports.run = (client, message, droit) => {
    const member = message.mentions.members.first();
    var Discord = require("discord.js");
    const Enmap = require("enmap");
    const srv = new Enmap({name: "serveur"});
    const utg = new Enmap({name: "userperguild"});
    if (!message.member.hasPermission(["MANAGE_MESSAGES"])){
        const embed = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription("<a:uncheckmoove:740634696198914070> **Vous n'avez pas la permission de faire cette commande**");
        return message.channel.send(embed);
    }
    let role = srv.get(`${message.guild.id}`, "rolemute");
    if(role === "none"){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez définir le rôle de mute : /setrolemute <role mention>**`);
        return message.channel.send(droit);
    }
    member.roles.remove(role.id);
    utg.set(`${message.guild.id}_${member.id}`, false, "mute");
    const embed = new Discord.MessageEmbed()
        .setDescription(`<a:checkmarkmoove:740634693078089730> **${member}** a bien été unmute.`);
    message.channel.send(embed);
};