exports.run = (client, message) => {
    const args1 = message.content.split(" ").slice(1).join(" ");
    var Discord = require("discord.js");
    var rando_imgspat = [
        'https://media.tenor.com/images/37e36267891a33899bb2d88232f9f637/tenor.gif',
        'https://media.tenor.com/images/1d37a873edfeb81a1f5403f4a3bfa185/tenor.gif',
        'https://media1.tenor.com/images/d9b480bcd392d05426ae6150e986bbf0/tenor.gif?itemid=9332926',
        'https://media.tenor.com/images/0d4f94d11b300669d1d0ace43171d23e/tenor.gif',
        'https://media.tenor.com/images/4b8690bf5bc02cfc262e0b535659561f/tenor.gif',
        'https://media.tenor.com/images/50b500c0fc0ad01a974af8b58b5e0c9b/tenor.gif',
        'https://media.tenor.com/images/51a38dac799ade758d371c2ccd69fdc4/tenor.gif',
        'https://media.tenor.com/images/2daf2f83f712962799683e4ad2b167b7/tenor.gif',
        'https://media.tenor.com/images/a671268253717ff877474fd019ef73e9/tenor.gif',
        'https://media.tenor.com/images/73a2c158e2f3c5b78f4cfad1c5c79d7b/tenor.gif',
        'https://media.tenor.com/images/d88e63f03bfcdc37439d95425e10c3fa/tenor.gif',
        'https://media.tenor.com/images/87fc4ab2abde188093f9eb0d42698be2/tenor.gif'
    ];
    var patfinal = rando_imgspat[Math.floor(Math.random() * rando_imgspat.length)];
    if (!args1) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser à qui vous faites les papouilles**`);
        return message.channel.send(droit);
    }
    const embedpat = new Discord.MessageEmbed()
        .setColor("#6f03fc")
        .setDescription(`:raised_hand: ${message.author.toString()} ` + ' fait une caresse à ' + `**${args1}**`)
        .setImage(patfinal)
        .setTimestamp();
    message.channel.send(embedpat);
};