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

    /* 查   toArray*/
    // col.find().toArray((err, data) => {
    //     console.log(data);
    // })

    /*增 插入 */
    /* 插入一条数据 */
    // let result = await col.insertOne({
    //     name: "wc",
    //     password: "123456"
    // });
    // // console.log(result); //  promise对象，
    // if (result.insertedCount) {
    //     /* result.insertedCount插入成功则为1 */
    //     console.log('插入成功');
    // } else {
    //     console.log('插入失败');
    // }

    /* 插入多条数据（也可以只有一条数据，但必须为数组形式）  要用数组+对象（） */

    // let result = await col.insertMany([{
    //     name: "zl",
    //     password: "123456666"
    // }, {
    //     name: "张三66",
    //     age: 18666
    // }])

    // if (result.insertedCount) {
    //     /* result.insertedCount插入成功则为1 */
    //     console.log('插入成功');
    // } else {
    //     console.log('插入失败');
    // }



    /* 删 */
    /* 删除多个  删除所有符合条件的 */
    // let result = await col.deleteMany({
    //     name: "张三"
    // })

    /*删除一个，若多个同名，从上往下，删除第一个 */
    // let result = await col.deleteOne({
    //     name: '张三'
    // })
    // // console.log(result); /* promise对象 */
    // if (result.deletedCount) {
    //     console.log('删除成功');
    // } else {
    //     console.log('删除失败');
    // }



    /* 改  没有要更改字段的数据则添加   有更改的字段则更改，字段及值都相同，从上往下第一个被更改*/
    /* col.updateOne */
    // let result = await col.updateOne({
    //     name: "张三66"
    // }, {
    //     $set: {
    //         age: 6666666
    //     }
    // })
    // console.log(result);

    /* col.updateMany 符合条件的全部更改 */
    // let result = await col.updateMany({
    //     name: "张三66"
    // }, {
    //     $set: {
    //         age: 6666666
    //     }
    // })

    // if (result.modifiedCount) {
    //     console.log("更改成功");

    // } else {
    //     console.log("更改失败");

    // }



    /* 查   toArray*/
    /* 查全部的 */
    // col.find().toArray((err, data) => {
    //     if (err) throw err;
    //     console.log(data);
    // })

    /* toArray 把数据转成数组[{}] 查询到所有满足条件的数据*/
    // let result = await col.find({
    //     name: "张三66"
    // }).toArray();
    // console.log(result);


    /*  */




    /* 插入成功，关闭连接 */
    client.close();
});