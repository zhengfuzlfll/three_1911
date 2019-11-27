    /* 
            fs.creatReadStream()  读文件，以流的形式
            fs.creatWriteStream() 写文件 以流的形式
    */

    const fs = require("fs");
    let readStream = fs.createReadStream("./data/test.txt");
    console.log(readStream);


    

