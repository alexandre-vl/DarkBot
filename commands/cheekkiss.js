exports.run = (client, message) => {
    const args1 = message.content.split(" ").slice(1).join(" ");
    var Discord = require("discord.js");
    var rando_imgskissjoue = [
        'https://media.tenor.com/images/14513dad197291879cbab8b970b6fb7b/tenor.gif',
        'https://media.tenor.com/images/dac6a7272f17e7bd38341917b2064e9d/tenor.gif',
        'https://media.tenor.com/images/a639662ea62cf7c74e594d5f3d030b1a/tenor.gif',
        'https://media.tenor.com/images/0136ddedea728ae27df8fbcd19d680f5/tenor.gif',
        'https://media.tenor.com/images/aa84b47260e0155988fccf1b57cc92de/tenor.gif',
        'https://media.tenor.com/images/a6669f4044d66658c7ce96be768965e4/tenor.gif',
        'https://media.tenor.com/images/de18124ebe36764446ee2dbf54a672bf/tenor.gif',
        'https://media.tenor.com/images/822b11c4ab7843229fdd4abf5ccadf61/tenor.gif',
        'https://media.tenor.com/images/5c4e08fc2bf11b81980d434799e35c01/tenor.gif'
    ];
    var kissjouefinal = rando_imgskissjoue[Math.floor(Math.random() * rando_imgskissjoue.length)];
    if (!args1) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser à qui vous faites le bisou sur la joue**`);
        return message.channel.send(droit);
    }
    const embedkissjoue = new Discord.MessageEmbed()
        .setColor("#6f03fc")
        .setDescription(`😙 ${message.author.toString()} ` + ' fait un bisous sur la joue à ' + `**${args1}**`)
        .setImage(kissjouefinal)
        .setTimestamp();
    message.channel.send(embedkissjoue);
};