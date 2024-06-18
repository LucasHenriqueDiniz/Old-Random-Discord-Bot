const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const { token, prefix } = require('./config.json');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Tudo mec!');
	//Se iniciado responde 
	client.user.setActivity('Rain sounds', { type: 'LISTENING' });
	// atividade realizada pelo bot
});

client.login(token);


client.on('message', message => {

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();


	if (!message.content.startsWith(prefix) || message.author.bot) {
		return
	} //ignora mensagens sem ! ou sendo do bot

	else if (command === 'server') {
		client.commands.get('server').execute(message, args);
	}

	else if (command === 'kick') {
		client.commands.get('kick').execute(message, args);
	}

	else if (command === 'avatar') {
		client.commands.get('avatar').execute(message, args);
	}

	else if (command === 'clear') {
		client.commands.get('clear').execute(message, args);
	}

	else if (command === 'flood') {
		client.commands.get('flood').execute(message, args);
	}

	else if (command === 'flood2') {
		client.commands.get('flood2').execute(message, args);
	}

});