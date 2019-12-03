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

/*初级版---------   使用回调=>回调地狱       封装query函数 */
// function query(sql, callback) {
//     /* 用回调实现 */
//     /* 查所有数据get */
//     pool.query(sql, function (err, rows) {
//         if (err) throw err;

//         callback(rows); /* 函数的入口，实参 ,谁调用*/

//     })
// }

/* -----中级版------promise,解决回调地狱 */
function query(sql) {
    /* 调用query得到一个promise对象 */
    return new Promise((resolve, reject) => {
        if (resolve) {
            pool.query(sql, function (err, rows) {
                if (err) reject(err);
                resolve(rows); /* 通过promise创建出来的对象的then调用据 */

            })
        }


    })
}








module.exports = query; /*导出query函数 */