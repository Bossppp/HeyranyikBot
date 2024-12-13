const client = require("..");
const {slashCommands} = require("..");

client.on('interactionCreate' , async interation => {
    if(interation.isCommand()){
        if(!interation.guild){
            return
        }
        const command = slashCommands.get(interation.commandName);
        if(!command) return;
        try{
            command.run(client,interation);
        }catch (error){
            console.error(error);
        }
    }
})