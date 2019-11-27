const fs = require("fs");

/* 文件系统  fs模块  读取 */
/* 异步读取 */
fs.readFile("./data/test.txt", (err, data) => {
    if (err) {
        console.log("读取失败" + err);
        return; /* 阻塞后面的代码执行 */
    } else {
        // console.log(data);
        console.log(data.toString() + "+++++");
    }
})

/* 同步读取 */
let data2 = fs.readFileSync("./data/test2.txt")
console.log(data2 + "-----");




/* -------写入   如果没有文件，则自动创建文件---        覆盖写入*/
/* 异步 */
fs.writeFile("./data/test4.txt", "异步读取文件的时候由操作系统在后台进行读取，不会阻碍下面的代码执行。同步读取的时候会阻碍下面的代码执行。3333333", err => {
    if (err) throw err;
    console.log("写入成功");
})

/* 同步 */
fs.writeFileSync("./data/test3.txt", "nodejs33333333", err => {
    if (err) throw err;
    console.log("写入成功1111111111");
})

/*追加写入  异步 */
fs.appendFile("./data/test4.txt", "异步读取开始--------------->同步读取开始--------------------->同步读取结束---------------->异步读取结束", err => {
    if (err) throw err;
    console.log("追加写入成功");
})
/* 追加写入  同步 */
fs.appendFileSync("./data/test3.txt", "阿萨法撒打发第三方", err => {
    if (err) throw err;
    console.log("同步追加写入成功"); /* 不打印，但是写入成功 */
})