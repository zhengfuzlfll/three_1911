/* 文件模块，直接require引入 */
// const port = require("./config.json"); /* 得到对象  { PORT: '2020' }*/
// console.log(port);

/* 解构对象 */
const {
    PORT
} = require("./config.json"); /* 配置文件 */
// console.log(PORT); /* 2020 */

/* 引入第三方模块 */
const express = require("express"); /* 得到函数 */

const app = express(); /* 调用函数，返回对象 即app   */

// let allRouter = require('./router/index'); /* 导入模块 导入总路由 */

app.use(express.static("./")); /* 静态资源服务器 ---------默认打开index.html   */

// app.use(allRouter); /*引入总路由 allRouter是中间件  不满足静态资源服务器的路径则走--总路由--的分支 */

app.listen(PORT, () => {
    console.log(`服务器开启，端口号${PORT}`);
});


