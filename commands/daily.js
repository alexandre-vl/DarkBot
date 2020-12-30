function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  );
}
exports.run = async(client, message) => {
    var Discord = require("discord.js");
    var moment = require('moment');
    const Enmap = require("enmap"); 
    const exp = new Enmap({name: "points"});
    const utg = new Enmap({name: "userperguild"});
    const prevDaily = utg.get(`${message.guild.id}_${message.author.id}`, "pdaily");
    const timeDiff = (message.editedTimestamp || message.createdTimestamp) - prevDaily;
    const oneDay = 24 * 60 * 60 * 1000;
    if (prevDaily === "none" || timeDiff >= oneDay) {
        const amount = between(5, 50);
        exp.math(`${message.guild.id}-${message.author.id}`, "+", amount, "points");
        await utg.set(`${message.guild.id}_${message.author.id}`, message.editedTimestamp || message.createdTimestamp, "pdaily");
        return message.channel.send(`Vous avez reçu ${amount.toLocaleString()} xp. A demain (:`);
    }
    const timeRequired = oneDay - timeDiff;
    return message.channel.send(`Merci de patienter ${moment.duration(timeRequired, 'ms').format('h[h] [et] m[m]')} avant votre prochaine récompense journalière.`);
}