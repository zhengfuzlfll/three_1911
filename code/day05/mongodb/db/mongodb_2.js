// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
/* 导入mongodb模块 */
const {
    MongoClient
} = require('mongodb');

/*连接数据库 */

// MongoClient.connect('mongodb://localhost:27017', function (err, client) {

// })

// const {
//     dbUrl,
//     dbName
// } = require('../config.json');
const {
    mongodbUrl,
    DBname
} = require("../config.json");

// console.log(mongodbUrl);

// const {
//     DBname
// } = require("../config.json");
console.log(DBname);

function connect() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(mongodbUrl, function (err, client) {
            // err 连接数据库失败时的错误信息，默认null
            // client 连接成功后mongodb客户端
            // const db = client.db('h51911');
            const db = client.db(DBname)


            resolve({
                client,
                db
            })
        });
    })

}



// 增
async function create() {
    /* 连接 */
    // connect();
    let {
        db,
        client
    } = await connect();
    const col = db.collection('song');

    /*文档 操作 */



    /* 操作完场  关闭数据库 */
    client.close()
}
// 删
function remove() {

}
// 改
function updata() {

}
// 查
function find() {

}
module.exports = {
    create,
    remove,
    updata,
    find
}