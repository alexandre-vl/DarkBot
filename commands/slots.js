const slots = ['🍇', '🍊', '🍐', '🍒', '🍋', '🍌', '🔔'];
function wrapSlots(slot, add) {
  if (add) {
    if (slot + 1 > slots.length - 1) return slots[0];
    return slots[slot + 1];
  }
  if (slot - 1 < 0) return slots[slots.length - 1];
  return slots[slot - 1];
}
function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  );
}
exports.run = (client, message) => {
    var Discord = require("discord.js");
    const slotOne = Math.floor(Math.random() * slots.length);
	  const slotTwo = Math.floor(Math.random() * slots.length);
    const slotThree = Math.floor(Math.random() * slots.length);

    var moment = require('moment');
    const Enmap = require("enmap"); 
    const utg = new Enmap({name: "userperguild"});
    const pcooldown = utg.get(`${message.guild.id}_${message.author.id}`, "coldownslots");
    const timeDiff = (message.editedTimestamp || message.createdTimestamp) - pcooldown;
    const cooldown = 1000 * 60 * 5
    if (pcooldown === "none" || timeDiff >= cooldown) {
      const amount = between(5, 50);
      utg.set(`${message.guild.id}_${message.author.id}`, message.editedTimestamp || message.createdTimestamp, "coldownslots");
      var embed = new Discord.MessageEmbed()
      .setTitle('**[ 🎰 | SLOTS ]**')
      .setDescription("``᠁᠁᠁᠁᠁᠁᠁᠁᠁᠁᠁``" + 
      `\n\nᅠᅠ ⁢⁢⁢⁢⁢${wrapSlots(slotOne, false)} : ${wrapSlots(slotTwo, false)} : ${wrapSlots(slotThree, false)}
			\n ⁢⁢⁢⁢⁢ ⁢⁢⁢⁢⁢ ⁢⁢⁢⁢⁢**⋙** ${slots[slotOne]} : ${slots[slotTwo]} : ${slots[slotThree]} **⋘**
			\nᅠᅠ ⁢⁢⁢⁢⁢${wrapSlots(slotOne, true)} : ${wrapSlots(slotTwo, true)} : ${wrapSlots(slotThree, true)}`
			+ "\n\n``᠁᠁᠁᠁᠁᠁᠁᠁᠁᠁᠁``" + 
      `\n\n**[ ${slotOne === slotTwo && slotOne === slotThree ? '✅' : '❎'} | ${slotOne === slotTwo && slotOne === slotThree ? '``Gagné``' : '``Perdu``'} ]** ${slotOne === slotTwo && slotOne === slotThree ? '+ 8 xp' : '+ 0 xp'}`)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTimestamp();
    message.channel.send(embed);
    const exp = new Enmap({name: "points"});
    if(slotOne === slotTwo && slotOne === slotThree) exp.math(`${message.guild.id}-${message.author.id}`, "+", 8, "points")
    }else {
      const timeRequired = cooldown - timeDiff;
    return message.channel.send(`Merci de patienter ${moment.duration(timeRequired, 'ms').format('h[h] [et] m[m]')} avant d'utiliser cette commande.`);
    }
    
};