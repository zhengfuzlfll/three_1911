const express = require("express");

const app = express();

app.use(express.static("./"))

// app.get("/goodlist", (req, res) => {
//     let goodlist = [{
//             "gid": "1",
//             "name": "苹果",
//             "price": "8999"
//         },
//         {
//             "gid": "2",
//             "name": "华为",
//             "price": "5999"
//         }
//     ];
//     res.send(goodlist)
// })


// app.get("/login", (req, res) => {
//     res.send("登录页get")
// })

// app.post("/login", (req, res) => {
//     res.send("登录页post")
// })


/* 路由带参数 */
let list = [{
    "gid": "1",
    "name": "苹果",
    "price": "8999"
}, {
    "gid": "2",
    "name": "华为",
    "price": "5999"
}, {
    "gid": "3",
    "name": "小米",
    "price": "3999"
}];


app.get("/good", (req, res) => {
    // res.send(list)
    // console.log(req.query); /* {gid:"1",color:"red"} */
    let {
        gid
    } = req.query; /* 以对象形式获取参数 */

    let goodlist = list.filter((item, index) => {
        return item.gid == gid;
    });

    let data = null;
    if (goodlist.length) {
        data = {
            type: 1,
            tip: "成功",
            data: goodlist
        }
        // res.send(data)
    } else {
        data = {
            type: 0,
            tip: "失败",
            data: []
        }
        // res.send(data)
    }

    res.send(data);



    // res.send("ok")
})









app.listen(2020, () => {
    console.log("服务器开启，端口号2020");

})