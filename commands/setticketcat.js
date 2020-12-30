exports.run = (client, message, droit) => {
    const args1 = message.content.split(" ").slice(1).join(" ");
    var Discord = require("discord.js");
    const Enmap = require("enmap");
    const srv = new Enmap({name: "serveur"}); 
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription("<a:uncheckmoove:740634696198914070> **Vous n'avez pas la permission de faire cette commande**");
        return message.channel.send(droit);
    }
    if(!args1){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser l'ID de la catégorie**`);
        return message.channel.send(droit);
    }
    srv.set(`${message.guild.id}`, args1, "catticket");
    const embed = new Discord.MessageEmbed()
        .setColor(client.config.green)
        .setDescription('<a:checkmarkmoove:740634693078089730> La catégorie des tickets est défini : ' + args1);
    message.channel.send(embed);
};