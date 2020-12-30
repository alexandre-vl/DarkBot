exports.run = (client, message, droit) => {
    const args2 = message.content.split(" ").slice(2).join(" ");
    var Discord = require("discord.js");
    if (!message.member.hasPermission("KICK_MEMBERS")) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription("<a:uncheckmoove:740634696198914070> **Vous n'avez pas la permission de faire cette commande**");
        return message.channel.send(droit);
    }
    let memberK = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
    if (!message.guild.member(client.user).hasPermission('KICK_MEMBERS')){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Je n'ai pas la permission de kick des utilisateurs**`);
        return message.channel.send(droit);
    }
    if (!memberK){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez mentionner un membre à kick**`);
        return message.channel.send(droit);
    }
    if(memberK.id === message.author.id){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Tu ne peux pas te kick**`);
        return message.channel.send(droit);
    }
    if(memberK.id === "721046486766452826"){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Je ne peux pas me kick**`);
        return message.channel.send(droit);
    }
    message.guild.member(memberK).kick().catch(error => {
        console.log(error);
    });
    const embed = new Discord.MessageEmbed()
        .setDescription("<a:checkmarkmoove:740634693078089730> `" + memberK.displayName + "` **a bien été kick par** " + message.author.toString());
    message.channel.send(embed);
    const droit2 = new Discord.MessageEmbed()
        .setTitle("`Kick`")
        .setDescription(`Bonjour, vous venez d'être kick du serveur ${message.guild.name} par ${message.author.username}`)
        .addField("Raison :", args2.slice(1))
        .setThumbnail('https://cdn3.iconfinder.com/data/icons/security-and-protection/512/alert_sign_warning_danger_flat_icon-512.png');
    rMember.send(droit2);
    const Enmap = require("enmap");
    const srv = new Enmap({name: "serveur"});
    if(srv.get(`${message.guild.id}`, "modlogschannel") !== "none"){
        let modschannel = message.guild.channels.cache.get(srv.get(`${message.guild.id}`, "modlogschannel").id);
        const modlogs = new Discord.MessageEmbed()
            .setAuthor(memberK.tag, memberK.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setColor("#eb3528")
            .setTitle("`Kick`")
            .setThumbnail('https://cdn3.iconfinder.com/data/icons/security-and-protection/512/alert_sign_warning_danger_flat_icon-512.png')
            .addField("Staff :", message.author.username)
            .addField("Raison :", args2.slice(1))
            .setTimestamp();
        modschannel.send(modlogs);
    }
};