(() => {
    /* 预加载，否则找不到节点 */
    window.onload = function () {


        let vm = new Vue({
            el: "#app",
            // data: {
            data: {
                delidx1: 0,
                delidx2: 0,
                deldisplay: false,
                goods: [{
                    shopname: "搜猎人艺术生活",
                    shopid: 1,
                    shopselect: false,
                    // 删除的下标
                    ordercontent: [{
                            gid: 1,
                            gimg: "./images/1.png",
                            gtext: "夏季男士迷彩无袖T恤1",
                            gnum: 3,
                            maxnum: 10,
                            gselect: false,
                            price: "180"
                        }, {
                            gid: 2,
                            gimg: "./images/2.png",
                            gtext: "夏季男士迷彩无袖T恤2",
                            gnum: 1,
                            maxnum: 5,
                            gselect: false,
                            price: "280"
                        },
                        {
                            gid: 3,
                            gimg: "./images/3.png",
                            gtext: "夏季男士迷彩无袖T恤3",
                            gnum: 1,
                            maxnum: 8,
                            gselect: false,
                            price: "380"
                        }
                    ]
                }, {
                    shopname: "卷卷旗舰店",
                    shopid: 2,
                    shopselect: false,
                    ordercontent: [{
                        gid: 4,
                        gimg: "./images/4.png",
                        gtext: "夏季男士迷彩无袖T恤4",
                        gnum: 1,
                        maxnum: 6,
                        gselect: false,
                        price: "580"
                    }, {
                        gid: 5,
                        gimg: "./images/5.png",
                        gtext: "夏季男士迷彩无袖T恤5",
                        gnum: 1,
                        maxnum: 3,
                        gselect: true,
                        price: "680"
                    }]
                }]
            },
            // }
        })
    }
})()