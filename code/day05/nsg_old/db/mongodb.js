/*导入mongodb模块 方案一 */
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

/* 导入mongodb模块 方案二*/
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

async function connect() {
    // return new Promise((resolve, reject) => {
    //     MongoClient.connect(mongodbUrl, function (err, client) {
    //         // err 连接数据库失败时的错误信息，默认null
    //         // client 连接成功后mongodb客户端
    //         // const db = client.db('h51911');
    //         const db = client.db(DBname)


    //         resolve({
    //             client,
    //             db
    //         })
    //     });
    // })

    /*  MongoClient.connect 得到的结构即为promise对象 */
    // return MongoClient.connect(mongodbUrl)
    /* 只要是primise对象，就能用await拿到它的 结果*/
    /* 传入回调，结构就在回调里出现 */
    /* 使用async得到promise 对象 */
    const client = await MongoClient.connect(mongodbUrl);
    const db = client.db(DBname);
    return {
        client,
        db
    }
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
    col.find().toArray((err, result) => {
        console.log(result);

    })

    /* 操作完场  关闭数据库 */
    client.close()
}
/* 调用 */
create();

// 删
function remove() {

}
// 改
function update() {

}
// 查
function find() {

}

/* CRUD  导出*/
module.exports = {
    create,
    remove,
    update,
    find
}