const Discord = require('discord.js');

const client = new Discord.Client({ intents: [] });

client.once('ready', () => {
    console.log('Bot is online!');
});



// Keep as last line
client.login('MTA5MDcwMjQyODc5MTM5NDMzNA.G33234.uWz1ctLNnhLuzJXPPsbrsnXyo-oytbLh4gtBB8');