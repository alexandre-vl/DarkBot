module.exports = async (client, member) => {
    var Discord = require("discord.js");
    const Canvas = require('canvas');
    const Enmap = require("enmap");
    const srv = new Enmap({name: "serveur"}); 
  

    // Member count
    let all = member.guild.channels.cache.get(srv.get(`${member.guild.id}`, "membercountchannelall"))
    let bots = member.guild.channels.cache.get(srv.get(`${member.guild.id}`, "membercountchannelbots"))
    let members = member.guild.channels.cache.get(srv.get(`${member.guild.id}`, "membercountchannelmembers"))

    let nbots = member.guild.members.cache.filter(mem => mem.user.bot === true).size
    let nall = member.guild.memberCount
    let nmembers = 0

    let nameall = `${all.name.split(":")[0]}: ${nall}`;
    let namebots = `${bots.name.split(":")[0]}: ${nbots}`;
    let namemembers = `${members.name.split(":")[0]}: ${nmembers}`;

    if(srv.get(`${member.guild.id}`, "membercount") === "on"){
        all.setName(nameall);
        bots.setName(namebots);
        members.setName(namemembers);
    }
        
    /*let emoji = srv.get(`${member.guild.id}`, "membercountemoji");
    let text = srv.get(`${member.guild.id}`, "membercounttext");
    let name = `${emoji} ${text} ⋙ ${member.guild.memberCount}`;
    if(srv.get(`${member.guild.id}`, "membercountchannel") !== "none"){
        let membercountchannel = member.guild.channels.cache.get(srv.get(`${member.guild.id}`, "membercountchannel"));
        membercountchannel.setName(name);
    }*/
  
    // Système de logs
    if(srv.get(`${member.guild.id}`, "statlogs") === 'on'){
        let log = member.guild.channels.cache.get(srv.get(`${member.guild.id}`, "logschannel").id);
        const embed = new Discord.MessageEmbed()
        .setTitle('Membre partant')
        .addField('Membre :', `\`${member.user.tag}\``)
        .setTimestamp()
        .setFooter('Logs', 'https://cdn.discordapp.com/attachments/619408928727367686/715128336158031933/image.png');
        log.send(embed);
    }
    // Préparation canvas image
    const applyText = (canvas, text) => {
        const ctx = canvas.getContext('2d');
        let fontSize = 70;
        do {
            ctx.font = `${fontSize -= 10}px sans-serif`;
        } while (ctx.measureText(text).width > canvas.width - 300);
        return ctx.font;
    };
    // Système messages de départ
    if (srv.get(`${member.guild.id}`, "statleave") === 'on'){
        let totalmembers = member.guild.members.cache.filter(member => !member.user.bot).size + member.guild.members.cache.filter(member => member.user.bot).size;
        let channel = member.guild.channels.cache.get(srv.get(`${member.guild.id}`, "leavechannel").id);
        if(!channel){
            const droit = new Discord.MessageEmbed()
                .setColor("#E74C3C")
                .setDescription(`<a:uncheckmoove:740634696198914070> **Veulliez définir le channel de départ : /setleavechannel <channel mention>**`);
            return member.guild.owner.send(droit);
        }
            const droit = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setAuthor('Aurevoir !')
                .setDescription(`Aurevoir ${member}` + '\n🎀 Nous sommes maintenant `' + totalmembers + '`');
            channel.send(droit);
    } 
    // Système images de départ
    if(srv.get(`${member.guild.id}`, "statimgleave") === 'on'){
        let channel = member.guild.channels.cache.get(srv.get(`${member.guild.id}`, "imgleavechannel").id);
        if(!channel) {
            const droit = new Discord.MessageEmbed()
                .setColor("#E74C3C")
                .setDescription(`<a:uncheckmoove:740634696198914070> **Veulliez définir le channel de bienveue : /setimgleavechannel <channel mention>**`);
            return member.guild.owner.send(droit);
        }
        const canvas = Canvas.createCanvas(700, 250);
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/619408928727367686/743810332920774756/unnamed.png');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = '#0552C1';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        const name = member.user.username.length > 30 ? member.user.username.substring(0, 11) + '...': member.user.username;
        ctx.font = applyText(canvas, `${member.displayName}`);
        ctx.fillStyle = '#ffffff';
        ctx.fillText(name, canvas.width / 2.5, canvas.height / 1.8);

        ctx.font = ('30px sans-serif');
        ctx.fillStyle = '#ffffff';
        ctx.fillText(member.guild.memberCount+' membres', canvas.width / 1.4, canvas.height / 1.15);

        ctx.beginPath();
        ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();

        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg'}));
        ctx.drawImage(avatar, 25, 25, 200, 200);
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'leave-image.png');
        const imgwelcome = new Discord.MessageEmbed()
            .setTitle(`**Aurevoir...**`)
            .attachFiles(attachment)
            .setImage('attachment://welcome-image.png')
            .setTimestamp();
        channel.send(imgwelcome);
    }

}