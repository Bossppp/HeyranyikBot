const { Client } = require("discord.js");
const fs = require("fs");
const path = require("path");
const { slashCommands } = require("..");
const { error } = require("console");

module.exports =/**@param {Client} client*/ (client) => {
    const eventPath = path.join(__dirname, "..", "events"); //events folder path
    const eventFiles = fs.readdirSync(eventPath).filter(file => file.endsWith('.js'));rd

    for(const file of eventFiles){
        const filepath = path.join(eventPath,file);
        const event = require(filepath);
        if(event.once){
            client.once(event.name, (...args) => event.execute(...args,client));
        }else{
            client.on(event.name, (...args) => event.execute(...args,client));
        }
        console.log(`Event ${file} loaded`);
    }

    let commandArray = [];
    let commandFolderPath = path.join(__dirname,"..","slashCommands");
    const commandFolder = fs.readdirSync(commandFolderPath).filter(folder => !folder.startsWith('.'));
    
    commandFolder.forEach((folder) => {
       let commandFiles = fs.readdirSync(path.join(commandFolderPath,folder)).filter(file => file.endsWith('.js'));
       commandFiles.forEach((file) => {
            const commands = require(path.join(commandFolderPath,folder,file));
            slashCommands.set(commands.name,commands);
            commandArray.push(commands);
       });

    });

    client.on("ready" , () => {
        client.application.commands.set(commandArray).catch(err => {
            console.log(err);
        });
    })
}