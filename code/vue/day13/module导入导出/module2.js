let aobj = {
    name: "静静",
    show: function () {
        console.log(this.name);

    }
}

function show2() {
    console.log("show2");

}

/* 导出一个变量   默认值*/
/* 方法1 */
// let username = "老谢";
// let password = "123456";

// export default {
//     username,
//     password
// }
/* 方法2fan */
export default {
    username: "老谢6666666666",
    password: 123456
}