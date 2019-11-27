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


    // let str = req.url; /* 得到相对路径   /img/g1.jpg     浏览器输入（获取端口号后面的所有）*/
    // console.log(str);
    // console.log(__dirname); /* 获取绝对路径   cmd打开的位置  的路径 */
    // console.log(__filename); /* 当前被监听文件的绝对路径 */
    // let newpath = path.join(__dirname, str); /* 拼接成绝对路径 */
    // console.log(newpath);


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
    // res.end("结束")

}).listen(1911, () => {
    console.log("成功开启服务器，端口号1911");
})