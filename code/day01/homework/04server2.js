const http = require("http");
let app = http.createServer((req, res) => {
    /* 设置响应头，防止中文乱码 */
    res.writeHead(200, {
        "content-Type": "text/html;charset=utf-8"
    })
    // console.log(req.url);/* 路径 */
    switch (req.url) {
        case '/login':
            res.end("登录页");
            break;
        case '/reg':
            res.end("注册页");
            break;
        case '/index':
            res.end("首页");
            break;
        default:
            res.end(`404${req.url}页面找不到`)
            break;
    }


    res.end("结束")

})
app.listen(1909, () => {
    console.log("服务器成功开启");
})