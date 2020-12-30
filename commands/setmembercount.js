exports.run = async(client, message) => {
    var Discord = require("discord.js");
    const args = message.content.slice(client.config.prefix.length).split(/ +/);
    const Enmap = require("enmap"); 
    const srv = new Enmap({name: "serveur"}); 
    let bots = message.guild.members.cache.filter(mem => mem.user.bot === true).size
    let all = message.guild.memberCount
    let members = all-bots
    let everyone = message.guild.roles.cache.find(r => r.name == "@everyone");
    let category

    if(!message.member.hasPermission("ADMINISTRATOR")) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription("<a:uncheckmoove:740634696198914070> **Vous n'avez pas la permission de faire cette commande**");
        return message.channel.send(droit);
    }
    if(!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Je n'ai pas la permission de faire cela**`);
        return message.channel.send(droit);
    }
    if(!args[1]){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veulliez préciser all/bots/members**`);
        return message.channel.send(droit);   
    }

    if(args[1] === "on"){
        
        if(srv.get(`${message.guild.id}` ,"membercount") === "on"){
            const droit = new Discord.MessageEmbed()
                .setColor(client.config.red)
                .setDescription(`<a:uncheckmoove:740634696198914070> **Le compteur de membres est déjà activé**`);
            return message.channel.send(droit); 
        }
        srv.set(`${message.guild.id}`, "on", "membercount")
        message.guild.channels.create("Serveur Stats", {
            type : "category"
        }).then((createChan) => {
            srv.set(`${message.guild.id}`, createChan.id,"membercountcat") 
            createChan.overwritePermissions([
                {
                    id: everyone.id,
                    deny: ["CONNECT"],
                },
            ], 'Needed to change permissions'); 
            category = createChan.id
            createChan.setPosition(1)
        })
        console.log(srv.get(`${message.guild.id}`, "membercountcat") )
        message.guild.channels.create(srv.get(`${message.guild.id}`, "membercounttextall")+": "+all, {
            type: "voice"
        }).then((createChan) => {
            createChan.setParent(category)
            srv.set(`${message.guild.id}`, createChan.id,"membercountchannelall")
            console.log(srv.get(`${message.guild.id}`,"membercountchannelall"))
            createChan.overwritePermissions([
                {
                    id: everyone.id,
                    deny: ["CONNECT"],
                },
            ], 'Needed to change permissions'); 
        })
        
        message.guild.channels.create(srv.get(`${message.guild.id}`, "membercounttextbots")+": "+bots, {
            type: "voice"
        }).then((createChan) => {
            createChan.setParent(category)
            srv.set(`${message.guild.id}`, createChan.id,"membercountchannelbots")
            console.log(srv.get(`${message.guild.id}`, "membercountchannelbots"))
            createChan.overwritePermissions([
                {
                    id: everyone.id,
                    deny: ["CONNECT"],
                },
            ], 'Needed to change permissions'); 
        })
        
        message.guild.channels.create(srv.get(`${message.guild.id}`, "membercounttextmembers")+": "+members, {
            type: "voice"
        }).then((createChan) => {
            createChan.setParent(category)
            srv.set(`${message.guild.id}`, createChan.id,"membercountchannelmembers")
            console.log(srv.get(`${message.guild.id}`, "membercountchannelmembers"))
            createChan.overwritePermissions([
                {
                    id: everyone.id,
                    deny: ["CONNECT"],
                },
            ], 'Needed to change permissions'); 
        })
        
        
          
    }else if(args[1] === "off"){
        if(srv.get(`${message.guild.id}` ,"membercount") === "off"){
            const droit = new Discord.MessageEmbed()
                .setColor(client.config.red)
                .setDescription(`<a:uncheckmoove:740634696198914070> **Le compteur de membres est déjà désactivé**`);
            return message.channel.send(droit); 
        }
        srv.set(`${message.guild.id}`, "off","membercount")
        const all = message.guild.channels.cache.get(srv.get(`${message.guild.id}`, "membercountchannelall"));
        const bots = message.guild.channels.cache.get(srv.get(`${message.guild.id}`, "membercountchannelbots"));
        const members = message.guild.channels.cache.get(srv.get(`${message.guild.id}`, "membercountchannelmembers"));
        const cat = message.guild.channels.cache.get(srv.get(`${message.guild.id}`, "membercountcat"));
        console.log(all)
        all.delete();
        members.delete();
        bots.delete();
        cat.delete();
    }else{
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veulliez préciser on/off**`);
        return message.channel.send(droit);  
    }

}