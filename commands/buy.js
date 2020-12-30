exports.run = (client, message, args) => {
    var Discord = require("discord.js");
    const Enmap = require("enmap"); 
    const exp = new Enmap({name: "points"});
    const utg = new Enmap({name: "userperguild"});
    var colors = ["blue", "green", "red", "yellow", "pink", "purple", "black", "gold", "aqua", "gray", "white"];
    let xpofuser = exp.get(`${message.guild.id}-${message.author.id}`,"points");
    if(!args[0]){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser <1|2|3> comme argument**`);
        return message.channel.send(droit);
    }else if(args[0] === '1'){
        let color;
        var n = colors.includes(args[1]);
        if(!args[1] || n === false){
            const droit = new Discord.MessageEmbed()
                .setColor(client.config.red)
                .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser une couleur \n 
                <blue|green|red|yellow|pink|purple|black|gold|aqua|gray|white>**`);
            return message.channel.send(droit);
        }else if(xpofuser < 500){
            const droit = new Discord.MessageEmbed()
                .setColor(client.config.red)
                .setDescription(`<a:uncheckmoove:740634696198914070> **Vous n'avez pas assez d'xp pour acheter cela**`);
            return message.channel.send(droit);
        }
        if(args[1] === 'blue') color = "#302de0";
        if(args[1] === 'green') color = "#18cc2d";
        if(args[1] === 'red') color = "#cc1818";
        if(args[1] === 'yellow') color = "#d9e82e";
        if(args[1] === 'pink') color = "#ed0ecf";
        if(args[1] === 'purple') color = "#940eed";
        if(args[1] === 'black') color = "#000000";
        if(args[1] === 'gold') color = "#ffb300";
        if(args[1] === 'aqua') color = "#02c2f2";
        if(args[1] === 'gray') color = "#545a5c";
        if(args[1] === 'white') color = "#ffffff";
        exp.math(`${message.guild.id}-${message.author.id}`, "-", 500, "points");
        utg.set(`${message.guild.id}_${message.author.id}`, color, "colorank");
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.green)
            .setDescription("<a:checkmarkmoove:740634693078089730> Votre couleur de /rank a été définie sur ``" + args[1] + "``");
        message.channel.send(droit);
    }else if(args[0] === '2'){
        if(xpofuser < 1000){
            const droit = new Discord.MessageEmbed()
                .setColor(client.config.red)
                .setDescription(`<a:uncheckmoove:740634696198914070> **Vous n'avez pas assez d'xp pour acheter cela**`);
            return message.channel.send(droit);
        }
        exp.math(`${message.guild.id}-${message.author.id}`, "-", 1000, "points");
        utg.set(`${message.guild.id}_${message.author.id}`, true, "littlepic");
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.green)
            .setDescription("<a:checkmarkmoove:740634693078089730> Vous possédez désormais l'icône du /rank");
        message.channel.send(droit);
    }else if(args[0] === '3'){
        if(xpofuser < 2500){
            const droit = new Discord.MessageEmbed()
                .setColor(client.config.red)
                .setDescription(`<a:uncheckmoove:740634696198914070> **Vous n'avez pas assez d'xp pour acheter cela**`);
            return message.channel.send(droit);
        }
        exp.math(`${message.guild.id}-${message.author.id}`, "-", 2500, "points");
        utg.set(`${message.guild.id}_${message.author.id}`, true, "largepic");
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.green)
            .setDescription("<a:checkmarkmoove:740634693078089730> Vous possédez désormais l'image du /rank");
        message.channel.send(droit);
    }
};