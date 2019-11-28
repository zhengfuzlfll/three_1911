/* 静态资源服务器 */
/* 引入四个原生模块 */

/* http模块 */
const http = require("http");
/* url模块 */
const url = require("url");
/* path模块 */
const path = require("path");
/* fs模块 */
const fs = require("fs");

/* 开启服务器 */
let app = http.createServer((req, res) => {

    if (req.url === '/favicon.ico') return; /* 阻止请求favicon.ico文件 */

    let str = req.url; /* 得到相对路径   /img/g1.jpg     浏览器输入（获取端口号后面的所有）*/
    console.log(str);
    console.log(__dirname); /* 获取绝对路径   cmd打开的位置  的路径 */
    console.log(__filename); /* 当前被监听文件的绝对路径 */
    let newpath = path.join(__dirname, str);
    console.log(newpath);


    // fs.readFile("../img/laoxie.jpg", (err, data) => {
    //     if (err) throw err;

    //     /*设置 响应头信息 */
    //     res.writeHead(200, {
    //         "content-type": "image/jpeg;charset=utf-8"
    //     })
    //     // res.end("结束")
    //     console.log(data);

    //     res.end(data);
    // })
    res.end("结束")

}).listen(1911, () => {
    console.log("成功开启服务器，端口号1911");
})