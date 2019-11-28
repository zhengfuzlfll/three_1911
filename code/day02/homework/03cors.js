const http = require("http");
const request = require("request");



// http.createServer((req, res) => {
// request('https://www.toutiao.com/api/pc/hot_gallery/?widen=1', (err2, res2, body2) => {
//     res.writeHead(200, {
//         /* 设置响应头，实现cors跨域的关键 */
//         'Access-Contorl-Allow-Origin': "*" /*  *表示所有人都可以访问  */
//     })
//     res.end(body2)

//     //     console.log(body2);

// });

// }).listen(2020, () => {
//     console.log("服务器开启，端口号2020");

// })
http.createServer((req, res) => {
    // console.log();

    request('https://m.toutiao.com/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A1D5FDAD3CEE75C&cp=5DDC5EA765ECEE1&min_behot_time=0&_signature=OkhsuAAAZ5rSkk7FZpFisDpIbK&i=', (err, res2, body) => {

        res.writeHead(200, { //设置响应头，是实现cors的关键
            'Content-Type': 'text/plain;charset=utf-8', //不加这个会返回乱码，因为下面返回的数据是中文
            'Access-Control-Allow-Origin': 'http://127.0.0.1:2030'
            /*   
                * 所有人都可以访问该接口
               'http://127.0.0.1:2030' 单个端口号可以访问
               多个端口号？
             */
        });

        res.end(body) /* 使用http  服务器的响应的res */


    });

}).listen(2020, () => {
    console.log("服务器开启，端口号2020");

})