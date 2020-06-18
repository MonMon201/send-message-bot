'use strict';

const Discord = require('discord.js');
require('dotenv').config()

const client = new Discord.Client();
 
client.on('message', message => {
    if(message.content === 'g'){
        const channelID = message.channel.id;
        const channel = client.channels.cache.get(channelID);
        channel.send("Option 1");
        channel.send("Option 2");
        channel.send("Option 3");
    }
});

client.login(process.env.TOKEN);