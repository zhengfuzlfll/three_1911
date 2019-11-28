/* express */

const express = require("express");
const app = express();
app.use(express.static("./")); /* 静态资源服务器 */


/*-------- 带路径   接口测试  postman   apidebug*/
app.get("/", (req, res) => {
    res.send("欢迎访问服务器");
})

app.get("/login", (req, res) => {
    res.send("登录页get");
});
/* post */
app.post("/login", (req, res) => {
    res.send("登录页post");
});


app.get("/reg", (req, res) => {
    res.send("注册页");
});

app.get("/index", (req, res) => {
    res.send("首页");
});




/* ----------返回商品数据----- */
app.get("/goodlist", (req, res) => {
    let goodlist = [{
            "gid": "1",
            "name": "苹果",
            "price": "8999"
        },
        {
            "gid": "2",
            "name": "华为",
            "price": "5999"
        }
    ];
    res.send(goodlist)
})





/* 路由带参数 */
let ggs = [{
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


/* 获取前端传过来的参数  并将对应数据返回   路由带参数*/
app.get("/goodtest", (req, res) => {
    // console.log(req.query); /* req.query  获取  得到一个对象 */

    let {
        gid,
        color
    } = req.query; /* ES6 对象的结构 得到参数 （属性值） */
    // // console.log(gid, color);


    let good = ggs.filter((item, index) => {
        return item.gid == gid; /* 返回对应的一组数据 gid为1的一组数据   ==  */
    })


    console.log(good);

    let data = null;
    if (good.length) {
        data = {
            type: 1,
            tip: "成功",
            data: good
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
    // res.send("ok");

})











app.listen(2020, () => {
    console.log("服务器启动，端口号2020");

})