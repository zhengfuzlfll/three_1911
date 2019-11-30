const express = require("express");
const app = express();

app.use(express.static("./", {
    index: './main.html',
    maxAge: 360000
}));
/*  index: './main.html'    修改默认打开的文件, maxAge: 360000  缓存时间 s  
express.static() 内置中间件  没有next 路径满足，则进入这里  ，不会往下执行
*/

/* 中间件   自定义中间件 -----有三个参数*/
// app.use("/goods", (req, res, next) => {
//     /* next 为必须，否则不能进入下一个中间件 */
//     console.log("中间件1");
//     next(); /*  */

// })

// app.use("/lists", (req, res, next) => {
//     /* next 为必须，否则不能进入下一个中间件 */
//     console.log("中间件2");
// })

app.get("/aa", (req, res) => {
    /* 查询 */
    /* next 为必须，否则不能进入下一个中间件 */
    console.log("查询");
    res.send("查询")
})

app.post("/bb", (req, res) => {
    /*提交  */
    /* next 为必须，否则不能进入下一个中间件 */
    console.log("提交");
    res.send("提交")
})

app.post("/bb/:id", (req, res) => {
    /* 127.0.0.1:2020/bb/4         获取4 */
    /*提交  */
    /* next 为必须，否则不能进入下一个中间件 */
    let {
        id
    } = req.params; /*解构，获取参数   获取动态路由  */
    console.log(`提交-----${id}`);
    res.send(`id为${id}的商品`)
})







app.put("/cc", (req, res) => {
    /* 修改 */
    /* next 为必须，否则不能进入下一个中间件 */
    console.log("修改");
    res.send("修改")
})
app.delete("/dd", (req, res) => {
    /* 删除 */
    /* next 为必须，否则不能进入下一个中间件 */
    console.log("删除");
    res.send("删除")
})





app.listen(2020, () => {
    console.log("服务成功开启,端口号2020");
})