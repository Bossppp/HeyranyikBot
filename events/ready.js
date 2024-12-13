const client = require("../heyranyik");
const {autoNotify} = require('../functions/autonotify');

client.on('ready' , ()=> {
    console.log(`Bot is ready as ${client.user.tag}`);
    autoNotify(client);
})