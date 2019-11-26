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

let food = {
    rice: "perfect"
}


// module.exports = animal; /* 导出单个接口 */
// module.exports=animal.eat();

/* 暴露多个接口，使用对象的方式 */
module.exports = {
    animal: animal,
    food: food
}