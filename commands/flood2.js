module.exports = {
    name: 'flood',
    description: 'flooda',
    execute(message, args) {
        setTimeout(function () {
            flood();
            var intervalo = 1000; // 1000 = 1seg
            setInterval(function () {
                flood();
            }, intervalo)
        })
        function flood() {
            message.channel.send('floodaqui');
        }
    }
};