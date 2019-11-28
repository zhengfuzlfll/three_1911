let obj = require("./02module2");/* module.exports使用对象的方式实现暴露多个接口 */
console.log(obj);

console.log(obj.animal.name);
obj.animal.run()
console.log(obj.animal.age);

console.log(obj.food.rice);