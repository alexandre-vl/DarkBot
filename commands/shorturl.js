//https://github.com/bycop/Youtube/tree/master/Discord.js lien de celui qui a trouvé le package
exports.run = (client, message) => {
    const args1 = message.content.split(" ").slice(1).join(" ");
    var Discord = require("discord.js");
    const shorten = require("isgd");
    if(!args1){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription("<a:uncheckmoove:740634696198914070> **Usage : `/shorturl <url>`**");
        return message.channel.send(droit);
    }else { 
        shorten.shorten(args1, function(res){
            if(res.startsWith('Error')){
                const droit = new Discord.MessageEmbed()
                    .setColor(client.config.red)
                    .setDescription("<a:uncheckmoove:740634696198914070> **URL introuvable**");
                return message.channel.send(droit);
            }
            const embed = new Discord.MessageEmbed()
                .setColor("#fada25")
                .setDescription('Nouveau lien : '+ res);
            return message.channel.send(embed);
        });
    }
};