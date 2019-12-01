const express = require("express");

const Router = express.Router();


let data = [{
        "id": 1,
        "url": "https://avatars2.githubusercontent.com/u/14975630?v=4&s=120",
        "title": "12 月 14 日，技术大牛齐聚 D2，带你解锁前端新姿势"
    },
    {
        "id": 2,
        "url": "https://avatars2.githubusercontent.com/u/227713?v=4&s=120",
        "title": "Node 12 值得关注的新特性"
    }
];

/* 请求  查 get */
Router.get("/", (req, res) => {
    res.send(data);
})

/* 获取单条数据 */
Router.get("/:id", (req, res) => {
    let {
        id
    } = req.params;
    res.send(id + "数据拿到");
})

/* 删delete*/
Router.delete("/:id", (req, res) => {
    let {
        id
    } = req.params;
    res.send(id + "删除数据");
})

/* put  完全修改 */
Router.put("/:id", (req, res) => {
    let {
        id
    } = req.params;
    res.send(id + "修改数据");
})

/* post  增 */
Router.post("/", (req, res) => {
    // let {
    //     id
    // } = req.params;
    res.send("增加数据");
})

/* 导出 */
module.exports = Router;