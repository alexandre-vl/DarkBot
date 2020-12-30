exports.run = (client, message, args, droit) => {
    var Discord = require("discord.js");
    const Enmap = require("enmap");
    const srv = new Enmap({name: "serveur"});
    const utg = new Enmap({name: "userperguild"});
    let categoryID = srv.get(`${message.guild.id}`, "catticket");
    let everyone = message.guild.roles.cache.find(r => r.name == "@everyone");
    if(srv.get(`${message.guild.id}`, 'ticketrolestaff') == "none"){
        const droit = new Discord.MessageEmbed()
                .setColor(client.config.red)
                .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez définir le role staff des tickets : /setticketrolestaff**`);
        return message.channel.send(droit);
    }
    let staff = message.guild.roles.cache.find(r => r.id == srv.get(`${message.guild.id}`, 'ticketrolestaff'));
    if(!staff){
        const droit = new Discord.MessageEmbed()
                .setColor(client.config.red)
                .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez définir le role staff des tickets valide : /setticketrolestaff**`);
        return message.channel.send(droit);
    }
    if(!args[0]){
        if(srv.get(`${message.guild.id}`, 'catticket') === "none"){
            const droit = new Discord.MessageEmbed()
                .setColor(client.config.red)
                .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez définir la catégorie des tickets : /setticketcat**`);
            return message.channel.send(droit);
        }
        else if(utg.get(`${message.guild.id}_${message.author.id}`, 'ticket') !== false){
            const droit = new Discord.MessageEmbed()
                .setColor(client.config.red)
                .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez n'ouvrir qu'un ticket à la fois, merci.**`);
            return message.channel.send(droit);
        }
        const creation = new Discord.MessageEmbed()
            .setColor("#fada25")
            .setAuthor(`Creation Ticket`)
            .setDescription(`:ticket: Votre ticket vient d'être créé : #ticket-${message.author.username}\n\nMerci de ne pas ouvrir de ticket inutile.\nNotre staff traitera votre requête au plus vite.`)
            .setImage('https://image.freepik.com/vecteurs-libre/illustration-poignee-main-deux-mains-sous-forme-ciel-etoile-espace_87494-75.jpg')
            .setFooter('DarkBot', 'https://cdn.discordapp.com/attachments/619408928727367686/715128336158031933/image.png')
            .setTimestamp();
        message.channel.send(creation);
        utg.set(`${message.guild.id}_${message.author.id}`, true, "ticket");
        let name = `ticket-${message.author.username}`
        message.guild.channels.create(name, {
            type: "text"
          }).then((createChan) => {
            createChan.setParent(categoryID).then((settedParent) => {
                const ticket = new Discord.MessageEmbed()
                    .setColor("#ff8d00")
                    .setAuthor(`Ticket de ${message.author.tag}`, message.guild.iconURL())
                    .setDescription(`💼 Expliquez votre demande aux staffs\n🎀 Merci d'être clair et respecteux\n🔒 Pour fermer le ticket : /close`)
                    .setImage('https://image.freepik.com/vecteurs-libre/prise-charge-composition-du-centre-appels-images-griffonnage-personnes-gadgets_1284-29966.jpg')
                    .setFooter('DarkBot', 'https://cdn.discordapp.com/attachments/619408928727367686/715128336158031933/image.png')
                    .setTimestamp();
                createChan.send(ticket);
                createChan.setTopic(message.author.id).catch(console.error);
                createChan.overwritePermissions([
                    {
                        id: message.author.id,
                        allow: ['VIEW_CHANNEL'],
                    },
                    {
                        id: everyone.id,
                        deny: ["VIEW_CHANNEL"],
                    },
                    {
                        id: staff.id,
                        allow: ["VIEW_CHANNEL"],
                    },
                ], 'Needed to change permissions'); 
            });
        });
    }else if(args[0] === "add"){
        let mentionned = message.mentions.users.first();
        let tuser = message.channel.topic;
        let channel = message.channel;
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            const droit = new Discord.MessageEmbed()
                .setColor(client.config.red)
                .setDescription("<a:uncheckmoove:740634696198914070> **Vous n'avez pas la permission de faire cette commande**");
            return message.channel.send(droit);
        }else if (!message.channel.name.startsWith('ticket-')) {
            const notTicket = new Discord.MessageEmbed()
                .setColor(client.config.red)
                .setDescription(`<a:uncheckmoove:740634696198914070> **Vous ne pouvez utiliser cette commande seulement dans un ticket**`);
            return message.channel.send(notTicket);
        }else if(!mentionned){
            const embed = new Discord.MessageEmbed()
                .setColor(client.config.red)
                .setDescription(`<a:uncheckmoove:740634696198914070> **Merci de mentionner un utilisateur**`);
            return message.channel.send(embed);
        }
        channel.overwritePermissions([
            {
                id: tuser,
                allow: ['VIEW_CHANNEL'],
            },
            {
                id: everyone.id,
                deny: ["VIEW_CHANNEL"],
            },
            {
                id: mentionned.id,
                allow: ['VIEW_CHANNEL'],//, 'READ_MESSAGE_HISTORY'
            },
        ], 'Needed to change permissions');
        const droit = new Discord.MessageEmbed()
            .setDescription('<a:checkmarkmoove:740634693078089730> Utilisateur ajouté.');
        message.channel.send(droit);
    }else if(args[0] === "remove"){
        let mentionned = message.mentions.users.first();
        let tuser = message.channel.topic;
        let channel = message.channel;

        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            const droit = new Discord.MessageEmbed()
                .setColor(client.config.red)
                .setDescription("<a:uncheckmoove:740634696198914070> **Vous n'avez pas la permission de faire cette commande**");
            return message.channel.send(droit);
        }else if (!message.channel.name.startsWith('ticket-')) {
            const notTicket = new Discord.MessageEmbed()
                .setColor(client.config.red)
                .setDescription(`<a:uncheckmoove:740634696198914070> **Vous ne pouvez utiliser cette commande seulement dans un ticket**`);
            return message.channel.send(notTicket);
        }else if(!mentionned){
            const embed = new Discord.MessageEmbed()
                .setColor(client.config.red)
                .setDescription(`<a:uncheckmoove:740634696198914070> **Merci de mentionner un utilisateur**`);
            return message.channel.send(embed);
        }
        channel.overwritePermissions([
            {
                id: tuser,
                allow: ['VIEW_CHANNEL'],
            },
            {
                id: everyone.id,
                deny: ["VIEW_CHANNEL"],
            },
            {
                id: mentionned.id,
                deny: ['VIEW_CHANNEL'],
            },
        ], 'Needed to change permissions');
        const droit = new Discord.MessageEmbed()
            .setDescription('<a:checkmarkmoove:740634693078089730> Utilisateur retiré.');
        message.channel.send(droit);
    }
};