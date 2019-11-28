const express = require("express");

const app = express();

app.use(express.static("./"))

app.listen(2020, () => {
    console.log("成功开启服务器，端口号2020");

})