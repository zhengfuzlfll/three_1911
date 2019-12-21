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
function connect() {
    /* 方案一 promise */
    return new Promise((resolve, reject) => {
        MongoClient.connect(DBUrl, (err, client) => {
            // if (err) throw err;
            if (err) reject(err);
            let db = client.db(DBname);

            resolve({
                db,
                client
            });
            /* 成功连接数据库后，返回两个子对象 ，调用connect（）方法时就可以得到这个对象，就可以调用名的方法了 （调用就得到一个promise对象）*/
        })
    })


}


/* 查找功能 find() */
async function find(colname, query) {
    try {
        let {
            client,
            db
        } = await connect();
        /* await 只能接收成功的回调,即resolve的回调 */

        let col = db.collection(colname)
        let result = await col.find(query).toArray(); /* promise对象 */
        // console.log(result);

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
let res = find('user', {
    name: "zs"
});



/* 导出模块 */
// module.exports = mongo;