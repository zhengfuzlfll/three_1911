const express = require("express");

const Router = express.Router();
/* 引入mysql模块 */
// const mysql = require("mysql");
const query = require("../db/mysql");
console.log(query);




// let data = [{
//         "id": 1,
//         "url": "https://avatars2.githubusercontent.com/u/14975630?v=4&s=120",
//         "title": "12 月 14 日，技术大牛齐聚 D2，带你解锁前端新姿势"
//     },
//     {
//         "id": 2,
//         "url": "https://avatars2.githubusercontent.com/u/227713?v=4&s=120",
//         "title": "Node 12 值得关注的新特性"
//     }
// ];

// /* 请求  查 get */
// Router.get("/", (req, res) => {
//     res.send(data);
// })

// /* 获取单条数据 */
// Router.get("/:id", (req, res) => {
//     let {
//         id
//     } = req.params;
//     res.send(id + "数据拿到");
// })

// /* 删delete*/
// Router.delete("/:id", (req, res) => {
//     let {
//         id
//     } = req.params;
//     res.send(id + "删除数据");
// })

// /* put  完全修改 */
// Router.put("/:id", (req, res) => {
//     let {
//         id
//     } = req.params;
//     res.send(id + "修改数据");
// })

// /* post  增 */
// Router.post("/", (req, res) => {
//     // let {
//     //     id
//     // } = req.params;
//     res.send("增加数据");
// })

/*---------- 添加数据库操作-------- */



/* 查询所有数据 */
Router.get("/", (req, res) => {
    let sql = "SELECT * FROM cart";

})

/* 查询某个数据 */
Router.get("/:id", (req, res) => {
    let {
        id
    } = req.params; /* 获取冬天路由 */
    let sql = `SELECT * FROM cart WHERE id=${id}`;
    pool.query(sql, function (err, rows) {
        if (err) throw err;
        console.log(rows);
        res.send(rows);
    })
})

/* post  增 */
Router.post("/", (req, res) => {
    // let {
    //     id
    // } = req.params;
    /* INSERT INTO cart(title,price,num,total,repertory) VALUES('大哥大',50.6,2,101.2,10009) */
    // let sql = ""
    console.log("增加数据");

    res.send("增加数据");
})

/* 删delete*/
Router.delete("/:id", (req, res) => {
    let {
        id
    } = req.params;
    let sql = `DELETE FROM cart WHERE id=${id}`
    // res.send(id + "删除数据");
    pool.query(sql, function (err, rows) {
        if (err) throw err;
        console.log(rows);
        res.send(rows);
        /* {
            "fieldCount": 0,
            "affectedRows": 0,
            "insertId": 0,
            "serverStatus": 2,
            "warningCount": 0,
            "message": "",
            "protocol41": true,
            "changedRows": 0     ---------->表示删除成功
            } 
        */
    })
})

/* put  完全修改 */
Router.put("/:id", (req, res) => {
    let {
        id
    } = req.params;
    /* UPDATE cart SET title='柚子',price=10.55,num=1,total=10.546,repertory=100 WHERE id=3 */
    res.send(id + "修改数据");
})





/* 导出 */
module.exports = Router;