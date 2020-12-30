exports.run = (client, message, args, droit) => {
    var Discord = require("discord.js");
    const ms = require("ms");
    const Enmap = require("enmap");
    const srv = new Enmap({name: "serveur"});
    const utg = new Enmap({name: "userperguild"});
    let muterole = srv.get(`${message.guild.id}`, "rolemute");
    if(muterole === "none") {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez définir le role mute : /setrolemute <role mention>**`);
        return message.channel.send(droit);
    }
    if (!message.member.hasPermission(["MANAGE_ROLES"])){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription("<a:uncheckmoove:740634696198914070> **Vous n'avez pas la permission de faire cette commande**");
        return message.channel.send(droit);
    }
    if (!message.guild.me.hasPermission(["MANAGE_ROLES"])){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Je n'ai pas la permission de faire cela**`);
        return message.channel.send(droit);
    }

    if (message.member.hasPermission(["MANAGE_ROLES"])) {
        let muted = message.mentions.members.first();
        if (!muted){
            const droit = new Discord.MessageEmbed()
                .setColor(client.config.red)
                .setDescription(`<a:uncheckmoove:740634696198914070> **Vous n'avez pas mentionné d'utilisateur à mute**`);
            return message.channel.send(droit);
        }
        if (!args[2]){
            const droit = new Discord.MessageEmbed()
                .setColor(client.config.red)
                .setDescription(`<a:uncheckmoove:740634696198914070> **Vous n'avez pas précisé le temps de mute**`);
            return message.channel.send(droit);
        }
        if (
            !args[2].endsWith("d") &&
            !args[2].endsWith("h") &&
            !args[2].endsWith("s") &&
            !args[2].endsWith("w") &&
            !args[2].endsWith("m")
        ){
            const droit = new Discord.MessageEmbed()
                .setColor(client.config.red)
                .setDescription(`<a:uncheckmoove:740634696198914070> **Vous n'avez pas précisé le temps de mute**`);
            return message.channel.send(droit);
        }
            muted.roles.add(muterole.id);
            utg.set(`${message.guild.id}_${muted.id}`, true, "mute");
            const droit = new Discord.MessageEmbed()
                .setDescription(`<a:checkmarkmoove:740634693078089730> ${muted} a été mute pour ${ms(ms(args[2]))}`);
            message.channel.send(droit);
            if(srv.get(`${message.guild.id}`, "modlogschannel") !== "none"){
                let modschannel = message.guild.channels.cache.get(srv.get(`${message.guild.id}`, "modlogschannel").id);
                const modlogs = new Discord.MessageEmbed()
                    .setAuthor(muted.user.tag, muted.user.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
                    .setColor("#eb3528")
                    .setTitle("`TempMute`")
                    .setThumbnail('https://cdn3.iconfinder.com/data/icons/basicolor-audio-video/24/127_silent_speaker_volume_mute-512.png')
                    .addField("Staff :", message.author.username)
                    .addField("Temps :", args[2])
                    .setTimestamp();
                modschannel.send(modlogs);
            }
        setTimeout(function () {
                muted.roles.remove(muterole.id);
                utg.set(`${message.guild.id}_${muted.id}`, false, "mute");
                const droit = new Discord.MessageEmbed()
                    .setDescription(`<a:checkmarkmoove:740634693078089730> **${muted}** a été unmute.`);
                message.channel.send(droit);
        }, ms(args[2]));
    }else{
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(droit);
        return message.channel.send(droit);
    }
};