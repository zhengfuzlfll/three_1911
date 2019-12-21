/* 引入mongoDB模块 */
const {
    MongoClient
} = require('mongodb');

const {
    mongodbUrl,
    DBname
} = require('./config.json')

//连接mongoDB
MongoClient.connect(mongodbUrl, function (err, client) {
    if (err) throw err;
    const db = client.db(DBname)
    const col = db.collection("user");

    /* 查   toArray*/
    // col.find().toArray((err, data) => {
    //     console.log(data);
    // })
    /* 插入 */
    let result = col.insertOne({
        name: "ls",
        password: 123456
    })
    console.log(result); //得到promise对象


    client.close();
});