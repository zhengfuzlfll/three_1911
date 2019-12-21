// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

/* 引入第三方模块 */
const {
    MongoClient
} = require('mongodb');

/* 文件模块 */
const {
    /*mongodb 路径 */
    DBUrl,
    /* 数据库名字 */
    DBname
} = require('../config.json')
// console.log(DBUrl, DBname);


/*
    实现数据的增删改查 CRUD
    1、连接数据库  connect()
    2、数据的增删改查 create() remove() update() find()  
    3、关闭数据库close()  现有
    4、
    5、
 */

// 1、连接数据库
/* 封装方法 connect()  */
async function connect() {
    /* 方案一 promise */
    // return new Promise((resolve, reject) => {
    //     MongoClient.connect(DBUrl, (err, client) => {
    //         // if (err) throw err;
    //         if (err) reject(err);
    //         let db = client.db(DBname);

    //         resolve({
    //             db,
    //             client
    //         });
    //         /* 成功连接数据库后，返回两个子对象 ，调用connect（）方法时就可以得到这个对象，就可以调用名的方法了 （调用就得到一个promise对象）*/
    //     })
    // })

    /* 方案二 MongoClient.connect(DBUrl) 本身为promise对象*/
    let client = await MongoClient.connect(DBUrl);
    let db = client.db(DBname);

    return {
        client,
        db
    }
}

/* 增 create() colname--集合名字，字符串*/
/* query为数组 */
async function create(colname, query) {
    try {
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
    } catch {
        console.log(err);
    }
}

// create('user', [{
//     id: 7,
//     name: "燃烧我的卡路里",
//     password: '123456'
// }])



/* 增 remove() colname--集合名字，字符串*/
/* query为对象 */
async function remove(colname, query) {
    try {
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
    } catch {
        console.log(err);
    }
}
/* 测试 */
// remove('user', {
//     id: 8
// })
/* deletedCount: 1  删除一条数据（数字为几则删除几条数据） */




/* 改  update
    colname  集合名字 字符串
    query  newdata   对象
*/
async function update(colname, query, newdata) {
    try {
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
    } catch {
        console.log(err);
    }
}

/* col.updateMany 符合条件的全部更改 */
// let result = await col.updateMany({
//     name: "张三66"
// }, {
//     $set: {
//         age: 6666666
//     }
// })

// update('user', {
//     id: 7
// }, {
//     $set: {
//         name: "林深时见鹿"
//     }
// })
/*  modifiedCount: 1   表示一条数据被修改成功（数字为修改的条数） */



/*查    查找功能 find()  query为对象*/
async function find(colname, query) {
    try {
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
    } catch {
        /*catch 接收到promise里reject的数据  */
        console.log(err);
    }
}
/*  调用*/
/* 通用性：参数=>  集合名字colname,查询条件query */

// find('user', {
//     name: "zs"
// });

// let res = find('user', {
//     name: "zs"
// });

// console.log(res);


/* 导出模块 */
// module.exports = mongo;