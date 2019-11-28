/* 引入http模块 */
/* 开启服务器 */
const http = require("http");

let app = http.createServer((req, res) => {
    res.writeHead(200, {
        "content-type": "text/html;charset=utf-8"
    })
    res.write("结束");
    res.write("<h1>nodejs超神三阶段</h1>");
    res.end();
})

app.listen(2008, function () {
    console.log("服务器开启成功");
});