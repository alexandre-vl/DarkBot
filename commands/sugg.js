exports.run = (client, message) => {
    const args1 = message.content.split(" ").slice(1).join(" ");
    var Discord = require("discord.js");
    const Enmap = require("enmap");
    const srv = new Enmap({name: "serveur"}); 
    if(srv.get(`${message.guild.id}`, "suggchannel") === "none"){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez définir le channel des suggestions : /setsuggchannel <channel mention>**`);
        return message.channel.send(droit);    
    }
    let channel = message.guild.channels.cache.get(srv.get(`${message.guild.id}`, "suggchannel").id);
    if(!channel) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez définir le channel des suggestions : /setsuggchannel <channel mention>**`);
        return message.channel.send(droit);
    }
    if (!args1) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser votre suggestion**`);
        return message.channel.send(droit);
    }
    const embed = new Discord.MessageEmbed()
        .setColor("#fada25")
        .setAuthor('Suggestion', message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), 'https://discord.gg/PyknWJ9')
        .addField('Membre :', message.author.toString(), true)
        .addField('Suggestion :','`'+args1+'`', false)
        .setFooter('DarkBot', 'https://cdn.discordapp.com/attachments/619408928727367686/715128336158031933/image.png')
        .setTimestamp();
    message.delete();
    channel.send(embed).then(function (message) {
        message.react("✅");
        message.react("❌");
    });
    const droit = new Discord.MessageEmbed()
        .setColor("#fada25")
        .setDescription('<a:checkmarkmoove:740634693078089730> La suggestion à bien été envoyé.');
    return message.channel.send(droit);
};