exports.run = (client, message, args) => {
    const args2 = message.content.split(" ").slice(2).join(" ");
    var Discord = require("discord.js");
    if (!args2){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser un ou des mots**`);
        return message.channel.send(droit);
    }
    if (!args[0]){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser une langue (fr/en)**`);
        return message.channel.send(droit);
    }
    const translate = require('google-translate-api');
    console.log(args[0]);
    console.log(args2);
    translate(args2, { to: args[0] }).then(trans =>{
        let emb = new Discord.RichEmbed()
        .setColor("#00ff00")
        .setDescription(trans.text);
        message.channel.send(emb);
    }).catch(err => {
        console.error(err);
        const droit = new Discord.MessageEmbed()
            .setColor("#E74C3C")
            .setDescription(`<a:uncheckmoove:740634696198914070> **Erreur**`);
        return message.channel.send(droit);
    });
};