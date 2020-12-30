exports.run = (client, message) => {
    var Discord = require("discord.js");
    let serverip = message.content.split(' ').splice(1).join(' ');
	let serverip_fromfield = serverip.substring(0,serverip.indexOf(":"));
	let serverport_fromfield = serverip.split(':')[1];
	if (!serverip) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Cette ip est incorrecte**`);
        return message.channel.send(droit);
	} else {			
		if (!serverip.includes(":")) {
			serverip_final = serverip;
		} else {
			serverip_final = serverip_fromfield;
		}
		if (!serverport_fromfield) {
			var serverport_final = "25565";
		} else {
			var serverport_final = serverport_fromfield;
		}				
		const embed = new Discord.MessageEmbed()
	        .setTitle("Statut Serveur Minecraft")
	        .setColor("#21AE3B")
	        .setImage("http://status.mclive.eu/Server/" + serverip_final + "/" + serverport_final + "/banner.png")
	        .setTimestamp()
	        .addField("Serveur IP",serverip);
        message.channel.send(embed);
    }
};