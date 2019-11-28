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

const mime = require("./mime")
// console.log(mime[jpg]);


/* 开启服务器 */
let app = http.createServer((req, res) => {

    if (req.url === '/favicon.ico') return; /* 阻止请求favicon.ico文件 */

    // console.log(url.parse(req.url).pathname); 
    let pathname = url.parse(req.url).pathname; /* 相对路径  /img/g3.jpg    */
    console.log(pathname);

    let ext = path.extname(pathname).slice(1); /* 得到后缀 jpg */
    console.log(ext);
    pathname = path.join(__dirname, pathname); /* 得到绝对路径 */
    console.log(pathname);

    fs.readFile(pathname, (err, data) => {
        if (req.url === '/favicon.ico') return; /* 阻止请求favicon.ico文件 */
        if (err) throw err;
        res.writeHead(200, {
            "content-type": `${mime[ext]};chartset-utf-8` /* mime的ext是变量，不能使用  对象名.属性 来调用，只能用对象名[属性]的方式调用 */
        })
        res.end(data);
    })

}).listen(2030, () => {
    console.log("成功开启服务器，端口号2030");
})