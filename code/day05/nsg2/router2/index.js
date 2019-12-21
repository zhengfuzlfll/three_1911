// const express = require("express");

// const Router = express.Router();
// Router.use(express.urlencoded({})); //可以获取body

// /* 引入子路由模块 */
// const usersRouter = require('./users.js');
// // const goodsRouter = require('./goods');

// /* 调用子路由 */
// Router.use('/users', usersRouter);
// // Router.use('/goods', goodsRouter);

// module.exports = Router;



const express = require("express");

const Router = express.Router();
Router.use(express.urlencoded({})); //可以获取body

const usersRouter = require('./users');
const goodsRouter = require('./goods');

Router.use('/users', usersRouter);
Router.use('/goods', goodsRouter);

module.exports = Router;