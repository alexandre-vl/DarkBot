exports.run = (client, message, args, droit) => {
    var Discord = require("discord.js");
    const authorize = ["614052096857341952","550997709083901996"];
    if (!authorize.includes(message.author.id)) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription("<a:uncheckmoove:740634696198914070> **Vous n'avez pas la permission de faire cette commande**");
        return message.channel.send(droit);
    }
    if(!args || args.length < 1) return message.reply("Veuillez préciser le nom de la commande");
  const commandName = args[0];
  // Check if the command exists and is valid
  if(!client.commands.has(commandName)) {
    return message.reply("Cette commande n'existe pas");
  }
  // the path is relative to the *current folder*, so just ./filename.js
  delete require.cache[require.resolve(`./${commandName}.js`)];
  // We also need to delete and reload the command from the client.commands Enmap
  client.commands.delete(commandName);
  const props = require(`./${commandName}.js`);
  client.commands.set(commandName, props);
  message.reply("La commande ``"+commandName+"`` a bien été relancée.");
};