const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready !');
});

client.on('message', message => {
    if (message.content === '!test') {
        message.channel.send('```Ceci est un test !```');
    }
    else if (message.content === '!tarif') {
        message.channel.send('```TARIF : \n```')
    }
});

client.login(process.env.TOKEN);