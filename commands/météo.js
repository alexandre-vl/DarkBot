//https://medium.com/@cstruong/adding-weather-functionality-to-chrispybot-my-discord-js-bot-77c6a597b2d6
//https://github.com/UddeshJain/Discord-Weather-Bot/blob/master/index.js
exports.run = (client, message, args) => {
    var Discord = require("discord.js");
    const weather = require('weather-js');
    weather.find({search: args[0], degreeType: 'C'}, function (error, result){//args.join(" ")
        if(!args.length){
            const droit = new Discord.MessageEmbed()
                .setColor(client.config.red)
                .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser une ville**`);
            return message.channel.send(droit);
        }else if(result === undefined || result.length === 0){
            const droit = new Discord.MessageEmbed()
                .setColor(client.config.red)
                .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser une ville correcte**`);
            return message.channel.send(droit);
        }else if(error){
            const droit = new Discord.MessageEmbed()
                .setColor(client.config.red)
                .setDescription(`<a:uncheckmoove:740634696198914070> **${error}**`);
            return message.channel.send(droit);   
        }else{
            var current = result[0].current;
            var location = result[0].location;
            let servericon = message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 });
            const weatherinfo = new Discord.MessageEmbed()
                .setTitle("🌡 ``" + `Météo de ${args[0]}` + "``")//current.observationpoint
                .setThumbnail(current.imageUrl)
                .setColor(0x111111)
                .addField('Température', `${current.temperature} ° Celsius`)
                .addField('Vent', current.winddisplay)
                .addField('Humidité', `${current.humidity}%`)
                .addField('Ciel', `${current.skytext}`)
                .setTimestamp()
                .setFooter('© Darkbot 2020', 'https://cdn.discordapp.com/attachments/619408928727367686/715128336158031933/image.png');
            message.channel.send(weatherinfo);
        }  
    });
};