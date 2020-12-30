exports.run = async (client, message, args, droit) => {
    const channel = message.mentions.channels.first();
    var Discord = require("discord.js");
    const ms = require("ms");
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        const embed = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription("<a:uncheckmoove:740634696198914070> **Vous n'avez pas la permission de faire cette commande**");
        return message.channel.send(embed);
    }else if (!args[0]){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription("<a:uncheckmoove:740634696198914070> **Usage : `/giveaway start #channel 1d 1 reward`**");
        message.channel.send(droit);
    }
    if(args[0] === "start"){
        // /giveaway start channel 2d 1 test
        client.giveawaysManager.start(channel, {
            time: ms(args[2]),
            prize: args.slice(4).join(" "),
            winnerCount: parseInt(args[3]),
            messages: {
                giveaway: "🎉 **GIVEAWAY** 🎉",
                giveawayEnded: "🎉 **GIVEAWAY FINI** 🎉",
                timeRemaining: "Temps restant : **{duration}** !",
                inviteToParticipate: "Réagis avec 🎉 pour participer !",
                winMessage: "Félicitations, {winners} ! Tu as gagné **{prize}** !",
                embedFooter: "Giveaways",
                noWinner: "Giveaway annulé, participations invalides.",
                hostedBy: "Créé par : {user}",
                winners: "gagnant(s)",
                endedAt: "Fin à",
                units: {
                    seconds: "secondes",
                    minutes: "minutes",
                    hours: "heures",
                    days: "jours",
                }
            }
        }).then((gData) => {
            //console.log(gData);
            const embed = new Discord.MessageEmbed()
                .setColor(client.config.green)
                .setDescription(`<a:checkmarkmoove:740634693078089730> Giveaway créé dans ${channel}`);
            message.channel.send(embed);
        });
    }else if(args[0] === "reroll"){
        let messageID = args[1];
        client.giveawaysManager.reroll(messageID, {
            messages: {
                congrat: ":tada: Nouveau gagnant(s) : {winners} ! Félicitations !",
                error: "Pas de participation valide, aucun gagnant n'a pu être choisi !"
            }
        }).catch((err) => {
            message.channel.send("Aucun giveaway trouvé pour "+messageID+", merci de vérifier puis réessayer.");
        });
    }else if(args[0] === "edit"){
        let messageID = args[1];
        client.giveawaysManager.edit(messageID, {
            newWinnerCount: args[2],
            newPrize: args[3],
            addTime: 0
        }).then(() => {
            message.channel.send("Bravo ! Le giveaway a été édité en "+(manager.updateCountdownEvery/1000)+" secondes.");
        }).catch((err) => {
            message.channel.send("Aucun giveaway trouvé pour "+messageID+", merci de vérifier puis réessayer.");
        });
    }
};