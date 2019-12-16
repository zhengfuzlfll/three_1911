/* 引入mongodb模块 第三方模块*/
const mongodb = require("mongodb");
console.log(mongodb);
const MongoClient = mongodb.MongoClient
// console.log(MongoClient);

// MongoClient.connect("mongodb://localhost:27017", function (err, client) {
//     /* err 连接数据库失败时的错误信息，默认null*/
//     /* client  连接成功 后mongodb客户端*/
//     if (err) throw err;
//     /* 通过client.db()获取某个数据库，无则自动创建 */
//     let db = client.db("h51911");
//     /* 获取集合 */
//     let collection = db.collection("user");

//     /* 文档操作 */
//     // db.user.insertOne({
//     //     name: "jingjing",
//     //     adr: "baise"
//     // })
//     /* 插入一条数据 */
//     collection.insertOne({
//         name: "jingjing",
//         adr: "baise"
//     })

//     /* 关闭数据库连接 ，释放资源占用*/
//     client.close();
//     /* 每次都要连接数据库   创建及关闭  封装方法*/
// });

async function connect() {
    // return new Promise((resolve, reject) => {
    //     MongoClient.connect("mongodb://localhost:27017", function (err, client) {
    //         /* err 连接数据库失败时的错误信息，默认null*/
    //         /* client  连接成功 后mongodb客户端*/
    //         if (err) throw err;
    //         /* 通过client.db()获取某个数据库，无则自动创建 */
    //         const db = client.db("h51911");



    //         resolve({
    //             client,
    //             db
    //         })
    //     });
    // })

    /*   MongoClient.connect  本身即为Promise对象*/
    /* 只要是promise对象，就能用await */
    /* http://localhost:2020/ */
    const client = await MongoClient.connect("mongodb://localhost:27017");
    /* 同步的代码实现异步的操作 */
    const db = client.db("h51911");
    /* return */
    return {
        client,
        db
    }
}



/* 增 */
async function create() {
    /* 获取到db,client对象 */
    let {
        db,
        client
    } = await connect();
    // connect();
    /* 获取合集 */
    let collection = db.collection("user");

    /* 文档操作 */
    /* 查询 须将数据装换为数组 toArray */
    collection.find().toArray((err, result) => {
        console.log("result=" + result);

    })



    /*操作完成后 关闭数据库连接 ，释放资源占用*/
    client.close();
    /* 每次都要连接数据库   创建及关闭  封装方法*/
}
/* 删 */
function remove() {

}
/* 改 */
function update() {

}
/* 查 */
function find() {

}

/* 导出 */
module.exports = {
    create,
    remove,
    updata,
    find
}