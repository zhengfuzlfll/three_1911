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
                isselected: false,
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
                            gselect: false,
                            price: "680"
                        }]
                    },
                    // {
                    //     shopname: "卷卷旗舰店",
                    //     shopid: 2,
                    //     shopselect: false,
                    //     ordercontent: [{
                    //         gid: 4,
                    //         gimg: "./images/4.png",
                    //         gtext: "夏季男士迷彩无袖T恤4",
                    //         gnum: 1,
                    //         maxnum: 6,
                    //         gselect: false,
                    //         price: "580"
                    //     }, {
                    //         gid: 5,
                    //         gimg: "./images/5.png",
                    //         gtext: "夏季男士迷彩无袖T恤5",
                    //         gnum: 1,
                    //         maxnum: 3,
                    //         gselect: false,
                    //         price: "680"
                    //     }]
                    // }
                ]
            },
            // }
            methods: {
                /* 店铺全选 =>控制商品全选*/
                shopselectall(idx) {
                    console.log(idx);
                    this.goods[idx].shopselect = !this.goods[idx].shopselect
                    /* 店铺全选，控制相应商品全选 */
                    this.goods[idx].ordercontent.forEach((item, index) => {
                        item.gselect = this.goods[idx].shopselect;
                    });
                },

                /* 商品勾选=>店铺勾选 */
                goodsselect(id1, id2) {
                    this.goods[id1].ordercontent[id2].gselect = !this.goods[id1].ordercontent[id2].gselect
                    let istrue = this.goods[id1].ordercontent.every(item => {
                        return item.gselect;
                    });

                    this.goods[id1].shopselect = istrue;
                }


                ,
                /* 总的全选  =>控制店铺 */
                all() {
                    this.isse = !this.isse
                    // return this.goods.every(item => {
                    //     return item.shopselect = !item.shopselect
                    // })
                    // this.goodsselect();
                    if (this.isse) {
                        this.goods.forEach(item => {
                            item.shopselect = true;
                            item.ordercontent.forEach(ele => ele.gselect = true)
                        })
                    } else {
                        this.goods.forEach(item => {
                            item.shopselect = false;
                            item.ordercontent.forEach(ele => ele.gselect = false)
                        })
                    }

                }
            },
            computed: {
                /* 全选 */
                // selectall: {
                //     get() {
                //         /* every 一假必假 全真为真*/
                //         return this.goods.every((item, index) => {
                //             return item.shopselect
                //         })
                //     },
                //     set(val) {
                //         console.log(val);

                //         this.goods.forEach(item => {
                //             item.shopselect = val;
                //         })
                //         this.goods.forEach((item, index) => {
                //             item.ordercontent.forEach((item, index) => {
                //                 item.gselect = val;
                //             })
                //         })
                //     }
                // }
                selectall: {
                    get() {

                    },
                    set(val) {
console.log(val);

                    }
                }
            }
        })
    }
})()