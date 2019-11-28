const fs = require("fs");
const cherrio = require("cheerio");
const request = require("request");
const path = require("path");

request("https://www.newegg.cn/SubCategory/1043.htm", (err, res, body) => {
    // console.log(body);
    let $ = cherrio.load(body);
    console.log($);

    $(".catepro .prolist li").each((index, ele) => {
        // console.log(ele);

        // let urlstr = $(ele).find("img").attr("src");
        // let filename = path.basename(urlstr);
        // let writestr = fs.createWriteStream("./img/" + filename);
        // request(urlstr).pipe(writestr);
        // writestr.end();
        // writestr.on("finish", () => {
        //     console.log("写入完成");

        // })
    })

})