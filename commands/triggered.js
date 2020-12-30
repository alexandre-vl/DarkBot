exports.run = async (client, message) => {
    const member = message.mentions.users.first();
    const DIG = require("discord-image-generation");
    var Discord = require("discord.js");
    let avatar;
    if(member){
        avatar = member.displayAvatarURL({ dynamic: false, format: 'png' });
    }else {
        avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
    }
    let img = await new DIG.Triggered().getImage(`${avatar}`);
    let attach = new Discord.MessageAttachment(img, "delete.gif");
    message.channel.send(attach);
}