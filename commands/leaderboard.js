exports.run = (client, message) => {
    const Enmap = require("enmap"); 
    const exp = new Enmap({name: "points"}); 
    var Discord = require("discord.js");
    const filtered = exp.array().filter( p => p.guild === message.guild.id );
    const sorted = filtered.sort((a, b) => b.points - a.points);
    let top5;
    if(filtered.length <= 5){
        top5 = sorted.splice(0, filtered.length);
    }else {
        top5 = sorted.splice(0, 5);
    }
    const embed = new Discord.MessageEmbed()
      .setColor('#3F7FDB')
      .setTitle("Leaderboard")
      .setAuthor(message.guild.name, message.guild.iconURL())
      .setDescription("``Top 5``");
    for(const data of top5) {
      const user = client.users.cache.get(data.user);
      embed.addField(user ? user.username : "Utilisateur inconnu", `${data.points} xp (level ${data.level})`);
    }
    return message.channel.send({embed});
};