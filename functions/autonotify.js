const {getSheetData} = require('./getfromsheet');
const channelID = "1316699187508805632";

async function autoNotify(client){
    setInterval(async() => {
       const newdata = await getSheetData();
            if(newdata){
                const channel = await client.channels.fetch(channelID);
                if(channel){
                    channel.send(`วันที่ ${newdata.date} มีเงินเข้า ${newdata.amount} บาทจ้า`);
                }else{
                    console.log('Channel not found');
                }
    } 
    }, 60000)   
}

module.exports = {autoNotify};