const request = require("request");
const cherrio = require("cheerio");
const fs = require("fs");

request("https://cnodejs.org/", (err, res, body) => {
    // console.log(body);
    let $ = cherrio.load(body);

    let arr = [];
    $("#main #topic_list .cell").each((index, ele) => {
        let o = {};
        o.id = index + 1;
        o.img = $(ele).find(".user_avatar img").attr("src");
        o.title = $(ele).find(".topic_title").text().trim();
        o.time = $(ele).find(".last_active_time").text().trim();
        arr.push(o)
        // console.log(o.img);

    })
    // console.log(arr);

    let writestr = fs.createWriteStream("./data/json.json");
    let str = JSON.stringify(arr);
    writestr.write(str);
    writestr.end();
    writestr.on("finish", () => {
        console.log("写入成功");
    })

})