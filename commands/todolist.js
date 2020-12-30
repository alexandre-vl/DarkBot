exports.run = (client, message, args) => {
    const args1 = message.content.split(" ").slice(1).join(" ");
    var Discord = require("discord.js");
    const Enmap = require("enmap");
    const ath = new Enmap({name: "author"}); 
    if(!args[0]){
        const droit = new Discord.MessageEmbed()
            .setColor("#fada25")
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTitle('``ToDoList``')
            .setDescription(ath.get(`${message.author.id}`, "todolist"))
            .setTimestamp()
            .setFooter('© Darkbot 2020', 'https://cdn.discordapp.com/attachments/619408928727367686/715128336158031933/image.png');
        return message.channel.send(droit);
    }else{
        const ajout = args1;
        ath.set(`${message.author.id}`, ajout, "todolist");
        const droit = new Discord.MessageEmbed()
            .setColor("#fada25")
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setDescription("<a:checkmarkmoove:740634693078089730> Votre todolist a été mise à jour (`/todolist`)")
            .setTimestamp()
            .setFooter('© Darkbot 2020', 'https://cdn.discordapp.com/attachments/619408928727367686/715128336158031933/image.png');
        return message.channel.send(droit);
    }
};