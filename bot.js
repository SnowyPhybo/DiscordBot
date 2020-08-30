const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NzQ5NDUzNTg0MjE0NTIzOTI0.X0sNCg._3XTBDcL37u8cJO6DRjbeojxU88)
