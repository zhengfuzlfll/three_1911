/* 静态资源服务器   读取文件（文本、图片） */
/* http模块 */
const http = require("http");
/* url模块 */
const url = require("url");
/*path模块  */
const path = require("path");
/* fs模块 */
const fs = require("fs");

let app = http.createServer((req, res) => {
    res.writeHead(200, {
        "content-type": "text/html;charset=utf-8"
    });
    let str = 'http://www.baidu:8888/list?name=malin&adr=guangxi#231';

    let obj = url.parse(str, true)
    console.log(obj);



    res.end("结束");

});
app.listen(1911, () => {
    console.log("服务器启动成功");

})