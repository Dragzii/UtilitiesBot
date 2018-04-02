const discord = require('discord.js')
const client = new discord.Client;
const Settings = require("./settings.js");

client.on('ready', () => {
	console.log("me me big boy");
})
require("./extenders/Message");
require("./extenders/MessageEmbed");
require("./extenders/TextChannel");
require("./extenders/User");
// require("./extenders/GuildMember");

// Initialize client, attach config to config.json, set command directory to /commands, and set events directory to /events
// fetchAllMembers: true, disableEveryone: true, disabledEvents: ["USER_UPDATE", "TYPING_START"]
const client = new Client({ 
    ...config.clientOptions,
    config,
    guild: config.guild
 });

 client.loadCommands(config.dirs.commands).loadEvents(config.dirs.events);

// Start client with token found in config
client.start(config.credentials.token);
