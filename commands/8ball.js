exports.run = (client, message) => {
    const args1 = message.content.split(" ").slice(1).join(" ");
    var Discord = require("discord.js");
    if (!args1){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser votre question**`);
        return message.channel.send(droit);
    }
    const has = (a, b) => {
        for (let c in a) {
            if (b.includes(a[c])) return c;
        } return false;
    };
    let badWords = ['ou '];
    isBad = has(badWords, message.content.toLowerCase());
    if (isBad) {
        const Embed = new Discord.MessageEmbed()
            .setTitle(`8Ball`)
            .setDescription(`Votre question: ${args1}\nRéponse: Je ne peux pas répondre à cette question.`)
            .setColor(`RANDOM`);
        message.channel.send(Embed);
    } else {
        let responses = [
            "Oui",
            "Non",
            "Définitivement",
            "Absolument",
            "Certainement",
            "Je pense que oui",
            "Il y a des chances que oui",
            "Il y a des chances que non",
            "Je pense que non"
        ];
        let response = responses[Math.floor(Math.random() * responses.length)];
        const Embed = new Discord.MessageEmbed()
            .setTitle(`8Ball`)
            .setDescription(`Votre question: ${args1}\nRéponse: ${response}`)
            .setColor(`RANDOM`);
        message.channel.send(Embed);
    }
};