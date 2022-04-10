const fs=require("fs");

//,{encoding:'utf8'} is optional
const readStream=fs.createReadStream('./data/file.txt',{encoding:'utf8'});

const writeStream=fs.createWriteStream('./data/newfile.txt');

// readStream.on('data',(chunk)=>{
//     console.log("------------New Chunk---------------");
//     console.log(chunk);

//     writeStream.write("\n-------New Chunk---------------------\n");
//     writeStream.write(chunk);
// });


//piping for moving data from one to another
readStream.pipe(writeStream);