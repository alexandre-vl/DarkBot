exports.run = async (client, message) => {
    var Discord = require("discord.js");
    const randomPuppy = require('random-puppy');
    const subReddits = ["meme", "memes"];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);
    const memeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`Votre meme :`)
        .setURL(`https://reddit.com/r/${random}`);
    message.channel.send(memeEmbed);
}