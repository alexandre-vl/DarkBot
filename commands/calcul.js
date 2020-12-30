exports.run = (client, message) => {
    var Discord = require("discord.js");
    const math = require('mathjs');
        const args = message.content.split(" ").slice(1);
        let resp;
        let stats;
        try {
            stats = true;
            resp = math.evaluate(args.join(" "));
        } catch (e) {
            stats = false;
            const droit = new Discord.MessageEmbed()
                .setColor(client.config.red)
                .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser un calcul correct**`);
            return message.channel.send(droit);
        }
        if(!args.join(' ')){
            const droit = new Discord.MessageEmbed()
                .setColor(client.config.red)
                .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser un calcul**`);
            return message.channel.send(droit);
        }
        const embed = new Discord.MessageEmbed()
            .setColor(0x808080)
            .setTitle('Calculatrice')
            .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
            .addField('Réponse', `\`\`\`css\n${resp}\`\`\``);
        message.channel.send(embed);
};