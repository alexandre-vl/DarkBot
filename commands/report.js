exports.run = (client, message) => {
    const args1 = message.content.split(" ").slice(1).join(" ");
    var Discord = require("discord.js");
    const Enmap = require("enmap");
    const srv = new Enmap({name: "serveur"});
    if (!args1) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser votre report**`);
        return message.channel.send(droit);
    }
    if(srv.get(`${message.guild.id}`, "reportchannel") === "none"){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez définir un salon (/setreportchannel)**`);
        return message.channel.send(droit);
    } else {
        let reason = args1;
        let reportEmbed = new Discord.MessageEmbed()
          .setTitle("📁 Report")
          .setColor("#fada25")
          .setAuthor(message.author.username, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
          .setDescription("Raison : ``" + reason + "``")
          .setTimestamp();
        let reportschannel = message.guild.channels.cache.get(srv.get(`${message.guild.id}`, "reportchannel").id);
        message.delete().catch(O_o=>{});
        reportschannel.send(reportEmbed);
        const embed = new Discord.MessageEmbed()
            .setDescription('<a:checkmarkmoove:740634693078089730> Merci, notre staff gère le problème au plus vite.');
        return message.channel.send(embed);
    }
};