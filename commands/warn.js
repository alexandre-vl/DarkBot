exports.run = (client, message, droit) => {
    const args2 = message.content.split(" ").slice(2).join(" ");
    const Enmap = require("enmap");
    const wrn = new Enmap({name: "warns"}); 
    var Discord = require("discord.js");
    const mentionned = message.mentions.users.first();
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription("<a:uncheckmoove:740634696198914070> **Vous n'avez pas la permission de faire cette commande**");
        return message.channel.send(droit);
    }
    if (!mentionned) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser l'utilisateur à avertir**`);
        return message.channel.send(droit);
    }
    if (!args2) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser la raison**`);
        return message.channel.send(droit);
    }
    let curlwarns = wrn.get(`${message.guild.id}_${mentionned.id}`, "warns");
    wrn.set(`${message.guild.id}_${mentionned.id}`, curlwarns+1 , "warns");
    var thewarnlist = wrn.get(`${message.guild.id}_${mentionned.id}`, "reasons");
    let reason = args2.slice(1);
    thewarnlist.push(reason);
    wrn.set(`${message.guild.id}_${mentionned.id}`, thewarnlist, "reasons");
    const embed = new Discord.MessageEmbed()
        .setDescription("<@" + mentionned.id + ">" + " a maintenant " + wrn.get(`${message.guild.id}_${mentionned.id}`, "warns") + " warn(s)");
    message.channel.send(embed);
    const droit2 = new Discord.MessageEmbed()
        .setTitle("`Warn`")
        .setDescription(`Bonjour, vous venez d'être averti dans le serveur ${message.guild.name} par ${message.author.username}`)
        .addField("Raison :", reason)
        .setThumbnail('https://cdn3.iconfinder.com/data/icons/security-and-protection/512/alert_sign_warning_danger_flat_icon-512.png');
    mentionned.send(droit2);
    const srv = new Enmap({name: "serveur"});
    if(srv.get(`${message.guild.id}`, "modlogschannel") !== "none"){
        let modschannel = message.guild.channels.cache.get(srv.get(`${message.guild.id}`, "modlogschannel").id);
        const modlogs = new Discord.MessageEmbed()
            .setAuthor(mentionned.tag, mentionned.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setColor("#eb3528")
            .setTitle("`Warn`")
            .setThumbnail('https://cdn3.iconfinder.com/data/icons/security-and-protection/512/alert_sign_warning_danger_flat_icon-512.png')
            .addField("Staff :", message.author.username)
            .addField("Warns :", wrn.get(`${message.guild.id}_${mentionned.id}`, "warns"))
            .addField("Raison :", reason)
            .setTimestamp();
        modschannel.send(modlogs);
    }
};