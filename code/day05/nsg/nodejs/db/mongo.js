const {
  MongoClient
} = require('mongodb');

const {
  DBurl,
  DBname
} = require('../config.json');
console.log(DBurl, DBname);


async function connect() { //连接mongo数据库
  let client = await MongoClient.connect(DBurl);
  let db = client.db(DBname);
  return {
    db,
    client
  }
}

/**
 * @description: 增
 * @param {string} 集合名字 colname
 * @param {array} 数组      data
 * @return: object
 */

async function create(colname, data) {
  let {
    db,
    client
  } = await connect();

  let col = db.collection(colname);
  let result = await col.insertMany(data);
  console.log(result);
  client.close();
  return result;
}

/**
 * @description: 删 
 * @param {string} 集合名字 colname
 * @param {object} 条件     query
 * @return: object
 */

async function remove(colname, query) {
  let {
    db,
    client
  } = await connect();
  let col = db.collection(colname);
  let result = await col.deleteMany(query);

  client.close();
  return result;
}

/**
 * @description: 改
 * @param {string} 集合名字 colname
 * @param {object} 条件     query
 * @param {object} 数据     newdata
 * @return: object
 */
async function update(colname, query, newdata) {
  let {
    db,
    client
  } = await connect();
  let col = db.collection(colname);

  let result = await col.updateMany(query, newdata);

  client.close();
  return result;
}

/**
 * @description: 查
 * @param {string} 集合名字 colname
 * @param {object} 条件     query
 * @return: object
 */

// async function find(colname, query) {
//   try {
//     let { db, client } = await connect();
//     let col = db.collection(colname);

//     let result = await col.find(query).toArray();

//     client.close();
//     return result;
//   } catch{
//     console.log(err);
//   }
// }

async function find(colname, qurey) {
  try {
    let {
      db,
      client
    } = await connect(); //await只能接收成功的回调resolve
    // obj.then().catch()
    let col = db.collection(colname); //无则自动创建
    //数据的CRUD操作
    let result = await col.find(qurey).toArray(); //查找数据
    // console.log(result);

    //关闭数据库
    client.close();
    return result; //返回查询结果,返回给入口
  } catch (ev) {
    console.log(err);
  }

}

module.exports = {
  create,
  remove,
  update,
  find
}