/* 开启静态资源服务器 */
const express = require("express");
/* 引入服务器代理模块 */
const proxy = require("http-proxy-middleware");


const app = express();
app.use(express.static("./"));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,PATCH,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if (req.method == "OPTIONS") { //特殊请求：发送了请求头的那些请求
        res.sendStatus(200); /*让options请求快速返回*/
    } else {
        next();
    }
})

/* --------开启两个服务器-静态+ 代理-----    */
/* https://papi.jiemian.com/page/api/index/indexajax */
app.get('/text', proxy({
    target: "http://g.58.com/common/catelist/?cateid=60532/",
    /* 是否修改原网址，true为修改，false不可修改 */
    changeOrigin: true,
    pathRewrite: {
        "^/text": "/"
    }

}), (res, req) => {
    res.send(data)
})




app.listen(2050, () => {
    console.log("服务器开启成功，端口号2050");
})