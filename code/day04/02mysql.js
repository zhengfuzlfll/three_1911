/* 引入 mysql模块 */
const mysql = require("mysql");

// /* ----------使用连接对象方式连接数据库-     手动关闭连接------ */

// /*  创建连接对象，并配置参数*/
// var connection = mysql.createConnection({
//     host: "127.0.0.1",
//     user: "root",
//     password: "",
//     database: "common"
// })

// /* 连接数据库 */
// connection.connect();

// /* 查询数据库 */
// connection.query("SELECT * FROM cart", function (error, result, fields) {
//     if (error) throw error;

//     console.log(result);

// })

// /* 手动  关闭连接 */
// connection.end();

/* -----------连接池方式连接数据库-------- */
/* 引入模块 */


/* 创建连接池------- createPool  推荐-------------  */
var pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "common",
    charset: 'UTF8_GENERAL_CI',
    /* 设置编码 */
    multipleStatements: true /* 允许写多个语句，允许拼接sql一次执行多个语句   如购物车数据，连表查询*/
})

/* 不需要手动连接数据库 */

/* 书写查询语句 */
pool.query("SELECT * FROM cart", function (err, rows) {
    if (err) throw err;
    console.log(rows);

})
/* 不需要手动关闭数据库，自动关闭 */