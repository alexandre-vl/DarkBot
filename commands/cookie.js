exports.run = (client, message) => {
    const args1 = message.content.split(" ").slice(1).join(" ");
    var Discord = require("discord.js");
    var rando_imgscookie = [
        'https://media1.tenor.com/images/c10b4e9e6b6d2835b19f42cbdd276774/tenor.gif?itemid=10644609',
        'https://media.tenor.com/images/19d865e2a377de7b8b32db0162bf32b4/tenor.gif',
        'https://media.tenor.com/images/9845efcd23e98bcb67185c2f0f229726/tenor.gif',
        'https://media.tenor.com/images/cb1e23e8e8ccc6934876368ada5a17ce/tenor.gif',
        'https://media.tenor.com/images/cb1e23e8e8ccc6934876368ada5a17ce/tenor.gif',
        'https://media.tenor.com/images/5fed120e585f91aa2af29abb97251942/tenor.gif',
        'https://media.tenor.com/images/589af38d6ecb368243f4a76b682b6b7f/tenor.gif',
        'https://media.tenor.com/images/d4f5487977432f55ef9bbc3d521dd6a6/tenor.gif',
        'https://media1.tenor.com/images/79a141d4c20c3cf98bcb290b8566e175/tenor.gif?itemid=4514802',
        'https://media.tenor.com/images/5252d012d6dd60f1d181c358f1f258b0/tenor.gif',
        'https://media.tenor.com/images/496662ea7cdd09db4a8815b4c7cfeb16/tenor.gif',
        'https://media.tenor.com/images/63f3879246da9c1a33e7b374a9216d09/tenor.gif',
        'https://media.tenor.com/images/15e2266d1aac7aad8a0b2533830f5815/tenor.gif',
        'https://media.tenor.com/images/eb797074412f9cc4b59db85609d9bb95/tenor.gif',
        'https://media.tenor.com/images/4a9454ecff636ca5a6369313048bf5ee/tenor.gif'
    ];
    var cookiefinal = rando_imgscookie[Math.floor(Math.random() * rando_imgscookie.length)];
    if (!args1) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser à qui vous donnez des cookies**`);
        return message.channel.send(droit);
    }
    const embedcookie = new Discord.MessageEmbed()
        .setColor("#6f03fc")
        .setDescription(`🍪 ${message.author.toString()} ` + ' donne des cookies à ' + `**${args1}**`)
        .setImage(cookiefinal)
        .setTimestamp();
    message.channel.send(embedcookie);
};