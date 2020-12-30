exports.run = (client, message) => {
    const args1 = message.content.split(" ").slice(1).join(" ");
    var Discord = require("discord.js");
    const figlet = require('figlet');
    if(!args1){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser du texte**`);
        message.channel.send(droit);
    } else {
        figlet.text(args1, function (err, data){
            if(err){
                console.log('Something went wrong');
                console.dir(err);
            }
            if(data.length > 2000) {
                const droit = new Discord.MessageEmbed()
                    .setColor("#E74C3C")
                    .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser du texte ne dépassant pas 2000 caractères**`);
                message.channel.send(droit);
            }
            message.channel.send('```' + data + '```');
        });
    }
};