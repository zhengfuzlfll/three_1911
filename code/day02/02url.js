let url = require("url");

let str = 'http://www.baidu:8888/list?name=malin&adr=guangxi#231';
// console.log(url.parse(str)); /* 以对象方式打印 */
/* 拿到路径，获取某一段 */

// let obj = url.parse(str, true).query; /* 得到  对象 */
// console.log(obj.adr);


/* 路径的合并   resolve()方法只有两个参数,参数多个则忽略后面的参数*/
let str2 = url.resolve("http://www.qq.com/", "/list/index.html", "/localhost/g1.jpg");
console.log(str2);