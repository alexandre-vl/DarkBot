exports.run = (client, message) => {
    var Discord = require("discord.js");
    var rando_imgsblush = [
        'https://media.tenor.com/images/93f3a4a0bf424e96298064168ffa944a/tenor.gif',
        'https://media.tenor.com/images/773802d5cc29c88ec7f4b5e31211e54e/tenor.gif',
        'https://media.tenor.com/images/62eaf1d2b70f364b77e6dbaf1421c0cc/tenor.gif',
        'https://media.tenor.com/images/6bfc57bde155c401edc1d032de468cd6/tenor.gif',
        'https://media1.tenor.com/images/fb1aa76944c156acc494fff37ebdbcfa/tenor.gif?itemid=14521920',
        'https://media.tenor.com/images/52be0797a283d21927c3d4acff1b7bd3/tenor.gif',
        'https://media.tenor.com/images/6e75fae25292c10785d6c49e0c1a0679/tenor.gif',
        'https://media.tenor.com/images/5f737df63beee63857ce767a877547ff/tenor.gif',
        'https://media.tenor.com/images/4ceb6cc127387d8ea4e54e3566e8b646/tenor.gif',
        'https://media.tenor.com/images/135dbab59e4dced25cbf11f14ab350ae/tenor.gif',
        'https://media.tenor.com/images/93e6b1dd4e32d17734c22d51afb32d6a/tenor.gif',
        'https://media.tenor.com/images/49a52059fa56603433a5a990bbdd14df/tenor.gif',
        'https://media.tenor.com/images/a0e5c618d15a60a41a6228d7fbfecd48/tenor.gif',
        'https://media.tenor.com/images/3ea9d7c6803bdefbe9611f56dacad411/tenor.gif',
        'https://media.tenor.com/images/c8708616ae32591aa6556f6af3f50c33/tenor.gif',
        'https://media.tenor.com/images/40aefe5aee05f3dfb543161521f51da8/tenor.gif',
        'https://media.tenor.com/images/f73f13c2c2a22e034167b4749a852ec9/tenor.gif',
        'https://media.tenor.com/images/269c21977f7023a9fd2c1db4a6e6ed5e/tenor.gif'

    ];
    var blushfinal = rando_imgsblush[Math.floor(Math.random() * rando_imgsblush.length)];
    const embedblush = new Discord.MessageEmbed()
        .setColor("#6f03fc")
        .setDescription(`😊 ${message.author.toString()} ` + ` rougit`)
        .setImage(blushfinal)
        .setTimestamp();
    message.channel.send(embedblush);
};