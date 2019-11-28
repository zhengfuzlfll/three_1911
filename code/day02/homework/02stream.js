    /* 
            fs.creatReadStream()  读文件，以流的形式
            fs.creatWriteStream() 写文件 以流的形式
    */

    const fs = require("fs");
    let readStream = fs.createReadStream("./data/test.txt");
    //     console.log(readStream);
    /* 用事件监听的方式监听数据读取的过程 */
    let str = ''
    readStream.on("data", chunk => {
            //     console.log(chunk); /* Buffer数据   */
            str += chunk;
            console.log(chunk.toString(), chunk.length); /* 一次读取65536个字节（2^16） */

            //     console.log(str);
    });
    readStream.on("end", () => {
            console.log("读取完成66666");
    })