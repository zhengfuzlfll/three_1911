const express = require('express');

/* express.Router()为 express 的方法 */
/* 创建路由容器 */
const Router = express.Router();
/*
 用户管理
 1、查询用户是否存在
 2、注册
 3、登录
 4、修改密码
 5、查询所有用户
*/

Router.use('/', (req, res) => {
    console.log("进入user子路由");
})