const words = ['fire', 'shoot', 'bang', 'boom'];
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
async function verify(channel, user) {
    const filter = res => {
        const value = res.content.toLowerCase();
        return (user ? res.author.id === user.id : true);
    };
    const verify = await channel.awaitMessages(filter, { max: 1, time: 30000 });
    if (!verify.size) return 0;
    const choice = verify.first().content.toLowerCase();
    if (choice === "oui") return true;
    if (choice === "non") return false;
    return false;
}
exports.run = async(client, message) => {
    var Discord = require("discord.js");
    let opponent = message.mentions.members.first();
    if(!opponent) return message.reply('Merci de mentionner un adversaire.');
    try {
        await message.channel.send(`${opponent}, veux tu relever le challenge (oui|non) ?`);
        const verification = await verify(message.channel, opponent);
        if (!verification) {
            return message.reply('Il semble avoir décliné ton offre ...');
        }
        await message.channel.send('Préparez-vous ...');
        await delay(randomRange(1000, 30000));
        const word = words[Math.floor(Math.random() * words.length)];
        await message.channel.send(`Tapez \`${word.toUpperCase()}\` maintenant !`);
        const filter = res => [opponent.id, message.author.id].includes(res.author.id) && res.content.toLowerCase() === word;
        const winner = await message.channel.awaitMessages(filter, { max: 1, time: 30000 });
        if (!winner.size) return message.channel.send('Hmmm ... Aucun de vous deux n\'a décroché la victoire ...');
        return message.channel.send(`Le gagnant est ... ${winner.first().author} !!! Félicitations !`);
    } catch (err) {
        throw err;
    }
};