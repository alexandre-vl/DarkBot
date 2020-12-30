exports.run = (client, message, droit) => {
    const args1 = message.content.split(" ").slice(1).join(" ");
    var Discord = require("discord.js");
    const Enmap = require("enmap");
    const srv = new Enmap({name: "serveur"}); 
    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(droit);
        return message.channel.send(droit);
    }
    if(!args1){
      const droit = new Discord.MessageEmbed()
          .setColor(client.config.red)
          .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser la commande à désactiver (autorole, welcome, leave, imgwelcome, imgleave, logs, suggs, badword)**`);
      return message.channel.send(droit);
    }
    if (args1 === "welcome"){
      srv.set(`${message.guild.id}`, "off", "statwelc");
      const droit = new Discord.MessageEmbed()
          .setColor(client.config.green)
          .setDescription(`<a:checkmarkmoove:740634693078089730> Le message de bienvenue a bien été désactivé`);
      return message.channel.send(droit);
    }
    if (args1 === "leave"){
    srv.set(`${message.guild.id}`, "off", "statleave");
      const droit = new Discord.MessageEmbed()
          .setColor(client.config.green)
          .setDescription(`<a:checkmarkmoove:740634693078089730> Le message de départ a bien été désactivé`);
      return message.channel.send(droit);
    }
    if (args1 === "autorole"){
    srv.set(`${message.guild.id}`, "off", "statautorole");
      const droit = new Discord.MessageEmbed()
          .setColor(client.config.green)
          .setDescription(`<a:checkmarkmoove:740634693078089730> L'autorole a bien été désactivé`);
      return message.channel.send(droit);
    }
    if (args1 === "imgwelcome"){
    srv.set(`${message.guild.id}`, "off", "imgwelcchannel");
      const droit = new Discord.MessageEmbed()
          .setColor(client.config.green)
          .setDescription(`<a:checkmarkmoove:740634693078089730> L'image de bienvenue a bien été désactivé`);
      return message.channel.send(droit);
    }
    if (args1 === "imgleave"){
    srv.set(`${message.guild.id}`, "off", "imgleavechannel");
      const droit = new Discord.MessageEmbed()
          .setColor(client.config.green)
          .setDescription(`<a:checkmarkmoove:740634693078089730> L'image de départ a bien été désactivé`);
      return message.channel.send(droit);           
    }
    if (args1 === "logs"){
    srv.set(`${message.guild.id}`, "off", "statlog");
      const droit = new Discord.MessageEmbed()
          .setColor(client.config.green)
          .setDescription(`<a:checkmarkmoove:740634693078089730> Les logs ont bien été désactivé`);
      return message.channel.send(droit);          
    }
    if (args1 === "badword"){
    srv.set(`${message.guild.id}`, "off", "statbadword");
      const droit = new Discord.MessageEmbed()
          .setColor(client.config.green)
          .setDescription(`<a:checkmarkmoove:740634693078089730> Le système d'anti badwords a bien été désactivé`);
      return message.channel.send(droit);           
    }
};