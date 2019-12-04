/* 开启静态资源服务器 */
const express = require("express");
/* 引入服务器代理模块 */
const proxy = require("http-proxy-middleware");


const app = express();
app.use(express.static("./"));






/* 端口号2050的数据       jsonp */
app.get("/jsonp", (req, res) => {
    let {
        callback
    } = req.query; //获取url路径后的参数=>？后的数据=>getdata
    // console.log(callback);

    let data = {
        username: 'malin',
        password: 123456,
        gender: 'female'
    };
    res.send(`${callback}(${JSON.stringify(data)})`); //传过去的数据的形式  getdata(data)
})



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




/* cors跨域  设置响应头，需要服务器+浏览器支持*/
app.get("/cors", (req, res) => {
    let data = "新浪网为全球用户24小时提供全面及时的中文资讯";
    /* 设置响应头 ---在send前面设置 */
    // res.header("Access-Control-Allow-O   rigin", "*");
    res.send(data);
})



/* ---------cors跨域  多个端口---------- */
// function isOriginAllowed(origin, allowedOrigin) {
//     if (Array.isArray(allowedOrigin)) {
//         for (let i = 0; i < allowedOrigin.length; i++) {
//             if (isOriginAllowed(origin, allowedOrigin[i])) {
//                 return true;
//             }
//         }
//         return false;
//     } else if (typeof (allowedOrigin) == "string") {
//         return origin === allowedOrigin;
//     } else if (allowedOrigin instanceof RegExp) {
//         return allowedOrigin.test(origin);
//     } else {
//         return !!allowedOrigin;
//     }
// }

// const ALLOW_ORIGIN = ["http://127.0.0.1:2020", "http://127.0.0.1:2030", "http://127.0.0.1:2040", "http://66666"];
// // const ALLOW_ORIGIN = "http://127.0.0.1:2020";

// app.get("/cors", (req, res) => {
//     let data = "新浪网为全球用户24小时提供全面及时的中文资讯";
//     /* 设置响应头 ---在send前面设置 */
//     // res.header("Access-Control-Allow-Origin", "http://127.0.0.1:2020")
//     let reqOrigin = req.headers.origin;
//     if (isOriginAllowed(reqOrigin, ALLOW_ORIGIN)) {
//         // 设置CORS为请求的Origin值 
//         res.header("Access-Control-Allow-Origin", reqOrigin);
//         res.header('Access-Control-Allow-Credentials', 'true');
//     }

//     res.send(data);
// })
/* ---------cors跨域  多个端口---------- */




/*---------- 服务器代理    需要使用第三方模块  npm install http-proxy-middleware -S* ------------/

/*微博   https://m.weibo.cn/api/config/list */
/*康爱多 https://m.360kad.com/DataPlatform/GetIndexGuessLikeProducts?pagesize=8&pageindex=1 */
// app.get('/sinaapi', proxy({
//     "target": "https://m.weibo.cn",
//     /* 是否修改原网址，true为修改，false不可修改 */
//     "changeOrigin": true,
//     "pathRewrite": {
//         "^/sinaapi": "/"
//     }

// }))

/* -------康爱多--------- */
/*康爱多 https://m.360kad.com/DataPlatform/GetIndexGuessLikeProducts?pagesize=8&pageindex=1 */

/*请求地址 http://127.0.0.1:2030/kad
  实际网址 https://m.360kad.com/DataPlatform/GetIndexGuessLikeProducts?pagesize=8&pageindex=1 
替换：http://127.0.0.1:2030/kad/DataPlatform/GetIndexGuessLikeProducts?pagesize=8&pageindex=1
=>
*/
/* --------开启两个服务器-静态+ 代理-----    */
app.get('/kad', proxy({
    target: "https://m.360kad.com/DataPlatform/GetIndexGuessLikeProducts?pagesize=8&pageindex=1",
    /* 是否修改原网址，true为修改，false不可修改 */
    changeOrigin: true,
    pathRewrite: {
        "^/kad": "/"
    }

}), (res, req) => {
    res.send(data)
})




app.listen(2050, () => {
    console.log("服务器开启成功，端口号2050");
})