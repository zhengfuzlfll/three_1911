const {
    MongoClient
} = require('mongodb');


const {
    DBUrl,
    DBname
} = require('../config.json')


async function connect() {

    let client = await MongoClient.connect(DBUrl);
    let db = client.db(DBname);

    return {
        client,
        db
    }
}

async function create(colname, query) {
    // try {
    /* 1、连接数据库 */
    let {
        client,
        db
    } = await connect();
    /* 2、找到集合 */
    let col = db.collection(colname);
    /* 3、插入数据 */
    let result = await col.insertMany(query)
    console.log(result);
    /*4、 关闭数据库 */
    client.close();
    // } catch {
    //     console.log(err);
    // }
}




async function remove(colname, query) {
    // try {
    /* 1、连接数据库 */
    let {
        client,
        db
    } = await connect();
    /* 2、找到集合 */
    let col = db.collection(colname);
    /* 3、删除数据 */
    let result = await col.deleteMany(query)
    console.log(result);
    /*4、 关闭数据库 */
    client.close();
    // } catch {
    //     console.log(err);
    // }
}

async function update(colname, query, newdata) {
    // try {
    /* 1、连接数据库 */
    let {
        client,
        db
    } = await connect();
    /* 2、找到集合 */
    let col = db.collection(colname);
    /* 3、更新数据 */
    let result = await col.updateMany(query, newdata)
    console.log(result);
    /*4、 关闭数据库 */
    client.close();
    // } catch {
    //     console.log(err);
    // }
}


async function find(colname, query) {
    // try {
    let {
        client,
        db
    } = await connect();
    /* await 只能接收成功的回调,即resolve的回调 */

    let col = db.collection(colname)
    let result = await col.find(query).toArray(); /* promise对象 */
    console.log(result);

    // 3、关闭数据库close()
    client.close()
    return result; /* 返回查询结构，返回给入口 */
    // } catch {
    //     /*catch 接收到promise里reject的数据  */
    //     console.log(err);
    // }
}


/* 导出模块 */
module.exports = {
    create,
    remove,
    update,
    find
};