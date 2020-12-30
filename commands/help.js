exports.run = (client, message) => {
  var Discord = require("discord.js");
  const help = new Discord.MessageEmbed()
  .setTitle('Liste des commandes')
  .setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
  .addField("⚒ Modération :","`ban`"+", "+"`tempban`"+", "+"`unban`"+", "+"`kick`"+", "+"`mute`"+", "+"`tempmute`"+", "+"`unmute`"+", "+"`warn`"+", "+"`listwarn`"+", "+"`purgewarn`"+", "+"`clear`")
  .addField("🎊 Fun :","`météo`"+", "+"`meme`"+", "+"`ascii`"+", "+"`calcul`"+", "+"`8ball`"+", "+"`mcserveur`"+", "+"`osustats`"+", "+"`giveaway`"+", "+"`mcskin`"+", "+"`mchead`"+", "+"`mcicon`"+", "+"`bigtext`"+", "+"`morse`"+", "+"`pendu`"+", "+"`morpion`"+", "+"`dactylo`"+", "+"`gunfight`"+", "+"`textflip`"+", "+"`coinflip`"+", "+"`slots`")
  .addField("🖼 Images :","`invert`"+", "+"`triggered`"+", "+"`trash`"+" ,"+"`beautiful`"+", "+"`delete`"+", "+"`rip`"+", "+"`wanted`")
  .addField("💎 Levels :","`rank`"+", "+"`leaderboard`"+", "+"`cleanup`"+", "+"`shop`"+", "+"`buy`"+", "+"`daily`")
  .addField("🎈 Social :","`hug`"+", "+"`kiss`"+", "+"`cheekkiss`"+", "+"`pat`"+", "+"`cry`"+", "+"`punch`"+", "+"`pout`"+", "+"`blush`"+", "+"`smile`"+", "+"`slap`"+", "+"`shoot`"+", "+"`cookie`")
  .addField("📌 Utile :","`embed`"+", "+"`sugg`"+", "+"`sond`"+", "+"`timer`"+", "+"`say`"+", "+"`infos`"+", "+"`stats`"+", "+"`todolist`"+", "+"`shorturl`"+", "+"`report`"+", "+"`dm`"+", "+"`qr`")
  .addField("🎵 Musique :","`play`"+", "+"`stop`"+", "+"`loop`"+", "+"`queue`"+", "+"`remove`"+", "+"`resume`"+", "+"`skip`"+", "+"`np`"+", "+"`lyrics`"+", "+"`pause`")
  .addField("🎫 Tickets :","`ticket`"+", "+"`close`")
  .addField("🔩 Configuration :","`disable`"+", "+"`reset`"+", "+"`setrolemute`"+", "+"`setantispam`"+", "+"`setreact`"+", "+"`setautorole`"+", "+"`setsuggchannel`"+", "+"`setwelcomechannel`"+", "+"`setleavechannel`"+", "+"`setticketcat`"+", "+"`setimgwelcomechannel`"+", "+"`setimgleavechannel`"+", "+"`setantibadword`"+", "+"`setantipub`"+", "+"`setadchannel`"+", "+"`setreportchannel`"+", "+"`setmodlogschannel`"+", "+"`setticketrolestaff`")
  .addField("👾 Bot :","`invite`"+", "+"`ping`"+", "+"`support`"+", "+"`vote`"+", "+"`site`")
  .setTimestamp()
  .setFooter('© Darkbot 2020', 'https://cdn.discordapp.com/attachments/619408928727367686/715128336158031933/image.png');
    message.channel.send(help);
};