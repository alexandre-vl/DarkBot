exports.run = (client, message) => {
    var Discord = require("discord.js");
    function doRand() {
        var rand = ['Pile','Face'];
        return rand[Math.floor(Math.random()*rand.length)];
    }
    const embed = new Discord.MessageEmbed()
        .setColor("#db25db")
        .setDescription(`💸 ${doRand()} !`);
    return message.channel.send(embed);
};