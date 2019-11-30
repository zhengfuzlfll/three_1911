/* 文件模块，直接require引入 */
// const port = require("./config.json"); /* 得到对象  { PORT: '2020' }*/
// console.log(port);

/* 解构对象 */
const {
    PORT
} = require("./config.json"); /* 配置文件 */
// console.log(PORT); /* 2020 */



const express = require("express");

const app = express();

let allRouter = require('./router/index'); /* 导入模块  */

app.use(express.static("./")); /* 静态资源服务器 */

app.use(allRouter); /*引入总路由 allRouter是中间件 */

app.listen(PORT, () => {
    console.log(`服务器开启，端口号${PORT}`);
})