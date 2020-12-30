exports.run = (client, message) => {
    var Discord = require("discord.js");
    var rando_imgspout = [
        'https://media.tenor.com/images/207b883cfed8c70fb7489bb38372ebba/tenor.gif',
        'https://media.tenor.com/images/46c9b8da42a62778fb37f89513c8af0e/tenor.gif',
        'https://media.tenor.com/images/4217a276896fa6b73099cf84f136e795/tenor.gif',
        'https://media.tenor.com/images/cd97cc38633ba0d8d72feea5d66dbb33/tenor.gif',
        'https://media.tenor.com/images/011ec2a67e69cd48570bf530ce84016b/tenor.gif',
        'https://media.tenor.com/images/d0ec17c2a83af604847276fdead3d786/tenor.gif',
        'https://media.tenor.com/images/84e609c97fc79323c572baa4e8486473/tenor.gif',
        'https://media.tenor.com/images/383270cb087e9e64a0f6f7ce2bc71101/tenor.gif',
        'https://media.tenor.com/images/b4799bb28f437238eb253420639f4af6/tenor.gif',
        'https://media1.tenor.com/images/6125c9e6fb1dbb4fd23cf6db578702da/tenor.gif?itemid=14065051'
    ];
    var poutfinal = rando_imgspout[Math.floor(Math.random() * rando_imgspout.length)];
    const embedpout = new Discord.MessageEmbed()
        .setColor("#6f03fc")
        .setDescription(`😠 ${message.author.toString()} ` + ' boude.')
        .setImage(poutfinal)
        .setTimestamp();
    message.channel.send(embedpout);
};