/* 引入mongodb模块 */
const mongodb = require("mongodb");
console.log(mongodb);
// const MongoClient = mongodb.MongoClient
// console.log(mongoClient);

// MongoClient.connect("mongodb://localhost:27017", function (err, client) {
//     if (err) throw err;
//     let db = client.db("h51911")
//     let test = db.collection("test");

//     db.test.insertOne({
//         name: "jingjing",
//         adr: "baise"
//     })
// })