/* express 第三方模块   */
/*实现 静态资源服务器 */
const express = require("express"); /* 得到一个函数 */
const app = express();

app.use(express.static("./")); //express.static()   中间件

app.listen(2020, () => {
    console.log("服务器启动成功，端口号2020");

})