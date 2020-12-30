exports.run = (client, message, droit) => {
    const args2 = message.content.split(" ").slice(2).join(" ");
    var Discord = require("discord.js");
    const Enmap = require("enmap");
    const srv = new Enmap({name: "serveur"});
    const utg = new Enmap({name: "userperguild"});
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription("<a:uncheckmoove:740634696198914070> **Vous n'avez pas la permission de faire cette commande**");
        return message.channel.send(droit);
    }
    let rMember = message.mentions.members.first();
    if (!rMember) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser l'utilisateur à mute**`);
        return message.channel.send(droit);
    }
    if (!args2) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser la raison**`);
        return message.channel.send(droit);
    }
    let role = srv.get(`${message.guild.id}`, "rolemute");
    if(role === "none"){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez définir le role de mute : /setrolemute <role mention>**`);
        return message.channel.send(droit);
    }
    if (!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Je n'ai pas la permission de faire cela**`);
        return message.channel.send(droit);
    }
        rMember.roles.add(role.id).catch(e => console.log(e.message));
        utg.set(`${message.guild.id}_${rMember.id}`, true, "mute");
        const embed = new Discord.MessageEmbed()
            .setDescription(`<a:checkmarkmoove:740634693078089730> **${rMember.displayName}** a bien été mute.`);
        message.channel.send(embed);
        const droit2 = new Discord.MessageEmbed()
            .setTitle("`Mute`")
            .setDescription(`Bonjour, vous venez d'être mute du serveur ${message.guild.name} par ${message.author.username}`)
            .addField("Raison :", args2)
            .setThumbnail('https://cdn3.iconfinder.com/data/icons/basicolor-audio-video/24/127_silent_speaker_volume_mute-512.png');
        rMember.send(droit2);
    if(srv.get(`${message.guild.id}`, "modlogschannel") !== "none"){
        let modschannel = message.guild.channels.cache.get(srv.get(`${message.guild.id}`, "modlogschannel").id);
        const modlogs = new Discord.MessageEmbed()
            .setAuthor(rMember.user.tag, rMember.user.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setColor("#eb3528")
            .setTitle("`Mute`")
            .setThumbnail('https://cdn3.iconfinder.com/data/icons/basicolor-audio-video/24/127_silent_speaker_volume_mute-512.png')
            .addField("Staff :", message.author.username)
            .addField("Raison :", args2)
            .setTimestamp();
        modschannel.send(modlogs);
    }
};