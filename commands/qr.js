exports.run = (client, message) => {
    var Discord = require("discord.js");
    const args1 = message.content.split(" ").slice(1).join(" ");
    var text = args1;
    if (!args1){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser un message ou un lien**`);
        return message.channel.send(droit);
    }else{
        //var colour_array = ["1211996", "3447003", "13089792", "16711858", "1088163", "16098851", "6150962"];
        //var randomNumber = getRandomNumber(0, colour_array.length - 1);
        //var randomColour = colour_array[randomNumber];
        var user_text = text.split(" ").join("%20");
        var qr_generator = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${user_text}`;
        //message.reply(qr_generator);
        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("``Qr-Code``")
            .setImage(qr_generator);
        return message.channel.send(embed);
    }
    //function getRandomNumber(min, max) {
    //    return Math.floor(Math.random() * (max - min + 1)) + min;
    //}
};