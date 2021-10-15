var getSongs = require('./getsongs');
var writeData = require('./writedata');

console.log("Hello world");


async function main(){
    try{
        console.log("Loading song list...");
        let a = await getSongs("Hello");
        console.log("Writing into data.json");
        writeData(a);
    }catch(e){
    }
}


main();