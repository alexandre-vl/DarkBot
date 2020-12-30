module.exports = (client, message) => {
  const Discord = require("discord.js");
  const Enmap = require("enmap");
  const LIMIT = 5;
  const TIME = 30000;
  const DIFF = 3000;  
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return;

  // Définir args et les commandes
  const prefix = client.config.prefix;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  const droit = "<a:uncheckmoove:740634696198914070> **Vous n'avez pas la permission de faire cela !**";

  const has= (a,b)=> {
    for(let c in a) {
        if(b.includes(a[c])) return c;
    } return false;
  };


    
    if(message.content.includes('@DarkBot#5127') || message.content.includes('@DarkBot') || message.content.includes('<@721046486766452826>')){
        const droit = new Discord.MessageEmbed()
            .setColor('#5f5cff')
            .setFooter('© Darkbot 2020', 'https://cdn.discordapp.com/attachments/619408928727367686/715128336158031933/image.png')
            .setDescription('<a:checkmarkmoove:740634693078089730> Mon nom est DarkBot. Fais ``/help`` pour obtenir la liste des commandes.');
        message.channel.send(droit);
    }

  // Infos serveur
  const srv = new Enmap({name: "serveur"}); 

  srv.ensure(`${message.guild.id}`, {
        guild: message.guild.id,
        rolemute: "none",
        catticket: "none",
        statimgwelc: "off",
        imgwelcchannel: "none",
        statimgleave : "off",
        imgleavechannel : "none",
        statwelc : "off",
        welcchannel : "none",
        statleave : "off",
        leavechannel : "none",
        autorole : "none",
        statautorole : "off",
        suggchannel: "none",
        statbadword: "off",
        statspam: "off",
        statreact: "off",
        logschannel: "none",
        statlogs: "off",
        antipub: "on",
        adchannel: "none",
        reportchannel: "none",
        modlogschannel: "none",
        ticketchannel: "none",
        membercounttextall: "Totale",
        membercounttextbots: "Bots",
        membercounttextmembers: "Membres",
        membercount: "off",
        membercountchannelall: "none",
        membercountchannelbots: "none",
        membercountchannelmembers: "none",
        membercountcat: "none",
        statlvl: "on",
        ticketrolestaff: "none",
  });


      // Anti-pub
      if(srv.get(`${message.guild.id}`, "antipub") === "on"){
        if(!message.member.hasPermission("MANAGE_MESSAGES")){
          if(message.channel.id !== srv.get(`${message.guild.id}`, "adchannel").id){
            if(message.content.includes('discord.gg/') || message.content.includes('discordapp.com/invite/')) {
              message.delete();
              const droit = new Discord.MessageEmbed()
                  .setDescription(`<a:checkmarkmoove:740634693078089730> Désolé mais nous n'acceptons pas la pub ici ${message.author.username}`);
              return message.channel.send(droit);
            }
          }
        }

      }
  
  // Author
  const ath = new Enmap({name: "author"});
  ath.ensure(`${message.author.id}`, {
      author: message.author.id,
      todolist: "none",
  });
  // User/Guild
  const utg = new Enmap({name: "userperguild"});
  utg.ensure(`${message.guild.id}_${message.author.id}`, {
      user: message.author.id,
      guild: message.guild.id,
      msgcount: 0,
      ticket: false,
      mute: false,
      pdaily: "none",
      coldownslots: "none",
      colorank: "none",
      littlepic: false,
      largepic: false,

      coins: 0,
      bois: 0,
      pierre: 0,
      métal: 0,
      coeur_zombie: 0,
      coffre_normal: 0,
      coffre_special: 0,
      coffre_legendaire: 0,
      xp: 0,
      energie: 0,


  });

  let thenewnumberofmsg = utg.get(`${message.guild.id}_${message.author.id}`, "msgcount") + 1;
  utg.set(`${message.guild.id}_${message.author.id}`, thenewnumberofmsg, "msgcount");
  // Warns
  const wrn = new Enmap({name: "warns"}); 
  wrn.ensure(`${message.guild.id}_${message.author.id}`, {
      user: message.author.id,
      guild: message.guild.id,
      warns: 0,
      reasons: [],
  });
  // XP
  if(srv.get(`${message.guild.id}`, "statlvl") === "on"){
    const exp = new Enmap({name: "points"}); 
    exp.ensure(`${message.guild.id}-${message.author.id}`, {
        user: message.author.id,
        guild: message.guild.id,
        points: 0,
        level: 0,
        lastSeen: new Date()
      });
      const xp = Math.floor(Math.random() * 7 + 1); 
      exp.math(`${message.guild.id}-${message.author.id}`, "+", xp, "points");
      const curLvl = Math.floor(0.1 * Math.sqrt(exp.get(`${message.guild.id}-${message.author.id}`, "points")));

        if (exp.get(`${message.guild.id}-${message.author.id}`, "level") < curLvl) {
            message
            .reply(`Vous venez de passer lvl **${curLvl}** !`)
            .then(msg => {
                msg.delete({ timeout: 15000});
            });
            exp.set(`${message.guild.id}-${message.author.id}`, curLvl, "level");
            exp.set(`${message.guild.id}-${message.author.id}`, new Date(), "lastSeen");
        }
  }

  // AntiBadWord
  if(srv.get(`${message.guild.id}`, "statbadword") === "on"){
    if(!message.member.hasPermission('MANAGE_MESSAGES')){
        let badWords= ['fuck ', 'pute ', 'salope ', 'enculé '];
        isBad = has(badWords, message.content.toLowerCase()); //=== à patch (chunk)
        if(isBad) {
            message.delete();
            message.channel.send("**Merci de garder un langage respectueux** " + message.author.toString());
            //message.author.send(`Le mot **${badWords[isBad].toUpperCase()}** est interdit !`);
        }
    }
  }
  
  
  // Ignorer les messages n'ayant pas le préfixe
  if (message.content.indexOf(client.config.prefix) !== 0) return;
  // chercher la commande
  const cmd = client.commands.get(command);
  // Si la commande n'existe pas, abandonner 
  if (!cmd) return;
  // Si elle existe, lancer la commande
  try {
    cmd.run(client, message, args);
  } catch (error) {
    console.log(error);
  }
  
  
  
  // Antispam
  /*const usersMap = new Map();
  if(srv.get(`${message.guild.id}`, "statspam") === "on"){
    if(usersMap.has(message.author.id)) {
        const userData = usersMap.get(message.author.id);
        const { lastMessage, timer } = userData;
        const difference = message.createdTimestamp - lastMessage.createdTimestamp;
        let msgCount = userData.msgCount;
        if(difference > DIFF) {
          clearTimeout(timer);
          userData.msgCount = 1;
          userData.lastMessage = message;
          userData.timer = setTimeout(() => {
            usersMap.delete(message.author.id);
          }, TIME);
          usersMap.set(message.author.id, userData);
        }
        else {
          ++msgCount;
          if(parseInt(msgCount) === LIMIT) {
            let role = bdd[message.guild.id+"rolemute"];
            if(!role) {
                const droit = new Discord.MessageEmbed()
                    .setColor("#E74C3C")
                    .setDescription(`<a:uncheckmoove:740634696198914070> **Veulliez définir le role de mute : ${prefix}setrolemute <role mention>**`);
                return message.channel.send(droit);
            }
                message.member.roles.add(role);
                const droit = new Discord.MessageEmbed()
                    .setDescription(`<a:checkmarkmoove:740634693078089730> ${message.author.toString()} à été mute pour spam (30s)`);
                message.channel.send(droit);
            setTimeout(() => {
                    message.member.roles.remove(role);
                    const droit = new Discord.MessageEmbed()
                        .setDescription(`<a:checkmarkmoove:740634693078089730> ${message.author.toString()} à été unmute.`);
                    return message.channel.send(droit);
            }, TIME);
          } else {
            userData.msgCount = msgCount;
            usersMap.set(message.author.id, userData);
          }
        }
      }
      else {
        let fn = setTimeout(() => {
          usersMap.delete(message.author.id);
        }, TIME);
        usersMap.set(message.author.id, {
          msgCount: 1,
          lastMessage: message,
          timer: fn
        });
      }
  }*/
  
};