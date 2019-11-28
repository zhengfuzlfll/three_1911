/* express */

const express = require("express");
const app = express();
app.use(express.static("./")); /* 静态资源服务器 */

app.get("/", (req, res) => {
    res.send("欢迎访问服务器");
})

app.get("/login", (req, res) => {
    res.send("登录页get");
});

app.post("/login", (req, res) => {
    res.send("登录页post");
});


app.get("/reg", (req, res) => {
    res.send("注册页");
});

app.get("/index", (req, res) => {
    res.send("首页");
});


app.listen(2020, () => {
    console.log("服务器启动，端口号2020");

})