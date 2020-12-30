exports.run = async(client, message) => {
  var Discord = require("discord.js");
  const Enmap = require("enmap"); 
  const exp = new Enmap({name: "points"});
  const utg = new Enmap({name: "userperguild"});
  const DIG = require("discord-image-generation");
  let color;
  if(utg.get(`${message.guild.id}_${message.author.id}`, "colorank") === "none"){
    color = '#3F7FDB';
  }else{
    color = utg.get(`${message.guild.id}_${message.author.id}`, "colorank");
  }
  if(utg.get(`${message.guild.id}_${message.author.id}`, "largepic") === false && utg.get(`${message.guild.id}_${message.author.id}`, "littlepic") === false){
      var rankbed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("``Rank``")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .addField("XP", `${exp.get(`${message.guild.id}-${message.author.id}`,"points")}`, true)
        .addField("Level", `${exp.get(`${message.guild.id}-${message.author.id}`,"level")}`, true)
        .addField("Messages", `${utg.get(`${message.guild.id}_${message.author.id}`, "msgcount")}`, true)
        .setTimestamp(new Date())
        .setFooter(client.user.username, client.user.avatarURL());
      return message.channel.send(rankbed);
  }else if(utg.get(`${message.guild.id}_${message.author.id}`, "largepic") === true){
      let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.Ad().getImage(`${avatar}`);
      let attach = new Discord.MessageAttachment(img, "rankembed.png");
      var rankbed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("``Rank``")
        .attachFiles(attach)
        .setImage('attachment://rankembed.png')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .addField("XP", `${exp.get(`${message.guild.id}-${message.author.id}`,"points")}`, true)
        .addField("Level", `${exp.get(`${message.guild.id}-${message.author.id}`,"level")}`, true)
        .addField("Messages", `${utg.get(`${message.guild.id}_${message.author.id}`, "msgcount")}`, true)
        .setTimestamp(new Date())
        .setFooter(client.user.username, client.user.avatarURL());
      return message.channel.send(rankbed);
  }else if(utg.get(`${message.guild.id}_${message.author.id}`, "littlepic") === true){
      let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.Jail().getImage(`${avatar}`);
      let attach = new Discord.MessageAttachment(img, "rankembed.png");
      var rankbed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("``Rank``")
        .attachFiles(attach)
        .setThumbnail('attachment://rankembed.png')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .addField("XP", `${exp.get(`${message.guild.id}-${message.author.id}`,"points")}`, true)
        .addField("Level", `${exp.get(`${message.guild.id}-${message.author.id}`,"level")}`, true)
        .addField("Messages", `${utg.get(`${message.guild.id}_${message.author.id}`, "msgcount")}`, true)
        .setTimestamp(new Date())
        .setFooter(client.user.username, client.user.avatarURL());
      return message.channel.send(rankbed);
  }
};