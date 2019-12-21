// const express = require("express");
// let {
//     PORT
// } = require('./config.json')
// // console.log(PORT);

// const app = express();

// /* 导入总路由 */
// let allRouter = require('./router/index.js')


// app.use(express.static("./"))

// /* 总路由 */
// app.use(allRouter)



// app.listen(PORT, () => {
//     console.log(`成功开启服务器，请访问localhost:${PORT}`);
// })


const express = require('express');
const {
    PORT
} = require("./config.json");
const app = express();

let allRouter = require('./router/index');

app.use(express.static('./'));

app.use(allRouter);

app.listen(PORT, () => {
    console.log('开启服务器，正在访问localhost:5454');
});