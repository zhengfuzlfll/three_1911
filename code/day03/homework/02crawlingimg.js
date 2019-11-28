const fs = require("fs");
const cheerio = require("cheerio");
const request = require("request");
const path = require("path");

request("https://www.pzhan.com/", (err, res, body) => {
    // console.log(body);
    let $ = cheerio.load(body);
    // console.log($);

    let i = 1; /* 重命名 */
    $(".main-content .pic-content li").each((index, ele) => {
        // console.log(ele);
        let href = $(ele).find(".pic a").attr("href");

        request(href, (err2, res2, body2) => {
            let $ = cheerio.load(body2);
            let imgsrc = $(".works-show img").attr("src"); /*部分为   undefined */

            if (imgsrc != undefined) {
                let ext = path.extname(path.basename(imgsrc)) /*   .jpg   */
                // console.log(i+ext);

                let writestr = fs.createWriteStream("./img/" + `${i}${ext}`);
                request(imgsrc).pipe(writestr);
                writestr.on("finish", () => {
                    console.log("写入完成");
                })
                i++;
            }

        })

    })

})