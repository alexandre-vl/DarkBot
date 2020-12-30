exports.run = (client, message, args) => {
    var Discord = require("discord.js");
    const { AvatarRendered, SkinRendered, UsernameToUUID } = require('minestats');
      if(!args[0]){
          const droit = new Discord.MessageEmbed()
              .setColor(client.config.red)
              .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser un pseudonyme Minecraft.**`);
          return message.channel.send(droit);
      }else{
        UsernameToUUID(args[0]).then(async (info) => {
          let renderedavatar = await AvatarRendered(info.id);
          let mchead = new Discord.MessageEmbed()
              .setTitle('Minecraft infos : ' + `${info.name}`)
              .setURL(`https://crafatar.com/skins/${info.id}`)
              .setImage(renderedavatar)
              .setTimestamp()
              .setFooter('© Darkbot 2020', 'https://cdn.discordapp.com/attachments/619408928727367686/715128336158031933/image.png');
          message.channel.send(mchead);
        }).catch((e) => {
          console.log(e);
          const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser un pseudonyme Minecraft correct.**`);
          return message.channel.send(droit);
        });
      }
};