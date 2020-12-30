exports.run = (client, message) => {
    const args1 = message.content.split(" ").slice(1).join(" ");
    var Discord = require("discord.js");
    var rando_imgsbang = [
        'https://media.tenor.com/images/bf9e424b56cfc2e794c0b8d11b4b8d23/tenor.gif',
        'https://media.tenor.com/images/9e15e85e437fb00bec50f118ae501c2d/tenor.gif',
        'https://media.tenor.com/images/a6a5a85b2b566e8b881b12e58184fe72/tenor.gif',
        'https://media.tenor.com/images/1c4094733e1202609de548864168c0aa/tenor.gif',
        'https://media.tenor.com/images/a68d9e8b2a6a7ec692ab6ae51597a8c5/tenor.gif',
        'https://media.tenor.com/images/47ce268386a248187e55d9b6b087b7d0/tenor.gif',
        'https://media.tenor.com/images/0f1a8f1af6fa4f013d8c682a6a8b52f0/tenor.gif',
        'https://media.tenor.com/images/cf09a693375765ad4c3954f7ffc135ff/tenor.gif',
        'https://media.tenor.com/images/9d6e3b7b208edd1f4dd8dfbcbcda6809/tenor.gif',
        'https://media1.tenor.com/images/31afb64102cbbb40073ca553d1b4a2bb/tenor.gif?itemid=5106447',
        'https://media1.tenor.com/images/a1ff0a4ad219db2b4b979e5b9f09acf2/tenor.gif?itemid=16293436',
        'https://media.tenor.com/images/2e6553a2684b94b9fe43e3a9e0992be6/tenor.gif'
    ];
    var bangfinal = rando_imgsbang[Math.floor(Math.random() * rando_imgsbang.length)];
    if (!args1) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser sur qui vous tirez**`);
        return message.channel.send(droit);   
    }
    const embedbang = new Discord.MessageEmbed()
        .setColor("#6f03fc")
        .setDescription(`🔫 ${message.author.toString()} ` + ' tire sur ' + `**${args1}**`)
        .setImage(bangfinal)
        .setTimestamp();
    message.channel.send(embedbang);
};