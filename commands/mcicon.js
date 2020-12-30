exports.run = (client, message, args) => {
    var Discord = require("discord.js");
    var n = args[0].includes(".");
    if(!args[0]){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser une IP.**`);
        return message.channel.send(droit);
    }else if(n === false){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser une IP.**`);
        return message.channel.send(droit);
    }else{
        let serverstats = new Discord.MessageEmbed()
            .setTitle("``ServerIcon`` " + `${args[0]}`)
            .setTimestamp()
            .setImage(`https://eu.mc-api.net/v3/server/favicon/${args[0]}`)
            .setFooter('© Darkbot 2020', 'https://cdn.discordapp.com/attachments/619408928727367686/715128336158031933/image.png');
        message.channel.send(serverstats);
    }
};