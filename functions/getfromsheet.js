const axios = require('axios');
const sheetURL = 'https://sheetdb.io/api/v1/a806ejl2ss2wd';

let lastdata = null;

async function getSheetData(){
    const response = await axios.get(sheetURL);
    const data = response.data;
    const lastestdata = data[data.length - 1];
    console.log('lsData : ' , lastestdata);

    if(JSON.stringify(lastdata) !== JSON.stringify(lastestdata)){
        console.log('Update data');
        lastdata = lastestdata;
        return lastestdata;
    }
    return null;
}

module.exports = {getSheetData};