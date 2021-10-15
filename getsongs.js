var axios = require('axios');



async function getSongs(name){
    let resp = await axios.get(`https://itunes.apple.com/search?term=${name}`);
    let data = await resp.data;

    return data;
}

module.exports = getSongs;