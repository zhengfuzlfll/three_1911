/* 爬取数据---爬虫 */
/* fs模块 */
const fs = require("fs");
/* require */
const request = require("../node_modules/request");
/* cheerio   类似jq的DOM操作*/
const cheerio = require("../node_modules/cheerio");

request("https://cnodejs.org/", (err, res, body) => {
    // console.log(body);/* 得到HTML页面 */

    // let $ = $("#main .list li").find("a").attr("href");
    // let 
    let $ = cheerio.load(body); /* 将html资源加载进来,则可以操作DOM 节点 */

    let arr = [];
    $("#topic_list .cell").each((index, ele) => {
        let o = {};
        o.id = index + 1;
        o.img = $(ele).find(".user_avatar img").attr("src");
        o.title = $(ele).find(".topic_title").text().trim(); //用html 会出现乱码，只能用text
        arr.push(o);
    })
    console.log(arr);
    
    


})