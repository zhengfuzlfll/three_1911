/* 总路由   里面有很多子路由*/
const express = require("express");

const Router = express.Router(); /* express自带的中间件  Router==app*/

// Router.use((req, res, next) => {
//     console.log("已经进入总路由");
//     res.send("总路由");
// })


/* 引入子路由 */
const goodsRouter = require("./goods");
// const ordersRouter=require("./orders")


/* 调用子路由 */
Router.use("/goods", goodsRouter);
/*  goods模块导出中间件
    use  任何请求都能进这里
*/




/* 暴露模块 */
module.exports = Router;