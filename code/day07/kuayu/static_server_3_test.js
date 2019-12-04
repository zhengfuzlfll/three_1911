/* 开启静态资源服务器 */
const express = require("express");

const app = express();
app.use(express.static("./"));

// app.get("/jsonp", (req, res) => {

//     let data = {
//         username: 'malin',
//         password: 123456,
//         gender: 'female'
//     };
//     res.send(data);
// })


app.listen(6666, () => {
    console.log("服务器开启成功，端口号6666");
})