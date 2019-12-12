/* 导出 */


let aobj = {
    name: "静静",
    show: function () {
        console.log(this.name);

    }
}

// function show2() {
//     console.log("show2");

// }


/* 暴露模块 export*/
export {
    aobj
};

/* 导出函数 */
export function show2() {
    console.log("show2");

}