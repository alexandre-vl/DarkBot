exports.run = (client, message) => {
    const args2 = message.content.split(" ").slice(2).join(" ");
    var Discord = require("discord.js");
    const ms = require("ms");
    let time = message.content.slice(client.config.prefix.length).split(/ +/);
    if (!time[1]){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Vous n'avez pas précisé le temps de votre timer**`);
        return message.channel.send(droit);
    }
    if (
        !time[1].endsWith("d") &&
        !time[1].endsWith("h") &&
        !time[1].endsWith("s") &&
        !time[1].endsWith("w") &&
        !time[1].endsWith("m")
    ){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Vous n'avez pas précisé le temps correct de votre timer**`);
        return message.channel.send(droit);
    }
    if(!ms(time[1])){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Vous n'avez pas précisé le temps correct de votre timer**`);
        return message.channel.send(droit);
    }
    if(ms(time[1]) > 1209600000){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veulliez préciser un temps inférieur à 2 semaine**`);
        return message.channel.send(droit);
    }
    if (!args2){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Vous n'avez pas précisé le nom de votre timer**`);
        return message.channel.send(droit);
    }
    const droit = new Discord.MessageEmbed()
        .setColor("#fada25")
        .setDescription(`<a:clockmoove:740634693334073434> Votre timer :\nNom: ${args2}\nTemps: ${ms(ms(time[1]))}`);
    message.channel.send(droit);
    setTimeout(function () {
        const droit = new Discord.MessageEmbed()
            .setColor("#fada25")
            .setDescription(`<a:checkmarkmoove:740634693078089730> ${message.author.toString()}, votre timer du nom de : **${args2}** est terminé.`);
        message.channel.send(droit);
    }, ms(time[1]));
};