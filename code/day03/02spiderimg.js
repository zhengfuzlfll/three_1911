/* 爬取网页图片至本地    由主页面跳转二级页面，获取二级页面的高清大图*/
const fs = require("fs");
const request = require("request");
const cheerio = require("cheerio");
const path = require("path");

request("http://www.netbian.com/index.htm", (err, res, body) => {
    // console.log(body);/* HTML     */

    let $ = cheerio.load(body); /* 加载HTML  操纵节点 */
    $("#main .list li").each((index, ele) => {
        // console.log(ele);
        // let $ = cheerio(body);
        let href = $(ele).find("a").attr("href");
        if (href.startsWith("/")) {
            /* 判断以 /  开头才是想要的路径 */
            let pathurl = "http://www.netbian.com" + href; /* 拼接得到二级页面的路径 */

            /* 发送第二次请求 */
            request(pathurl, (err2, res2, body2) => {
                // console.log(body);
                let $ = cheerio.load(body2); /* 二级页面的html */
                // console.log($);

                let urlstr = $(".pic img").attr("src");
                // console.log(urlstr);

                let filename = path.basename(urlstr); /* 提取文件的本来的文件名 */

                // /* 发送第三次请求  写入图片 */
                let writestr = fs.createWriteStream("./img/" + filename);
                request(urlstr).pipe(writestr);
                writestr.end("爬取完成");
            })
        }
    })
})