// const mongodb = require('mongodb');
// // console.log(mongodb);
// const {
//     MongoClient
// } = mongodb.MongoClient;
// console.log(MongoClient);

// const MongoClient = require('mongodb').MongoClient;
// console.log(MongoClient);


// const {
//     MongoClient
// } = require('mongodb');
// console.log(MongoClient);

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// console.log(MongoClient);
const {
    MongoClient
} = require('mongodb');

//连接mongoDB
MongoClient.connect("mongodb://localhost:27017", function (err, client) {
    // if (err) throw err;

    // // 连接数据库，无则自动创建
    // let db = client.db('h51911');
    // /* 查找合集 */
    // const col = db.collection("song");
    // db.col.insertOne({
    //     name: 'jingjing',
    //     adr: 'baise'
    // });

    /* 判断是否连接成功 */
    // if (err) {
    //     console.log("连接失败");
    // } else {
    //     console.log("连接成功");
    // }

    if (err) throw err;
    const collection = client.db("h51911").collection("song");
    /* 查 */
    collection.find().toArray((err, data) => {
        console.log(data);
        // client.close();
    })

    collection.insertOne({
        name: "海蓝时见鲸",
        time: "2019-12-15"
    })


    client.close();
});