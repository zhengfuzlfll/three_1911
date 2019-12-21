/* 引入mongoDB模块 */
const {
    MongoClient
} = require('mongodb');

const {
    mongodbUrl,
    DBname
} = require('./config.json')

//连接mongoDB
MongoClient.connect(mongodbUrl, async function (err, client) {
    if (err) throw err;
    const db = client.db(DBname)
    const col = db.collection("user");

    /* 查询所有数据 */
    // let result = await col.find({}).toArray();
    // console.log(result);

    // /* 查询id>1 $gt */
    // let result = await col.find({
    //     id: {
    //         $gt: 1
    //     }
    // }).toArray();
    // console.log(result);

    // /* 查询id<2 $lt */
    // let result = await col.find({
    //     id: {
    //         $lt: 2
    //     }
    // }).toArray();
    // console.log(result);

    // /* 查询id<=2 $lte */
    // let result = await col.find({
    //     id: {
    //         $lte: 2
    //     }
    // }).toArray();
    // console.log(result);

    // /* 查询id>=3 $gte */
    // let result = await col.find({
    //     id: {
    //         $gte: 3
    //     }
    // }).toArray();
    // console.log(result);

    /* 查询id=3 "id": 3  */
    // let result = await col.find({
    //     "id": 3
    // }).toArray();
    // console.log(result);


    // /* 查询id ！=3 "id": 3  */
    // let result = await col.find({
    //     id: {
    //         $ne: 3
    //     }
    // }).toArray();
    // console.log(result);


    /* 查询id 为1 和id为3  */
    // let result = await col.find({
    //     id: {
    //         $in: [1, 3]
    //     }
    // }).toArray();
    // console.log(result);
    // let result = await col.find({
    //     id: {/* 若没有这个数据则查不到（不报错），若两个id都不存在，返回空数组 [] */
    //         $in: [1, 8]
    //     }
    // }).toArray();
    // console.log(result);



    /* 查询id 不为1 和id为3  */
    // let result = await col.find({
    //     id: {
    //         $nin: [1, 3]
    //     }
    // }).toArray();
    // console.log(result);


    // /* 查找名字和密码符合的 */
    // let result = await col.find({
    //     name: 'zs',
    //     password: "123456"
    // }).toArray();
    // console.log(result);


    // /* 查找名字为zs或 id为5*/
    // let result = await col.find({
    //     $or: [{
    //         id: 5
    //     }, {
    //         name: 'zs'
    //     }]
    // }).toArray();
    // console.log(result);



    /* 查找价格区间   1<id<3*/
    let result = await col.find({
        id: {
            $gt: 1,
            $lt: 3
        }
    }).toArray();
    console.log(result);



    /* 插入成功，关闭连接 */
    client.close();
});