exports.run = async (client, message, args, droit) => {
    var Discord = require("discord.js");
    const { MessageEmbed } = require("discord.js");
    const lyrics = require('node-lyrics');
    const { channel } = message.member.voice;
    const args1 = message.content.split(" ").slice(1).join(" ");
    let embed = new MessageEmbed();
    if(!args1){
        const embed = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription("<a:uncheckmoove:740634696198914070> Veulliez préciser le nom d'une musique");
        return message.channel.send(embed);
    }
    const oh = await lyrics.parseLyrics(args1);
    message.channel.send(oh)
}