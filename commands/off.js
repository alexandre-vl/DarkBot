exports.run = (client, message, droit) => {
    var Discord = require("discord.js");
    const authorize = ["614052096857341952","550997709083901996"];
    if (!authorize.includes(message.author.id)) {
        const embed = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription("<a:uncheckmoove:740634696198914070> **Vous n'avez pas la permission de faire cette commande**");
        return message.channel.send(embed);
    }
    client.destroy();
};