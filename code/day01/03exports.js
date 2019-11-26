/* 单体写法 */
let animal = {
    name: "dog",
    age: "19",
    run: function () {
        console.log("fast");
    },
    eat: function () {
        console.log("66666666");
    }
}

let show = function () {
    console.log("服务器")
}

let showname = {
    banana: "delicious"
}


// module.exports = animal;
// module.exports=animal.eat();
exports.aa = animal;
exports.bb = show;

exports.cc = showname;