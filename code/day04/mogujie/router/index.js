/* 总路由   里面有很多子路由*/
const express = require("express");

const Router = express.Router(); /* express自带的中间件  Router==app*/

Router.use((req, res, next) => {
    console.log("已经进入总路由");

})

/* 暴露模块 */
module.exports = Router;