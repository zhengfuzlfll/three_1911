/* 爬取网页图片至本地    由主页面跳转二级页面，获取二级页面的高清大图*/
const fs = require("fs");
const request = require("request");
const cheerio = require("cheerio");
const path = require("path");

request("https://www.pzhan.com/", (err, res, body) => {
    // console.log(body);/* HTML     */

    let $ = cheerio.load(body); /* 加载HTML  操纵节点 */

    let i = 1; /* 重命名 */
    $(".main-content .pic-content li").each((index, ele) => {
        // console.log(ele);
        // let $ = cheerio(body);
        let href = $(ele).find(".pic a").attr("href");
        // console.log(href);
        request(href, (err2, res2, body2) => {
            let $ = cheerio.load(body2);
            // console.log(body2);

            let imgsrc = $(".works-show img").attr("src"); /* undefined */
            // let 
            if (imgsrc != undefined) {
                let filename = path.basename(imgsrc); /* 原来的文件名 */
                let ext = path.extname(path.basename(imgsrc)); /* 后缀名  .jpg   */
                //     // console.log(imgsrc, filename);

                console.log(`${i}${ext}`);

                let writestr = fs.createWriteStream("./img/" + `${i}${ext}`);
                // console.log(writestr);
                //     console.log(imgsrc);


                request(imgsrc).pipe(writestr);
                // writestr.end("爬取完成");
                writestr.on("finish", () => {
                    console.log("写入完成");
                })
                i++;
            }

            // let writestr = fs.createWriteStream("./img / " + filename);
            // request(urlstr).pipe(writestr);
            // writestr.end("爬取完成");


            // let filename = path.basename(imgsrc);
            // // console.log(filename);

            // /* */

        })


        // if (href.startsWith("/")) {
        //     /* 判断以 /  开头才是想要的路径 */
        //     let pathurl = "http://www.netbian.com" + href; /* 拼接得到二级页面的路径 */

        //     /* 发送第二次请求 */
        //     request(pathurl, (err2, res2, body2) => {
        //         // console.log(body);
        //         let $ = cheerio.load(body2); /* 二级页面的html */
        //         // console.log($);

        //         let urlstr = $(".pic img").attr("src");
        //         // console.log(urlstr);

        //         let filename = path.basename(urlstr); /* 提取文件的本来的文件名 */

        //         // /* 发送第三次请求  写入图片 */
        //         let writestr = fs.createWriteStream("./img/" + filename);
        //         request(urlstr).pipe(writestr);
        //         writestr.end("爬取完成");
        //     })
        // }
    })
})