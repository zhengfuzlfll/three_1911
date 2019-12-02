const mysql = require("mysql"); /* 引入第三方模块  mysql */
/* 连接池 */
let pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "common",
    charset: "UTF8_GENERAL_CI",
    /*设置编码 */
    multipleStatements: true /* 允许写多个语句 */
})

/* 封装query函数 */
function query(sql, callback) {
    /* 用回调实现 */
    /* 查所有数据get */
    pool.query(sql, function (err, rows) {
        if (err) throw err;
        // console.log(rows);
        // res.send(rows);
        callback(rows); /* 函数的入口，实参 */

    })
}


module.exports = query;