exports.run = (client, message) => {
    var Discord = require("discord.js");
    const args1 = message.content.split(" ").slice(1).join(" ");
    var gplay = require('google-play-scraper');
 

    if (!args1){
        const droit = new Discord.MessageEmbed()
            .setColor("#E74C3C")
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veulliez preciser le nom d'une application playstore**`);
        message.channel.send(droit);
    }
    gplay.search({
        term: "instagram",
        num: 2
      }).then(console.log, console.log);


}