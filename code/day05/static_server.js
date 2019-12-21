const express = require("express");
let {
    PORT
} = require('./config.json')
// console.log(PORT);

const app = express();

/* 导入总路由 */
let allRouter = require('./router/index.js')


app.use(express.static("./"))

/* 总路由 */
app.use(allRouter)



app.listen(PORT, () => {
    console.log(`成功开启服务器，请访问localhost:${PORT}`);
})