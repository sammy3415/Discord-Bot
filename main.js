const { 
    Client, ApplicationCommandType, ApplicationCommandOptionType, GatewayIntentBits,
    Partials
 } = require('discord.js');

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent
      ],
      partials: [
        Partials.Channel,
        Partials.Message,
        Partials.User,
        Partials.GuildMember,
        Partials.Reaction
      ]    
});

const prefix = '.';

client.once('ready', () => {
    console.log('Bot is online!');
})

client.on('messageCreate', (message) => {
    console.log(message.content);

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];

    if(command === 'ping'){
        message.channel.send('pong!');
    }
})

// Keep as last line & ********REMOVE BEFORE PUSHING*******
client.login('MTA5MDcwMjQyODc5MTM5NDMzNA.GRzJRt.b9aQUnhve5GiiDOWXR77rGvil0rz2ETjUpwiiM');