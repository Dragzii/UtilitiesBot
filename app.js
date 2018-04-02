const discord = require('discord.js')
const client = new discord.Client;
const Settings = require("./settings.js");

client.on('ready', () => {
	console.log("me me big boy");
})
client.on('message', message => {
	if (message.content === "!ping") {
		message.reply("pong!");
	}
})

client.login(Settings.token);
