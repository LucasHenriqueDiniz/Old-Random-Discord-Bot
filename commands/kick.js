module.exports = {
    name: 'kick',
    description: 'nao kikca',
    execute(message, args) {

        const taggedUser = message.mentions.users.first();

        if (!message.mentions.users.size) {
            return message.reply('Tag someone')
        }
        message.channel.send(`You wanted to kick: ${taggedUser.username}`);
    },
};