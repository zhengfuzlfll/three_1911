const express = require("express");
const app = express();

app.use(express.static("./"));

app.listen(2020, () => {
    console.log("服务器开启成功，端口号为2020");
})