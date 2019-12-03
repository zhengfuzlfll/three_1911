/*
 主入口 封装query
    mysql
    mongoDB
*/

/* 导入mysql路由 */
const mysql = require("./mysql");
/*导入mongoDB */
const mongo = require("./mongo");
module.exports = {
    mysql,
    mongo
}