module.exports = {
	name: 'server',
	description: 'mostra o server',
	execute(message, args) {

		message.channel.send(`This Server's name is: **${message.guild.name}**\nYour ID: **${message.author.id}**`);
	}
};