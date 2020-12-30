function toEmoji(msg) {
    let request = parseMessage(msg);
    if (request.message && request.message.length > 0) {
        return emojifyMessage(request);
    }
}
const numberMap = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
function parseMessage(msg) {
    let msgArray = msg.toString().split(' ');
    let request = {
        message: '',
        spaceSplitString: '  '
    };
    let messageStart;
    messageStart = 1;
    request.message = msgArray.slice(messageStart).join(' ');
    return request;
}
function emojifyMessage(msgObj) {
    let emojifiedMessage = '';
    if (!/\s/.test(msgObj.spaceSplitString)) {
        emojifiedMessage += msgObj.spaceSplitString;
    }
    let message = msgObj.message.toLowerCase().split('');
    for (let i = 0; i < message.length; i++) {
        let char = message[i];
        if (/\s/.test(char)) { // white space
            emojifiedMessage += msgObj.spaceSplitString;
        }
        else if (/\d/.test(char)) { // digit
            emojifiedMessage += ':' + numberMap[parseInt(char)] + ':';
        }
        else if (/\w/.test(char)) { // word character
            emojifiedMessage += ':regional_indicator_' + char + ':';
        }
        else if(/\?/.test(char)) { // ?
            emojifiedMessage += ':question:';
        }
        else if(/\!/.test(char)) { // !
            emojifiedMessage += ':exclamation:';
        }
        else { // symbol and emoji case
            emojifiedMessage += char;
        }
    }
    if (!/\s/.test(msgObj.spaceSplitString)) { // append spaceString at the end of message
        emojifiedMessage += msgObj.spaceSplitString;
    }
    return emojifiedMessage;
}
exports.run = (client, message, droit) => {
    const args1 = message.content.split(" ").slice(1).join(" ");
    var Discord = require("discord.js");
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription("<a:uncheckmoove:740634696198914070> **Vous n'avez pas la permission de faire cette commande**");
        return message.channel.send(droit);
    }
    //var msg = message.content.split(" ").slice(1).join(" ").toLowerCase();
    //msg = msg.replace("0", ":zero:");
    if(args1 === '' || args1 === ' ' || args1 === '  ' || args1 === '   '){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Vous ne pouvez pas envoyer un message vide.**`);
        return message.channel.send(droit);
    }
    message.channel.send(toEmoji(message.content));
    message.delete();
};