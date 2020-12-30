exports.run = async (client, message) => {
    const DIG = require("discord-image-generation");
    var Discord = require("discord.js");
    let avatar;
    const member = message.mentions.users.first();
    if(member){
        avatar = member.avatarURL({ dynamic: false, format: 'png' });
    }else{
        avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
    }
    let img = await new DIG.Delete().getImage(`${avatar}`);
    let attach = new Discord.MessageAttachment(img, "delete.png");
    message.channel.send(attach);
}