exports.run = (client, message) => {
    const moment = require('moment');
    moment.locale('fr');
    var Discord = require("discord.js");
    let region = {
        "brazil": ":flag_br: Bresil",
        "eu-central": ":flag_eu: Europe Centrale",
        "europe": ":flag_eu: Europe",
        "singapore": ":flag_sg: Singapour",
        "us-central": ":flag_us: Centre des États Unis",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: Est des États Unis",
        "us-south": ":flag_us: Sud des États Unis",
        "us-west": ":flag_us: Ouest des États Unis",
        "eu-west": ":flag_eu: Europe de l'Ouest",
        "vip-us-east": ":flag_us: VIP U.S. East",
        "london": ":flag_gb: Londre",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Russie",
        "southafrica": ":flag_za:  Afrique du Sud"
    };
    let Emojis = "";
    let EmojisAnimated = "";
    let EmojiCount = 0;
    let Animated = 0;
    function Emoji(id){
    	return client.emojis.cache.get(id).toString();
    }
    message.guild.emojis.cache.forEach(emoji=>{
    	if(emoji.animated){
    		Animated++;
    		EmojisAnimated+=Emoji(emoji.id);
    	}else{
    		EmojiCount++;
    		Emojis+=Emoji(emoji.id);
    	}
    });
    if(message.guild.emojis.cache.size === 0) Emojis="Aucun";
    let servericon = message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 });
    let totalmembers = message.guild.members.cache.filter(member => !member.user.bot).size + message.guild.members.cache.filter(member => member.user.bot).size;
    let totalservers = client.guilds.cache.size;
    let totalbots = message.guild.members.cache.filter(member => member.user.bot).size;
    let emojiList = message.guild.emojis.cache.map(e => e.toString()).join(" ");
    //let lasturl;
    //let theurl = message.channel.createInvite().then(invite => lasturl = invite.code).catch(console.error);
    let monembed = new Discord.MessageEmbed()
        .setColor("#fada25")
        .setTitle('``Statistiques``')
        //.setURL(lasturl)
        .setAuthor(message.guild.name, servericon)
        .setDescription(`**Voici les statistiques du serveur ${message.guild.name}**\n\nID : ${message.guild.id}\nOwner : ${message.guild.owner}`)
        .setDescription(`**Nom** : ${message.guild.name}\n**ID** : ${message.guild.id}\n**Owner** : ${message.guild.member(message.guild.owner) ? message.guild.owner.toString() : "Aucun"}\n**Total** : ${totalmembers}\n**Humains** : ${message.guild.members.cache.filter(member => !member.user.bot).size}\n**AFK 🟠** : ${message.guild.members.cache.filter(m => m.presence.status === 'idle').size}\n**En ligne 🟢** : ${message.guild.members.cache.filter(m => m.presence.status === 'online').size}\n**Hors-ligne ⚫** : ${message.guild.members.cache.filter(m => m.presence.status === 'offline').size}\n**Ne pas déranger 🔴** : ${message.guild.members.cache.filter(m => m.presence.status === 'dnd').size}\n**Région** : ${region[message.guild.region]}\n**Salons** : ${message.guild.channels.cache.filter(m => m.type === 'text').size+message.guild.channels.cache.filter(m => m.type === 'voice').size}\n**Date Création** : ${moment(message.guild.createdAt).format('DD/MM/YYYY HH:mm')}\n**Roles** : ${message.guild.roles.cache.size}\n**Emoji(s) count** : ${message.guild.emojis.cache.size}\n**Emojis** : ${EmojisAnimated}${Emojis}`)
        .setThumbnail('https://image.freepik.com/vecteurs-libre/analyse-boursiere_23-2148598449.jpg')
        .setTimestamp()
        .setFooter('Stats', 'https://cdn.discordapp.com/attachments/619408928727367686/715128336158031933/image.png');
        message.channel.send(monembed);
};