exports.run = (client, message, droit) => {
    const args1 = message.content.split(" ").slice(1).join(" ");
    var Discord = require("discord.js");
    if (!message.member.hasPermission(["MANAGE_MESSAGES"])){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription("<a:uncheckmoove:740634696198914070> **Vous n'avez pas la permission de faire cette commande**");
        return message.channel.send(droit);
    }
    message.delete();
    const embed = new Discord.MessageEmbed()
        .setColor("#fada25")
        .setTitle('Sondage')
        .setAuthor('DarkBot', 'https://cdn.discordapp.com/attachments/619408928727367686/715128336158031933/image.png', 'https://discord.gg/yd5GBEw')
        .setThumbnail('https://cdn.discordapp.com/attachments/619408928727367686/716343544880562197/sondage.png')
        .setDescription(args1)
        .addField('Pour voter', 'Réagissez par 👍 ou 👎', false);
    message.channel.send(embed)
        .then(function (message) {
            message.react("👍");
            message.react("👎");
        });
};