exports.run = (client, message) => {
    var Discord = require("discord.js");
    const entraide = new Discord.MessageEmbed()
        .setTitle('<:Discord1:748156609959821413> Entraide')
        .setDescription("<:Arrow2:748156609829666997> Tu as envie de t'améliorer et/ou de te former en développement ?! Alors c'est ici que ça se passe ! Cliques sur le lien ci-dessus.")
        .setURL('https://discord.gg/Mh2GxNZ')
        .setImage('https://image.freepik.com/vecteurs-libre/illustration-poignee-main-deux-mains-sous-forme-ciel-etoile-espace_87494-75.jpg');
    message.channel.send(entraide);
};