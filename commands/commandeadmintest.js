// test provisoire de chunk pour le patch des tickets (me permet de reset mon enmap)
exports.run = (client, message) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    var Discord = require("discord.js");
    const Enmap = require("enmap");
    const utg = new Enmap({name: "userperguild"});
    const srv = new Enmap({name: "serveur"}); 
    srv.set(`${message.guild.id}`, "Membres","membercounttextmembers")
    srv.set(`${message.guild.id}`, "Bots","membercounttextbots")
};