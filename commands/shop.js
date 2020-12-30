exports.run = (client, message) => {
    var Discord = require("discord.js");
    const Enmap = require("enmap"); 
    const exp = new Enmap({name: "points"});
    const embed = new Discord.MessageEmbed()
        .setColor('#ed420e')
        .setTitle('🛒 Shop')
        .setDescription('``Achetez votre article avec /buy <1|2|3>``')
        .addField('1️⃣ Couleur personnalisée de /rank', '►  500 xp')
        .addField('2️⃣ Petite image de /rank', '►  1000 xp')
        .addField('3️⃣ Grande image de /rank', '►  2500 xp')
        .setThumbnail('https://image.freepik.com/vecteurs-libre/achetez-signe-nous-sommes-ouverts_23-2148557016.jpg')
        .setFooter(`${message.author.username} : ${exp.get(`${message.guild.id}-${message.author.id}`,"points")} xp`, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }));
    return message.channel.send(embed);
};