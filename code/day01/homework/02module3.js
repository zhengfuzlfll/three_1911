/* 单体写法 */
/* 传递参数 */
let sum = function (a, b) {
    return a + b;
}

let toDoble = function (num) {
    if (num < 10) {
        return "0" + num;
    } else {
        return '' + num;
    }
}

module.exports = {
    sum,
    toDoble
}