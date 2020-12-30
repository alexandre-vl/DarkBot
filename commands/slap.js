exports.run = (client, message) => {
    const args1 = message.content.split(" ").slice(1).join(" ");
    var Discord = require("discord.js");
    var rando_imgsslap = [
        'https://media1.tenor.com/images/4fa82be21ffd18c99a9708ba209d56ad/tenor.gif?itemid=5318916',
        'https://media.tenor.com/images/57a57baa6b2b20deb81d22fbaef91d88/tenor.gif',
        'https://media.tenor.com/images/917c67606676adc6fd5623d2d6c76064/tenor.gif',
        'https://media.tenor.com/images/9a2c17416b01df4363c05702a489425b/tenor.gif',
        'https://media.tenor.com/images/45a27dba6f60c6a8deee02335dd5f1a0/tenor.gif',
        'https://media.tenor.com/images/c366bb3a5d7820139646d8cdce96f7a8/tenor.gif',
        'https://media.tenor.com/images/a107547117e0b8f22e00a3f39c40eb2f/tenor.gif',
        'https://media.tenor.com/images/1d8edce282f3e36abc6b730357d3cea2/tenor.gif',
        'https://media.tenor.com/images/0e0075470c85f0546e0d0450455e77e8/tenor.gif',
        'https://media.tenor.com/images/4d8236f02c87a8d344f211cfb03c7c98/tenor.gif',
        'https://media.tenor.com/images/355bba4e1319ab0a4d6242be0570c077/tenor.gif',
        'https://media.tenor.com/images/cee6bc6b872818f319bfed1a067da7db/tenor.gif'
    ];
    var slapfinal = rando_imgsslap[Math.floor(Math.random() * rando_imgsslap.length)];
    if (!args1) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser à qui vous donnez une giffle**`);
        return message.channel.send(droit);
    }
    const embedslap = new Discord.MessageEmbed()
        .setColor("#6f03fc")
        .setDescription(`✋ ${message.author.toString()} ` + ' donne une giffle à ' + `**${args1}**`)
        .setImage(slapfinal)
        .setTimestamp();
    message.channel.send(embedslap);
};