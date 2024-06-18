module.exports = {
	name: 'apagar',
	description: 'apaga',
	execute(message, args) {

		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('Numero plz');
		} else if (amount <= 1 || amount > 101) {
			return message.reply('de 1 a 100 plz');
		}
		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('deu erro meu chapa');
		});
	}
}