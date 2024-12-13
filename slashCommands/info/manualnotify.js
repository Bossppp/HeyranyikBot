const {SlashCommandBuilder, ApplicationCommand} = require('discord.js');
const {getSheetData} = require('../../functions/getfromsheet');

module.exports = {
    name : "notifyManual",
    description : "notify data from sheet",
    /**
     * @param {Client} client
     * @param {CommandInteraction} interac
     */

    run : async(client,interac) => {
        interac.deferReply();
        const data = await getSheetData();
        const message = `วันที่ ${data.date} มีเงินเข้า ${data.amount} บาทจ้า`;
        interac.editReply({
            content : message
        });
    }
}