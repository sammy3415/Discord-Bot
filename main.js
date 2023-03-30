
const { Client, GatewayIntentBits } = require('discord.js');
const Discord = require('discord.js');
require("dotenv").config()

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers
      ]    
});


let bot = {
    client,
    prefix: ".",
    owners: ["605603257871499276"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./src/handlers/commands")(bot, reload)
client.loadEvents(bot, false)

client.loadCommands = (bot, reload) => require("./src/handlers/commands")(bot, reload)
client.loadCommands(bot, false)

module.exports = bot

client.once('ready', () => {
    console.log('Bot is online!');
})


client.on('messageCreate', (message) => {
    triggerEventHandler(bot, "messageCreate", message)
})

// const { 
//     Client, ApplicationCommandType, ApplicationCommandOptionType, 
//     GatewayIntentBits, Partials
//  } = require('discord.js');

//  require("dotenv").config()

// const client = new Client({ 
//     intents: [
//         GatewayIntentBits.Guilds,
//         GatewayIntentBits.GuildMessages,
//         GatewayIntentBits.GuildPresences,
//         GatewayIntentBits.GuildMessageReactions,
//         GatewayIntentBits.DirectMessages,
//         GatewayIntentBits.MessageContent
//       ],
//       partials: [
//         Partials.Channel,
//         Partials.Message,
//         Partials.User,
//         Partials.GuildMember,
//         Partials.Reaction
//       ]    
// });

client.login(process.env.TOKEN)