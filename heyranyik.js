const {Client , GatewayIntentBits , Events, Collection} = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents : [
        'GuildMembers',
        'MessageContent',
        'GuildMessageTyping',
        'GuildMessages',
        'Guilds'
    ]
});

client.on('ready', () => {
    console.log('Bot is ready');
});

client.slashCommands = new Collection();

module.exports = client;
require('./handles')(client);

client.login(process.env.TOKEN);