const Discord = require('discord.js');
const bot = new Discord.Client();
const Chance = require('chance');
const chance = new Chance();

const config = require('./config.json');

bot.once('ready', () => {
	console.log('Ready to annoy the fuck out of people!');
});

bot.on('message', message => {
	if (message.cleanContent.includes('@someone')) {
		let trulyClean = message.cleanContent.replace(/^.*?\*\*@someone\*\*/ig, '');
		let rx = /.*?\*\*\*\((.*?)\)\*\*\*.*?$/g;
		let name = trulyClean.replace(rx, '$1');
		for (let user of message.guild.members.array()) {
			if (user.nickname == null) { 
				if (user.user.username == name) { message.channel.send(`hey ${user} someone pinged you`); break; }
			} else {
				if (user.nickname == name) { message.channel.send(`hey ${user} someone pinged you`); break; }
			}
		}
	}
});

bot.login(config.token);
