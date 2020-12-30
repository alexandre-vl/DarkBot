const { Client, Collection, Discord } = require("discord.js");
const Enmap = require("enmap");
const recursive = require("recursive-readdir");

const fs = require("fs");
const client = new Client({ disableMentions: "everyone" });
const config = require("./config.json");
const { join } = require("path");
client.config = config;
let fileNumber = 0;
client.commands = new Enmap();

client.queue = new Map();
client.vote = new Map();

const TicTacToe = require('discord-tictactoe');
new TicTacToe({
  language: 'fr',
  command: `${config.prefix}morpion`
}, client);
const { GiveawaysManager } = require("discord-giveaways");
const manager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 10000,
    default: {
        botsCanWin: false,
        exemptPermissions: [ "ADMINISTRATOR" ],
        embedColor: "#d6117e",
        reaction: "🎉"
    }
});
client.giveawaysManager = manager;
var moment = require("moment");
var momentDurationFormatSetup = require("moment-duration-format");
momentDurationFormatSetup(moment);

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});


client.login(config.token);