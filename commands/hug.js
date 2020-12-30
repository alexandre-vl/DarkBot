exports.run = (client, message) => {
    const args1 = message.content.split(" ").slice(1).join(" ");
    var Discord = require("discord.js");
    var rando_imgshug = [
        'https://media1.tenor.com/images/edea458dd2cbc76b17b7973a0c23685c/tenor.gif?itemid=13041472',
        'https://media1.tenor.com/images/ef5f112be2952c59c4bc5668465439b1/tenor.gif?itemid=16038289',
        'https://media1.tenor.com/images/4f2158f495fa4a0cf80e38605dfe81e0/tenor.gif?itemid=16121369',
        'https://media1.tenor.com/images/2606d7669e77ad8820129f99bdfeb1c6/tenor.gif?itemid=14252346',
        'https://media1.tenor.com/images/83b732c53bfdd1409aec0553f9bfacfd/tenor.gif?itemid=15974226',
        'https://media1.tenor.com/images/bb9c0c56769afa3b58b9efe5c7bcaafb/tenor.gif?itemid=16831471',
        'https://media1.tenor.com/images/684efd91473dcfab34cb78bf16d211cf/tenor.gif?itemid=14495459',
        'https://media1.tenor.com/images/38e6c2549798384639533da90470e26d/tenor.gif?itemid=12668681',
        'https://media1.tenor.com/images/07d8ad19218d0174e53ef32edc67e16d/tenor.gif?itemid=16850726',
        'https://media1.tenor.com/images/b214bd5730fd2fdfaae989b0e2b5abb8/tenor.gif?itemid=12307787',
        'https://media1.tenor.com/images/38ff71787d331e2c8c7326846e718c4b/tenor.gif?itemid=12088250',
        'https://media1.tenor.com/images/4d89d7f963b41a416ec8a55230dab31b/tenor.gif?itemid=5166500',
        'https://media1.tenor.com/images/94989f6312726739893d41231942bb1b/tenor.gif?itemid=14106856',
        'https://media1.tenor.com/images/de06f8f71eb9f7ac2aa363277bb15fee/tenor.gif?itemid=10426436',
        'https://media1.tenor.com/images/234d471b1068bc25d435c607224454c9/tenor.gif?itemid=3532081',
        'https://media1.tenor.com/images/297de7a5f12241b308e4d0debd017395/tenor.gif?itemid=4832629',
        'https://media1.tenor.com/images/4be3396644e87d3c201f8965104e57b7/tenor.gif?itemid=7539851',
        'https://media1.tenor.com/images/bdb36a5a556fa707614452889157edd9/tenor.gif?itemid=13327148',
        'https://media1.tenor.com/images/d3dca2dec335e5707e668b2f9813fde5/tenor.gif?itemid=12668677',
        'https://media1.tenor.com/images/b62f047f8ed11b832cb6c0d8ec30687b/tenor.gif?itemid=12668480',
        'https://media1.tenor.com/images/f2805f274471676c96aff2bc9fbedd70/tenor.gif?itemid=7552077',
        'https://media1.tenor.com/images/e9d7da26f8b2adbb8aa99cfd48c58c3e/tenor.gif?itemid=14721541',
        'https://media1.tenor.com/images/21f59590ecc99c0230f10a45de625b42/tenor.gif?itemid=15467452',
        'https://media1.tenor.com/images/78d3f21a608a4ff0c8a09ec12ffe763d/tenor.gif?itemid=16509980',
        'https://media1.tenor.com/images/af5cdc6a67f5c6d8b99d4bb3c0740bf4/tenor.gif?itemid=15793126',
        'https://media1.tenor.com/images/ff65c0f9b938f9594c822c6fc2690d4b/tenor.gif?itemid=16391919',
        'https://cdn.weeb.sh/images/HkQs_dXPZ.gif',
        'https://media.tenor.com/images/8176c865dca83a3ff4ce8fad32701da9/tenor.gif',
        'https://media.tenor.com/images/31e93bc3fa1281e7f5019fc5c51d68f7/tenor.gif',
        'https://media.tenor.com/images/fca2071ba725202f545e3f2b543f9546/tenor.gif',
        'https://media.tenor.com/images/8c7e6d62efa23ac3d9cbbbf7ba58159b/tenor.gif',
        'https://media.tenor.com/images/048a2d608e13a848666f8f2f71df202e/tenor.gif',
        'https://media1.tenor.com/images/eb610ebbbeebb16e6cd9e96bbfd27935/tenor.gif?itemid=17589019',
        'https://media1.tenor.com/images/0cbc377124f2f91d76277160b5803372/tenor.gif?itemid=17471604',
        'https://media1.tenor.com/images/43fce3d874179afb2d9d74a7402dcff4/tenor.gif?itemid=17264448',
        'https://media1.tenor.com/images/04251dfb3b7b7c9dec0c7c3c93d9ad14/tenor.gif?itemid=17700075',
        'https://media1.tenor.com/images/144b3ae133f2177abed835dc1c860f05/tenor.gif?itemid=14529554',
        'https://media1.tenor.com/images/0bcb441118d738b06c1b615172ed2baf/tenor.gif?itemid=16850696',
        'https://media1.tenor.com/images/aeb42019b0409b98aed663f35b613828/tenor.gif?itemid=14108949',
        'https://media1.tenor.com/images/868514ccca94037608a50a9bd60e69ff/tenor.gif?itemid=13400355',
        'https://media1.tenor.com/images/969f0f462e4b7350da543f0231ba94cb/tenor.gif?itemid=14246498',
        'https://media1.tenor.com/images/059e93bd8a1ed2eef5d36f93442242d4/tenor.gif?itemid=4968922',
        'https://media.tenor.com/images/ac5a0c47918dece5e69c1cc9fbb416a9/tenor.gif'
    ];
    var hugfinal = rando_imgshug[Math.floor(Math.random() * rando_imgshug.length)];
    if (!args1) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser à qui vous faites le calin**`);
        return message.channel.send(droit);  
    }
    const embedhug = new Discord.MessageEmbed()
        .setColor("#6f03fc")
        .setDescription(`:hugging: ${message.author.toString()} ` + ' fait un câlin à ' + `**${args1}**`)
        .setImage(hugfinal)
        .setTimestamp();
    message.channel.send(embedhug);
};