exports.run = (client, message) => {
    const args1 = message.content.split(" ").slice(1).join(" ");
    var Discord = require("discord.js");
    var rando_imgspunch = [
        'https://media.tenor.com/images/b11c79cf158d8c9bd6e721676b06ad73/tenor.gif',
        'https://media.tenor.com/images/04f62b7819a22210c0ba411ddb2636a5/tenor.gif',
        'https://media.tenor.com/images/8a79543998d6878be573aab94ae86456/tenor.gif',
        'https://media.tenor.com/images/32d7dd9066896c0f82ea90b393f6ab6c/tenor.gif',
        'https://media.tenor.com/images/9c14d2d5dd918471954e5946166f3632/tenor.gif',
        'https://media.tenor.com/images/f48c44b3bd26f1f913db0f5a3b2e4e91/tenor.gif',
        'https://media.tenor.com/images/c0f5f67749d09f5e17442754a4700d2b/tenor.gif',
        'https://media.tenor.com/images/b561ad7377142adf365fe33f20fa45e8/tenor.gif',
        'https://media.tenor.com/images/26ed0cee60197a8329defae1f6586dd5/tenor.gif',
        'https://media.tenor.com/images/9000aca94295d6438ea941069e402e77/tenor.gif',
        'https://media.tenor.com/images/3d95f0ee1f044518cbfd3f4ee12d26bd/tenor.gif',
        'https://media.tenor.com/images/73c0fa4dba7c7b184bd61d567774fcf4/tenor.gif',
        'https://media.tenor.com/images/c3e19b66ddc54379c0498e8950f56eb7/tenor.gif'
    ];
    var punchfinal = rando_imgspunch[Math.floor(Math.random() * rando_imgspunch.length)];
    if (!args1) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser qui vous tapez**`);
        return message.channel.send(droit);
    }
    const embedpunch = new Discord.MessageEmbed()
        .setColor("#6f03fc")
        .setDescription(`👊 ${message.author.toString()} ` + ' donne à coup de poing à ' + `**${args1}**`)
        .setImage(punchfinal)
        .setTimestamp();
    message.channel.send(embedpunch);
};