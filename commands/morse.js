exports.run = (client, message, args) => {
    var Discord = require("discord.js");
    //https://www.npmjs.com/package/morsify
    let alpha = " ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split(""),
		morse = "/,.-,-...,-.-.,-..,.,..-.,--.,....,..,.---,-.-,.-..,--,-.,---,.--.,--.-,.-.,...,-,..-,...-,.--,-..-,-.--,--..,.----,..---,...--,....-,.....,-....,--...,---..,----.,-----".split(","),
		text = args.join(" ").toUpperCase();
	while (text.includes("Ä") || text.includes("Ö") || text.includes("Ü")) {
		text = text.replace("Ä","AE").replace("Ö","OE").replace("Ü","UE");
	}
	if (text.startsWith(".") || text.startsWith("-")) {
		text = text.split(" ");
		let length = text.length;
		for (i = 0; i < length; i++) {
			text[i] = alpha[morse.indexOf(text[i])];
		}
		text = text.join("");
	} else {
		text = text.split("");
		let length = text.length;
		for (i = 0; i < length; i++) {
			text [i] = morse[alpha.indexOf(text[i])];
		}
		text = text.join(" ");
	}
	//return message.channel.send("```"+text+"```");
	const droit = new Discord.MessageEmbed()
        .setColor("#db25db")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .addField(":inbox_tray: Entrée :", "```"+message.content.split(" ").slice(1).join(" ")+"```")
        .addField(":outbox_tray: Sortie :", "```"+text+"```")
        .setTimestamp()
        .setFooter('© Darkbot 2020', 'https://cdn.discordapp.com/attachments/619408928727367686/715128336158031933/image.png');
    return message.channel.send(droit);
};