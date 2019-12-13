(() => {
    window.onload = function () {
        let vm = new Vue({
            el: "#app",
            data: {
                /* 总的全选 */
                selectall: false,
                orderlist: [{
                    shopname: "卷卷旗舰店",
                    shopselect: false,
                    list: [{
                            img: "images/1.png",
                            detail: '夏季男士迷彩无袖T恤圆领潮流韩版修身男装背心青年时尚打底衫男',
                            size: '规格：默认',
                            size2: '尺寸：16*16*3(cm)',
                            price: '100',
                            num: 5,
                            totalprice: '100',
                            reduce: "reduce reSty",
                            goodselect: false
                            // removeOrder: '移除商品'
                        },
                        {
                            img: "images/2.png",
                            detail: '夏季男士迷彩无袖T恤圆领潮流韩版修身男装背心青年时尚打底衫男',
                            size: '规格：默认',
                            size2: '尺寸：16*16*3(cm)',
                            price: '10',
                            num: 1,
                            totalprice: '10',
                            reduce: "reduce reSty",
                            goodselect: false
                            // removeOrder: '移除商品'
                        }
                    ]
                }, {
                    shopname: "卷卷旗舰店",
                    shopselect: false,
                    list: [{
                            img: "images/1.png",
                            detail: '夏季男士迷彩无袖T恤圆领潮流韩版修身男装背心青年时尚打底衫男',
                            size: '规格：默认',
                            size2: '尺寸：16*16*3(cm)',
                            price: '50',
                            num: 1,
                            totalprice: '50',
                            reduce: "reduce reSty",
                            goodselect: false
                            // removeOrder: '移除商品'
                        },
                        {
                            img: "images/2.png",
                            detail: '夏季男士迷彩无袖T恤圆领潮流韩版修身男装背心青年时尚打底衫男',
                            size: '规格：默认',
                            size2: '尺寸：16*16*3(cm)',
                            price: '30',
                            num: 1,
                            totalprice: '30',
                            reduce: "reduce reSty",
                            goodselect: false
                            // removeOrder: '移除商品'
                        },
                        {
                            img: "images/1.png",
                            detail: '夏季男士迷彩无袖T恤圆领潮流韩版修身男装背心青年时尚打底衫男',
                            size: '规格：默认',
                            size2: '尺寸：16*16*3(cm)',
                            price: '1980',
                            num: 1,
                            totalprice: '1980',
                            reduce: "reduce reSty",
                            goodselect: false
                            // removeOrder: '移除商品'
                        }
                    ]
                }, {
                    shopname: "卷卷旗舰店",
                    shopselect: false,
                    list: [{
                            img: "images/1.png",
                            detail: '夏季男士迷彩无袖T恤圆领潮流韩版修身男装背心青年时尚打底衫男',
                            size: '规格：默认',
                            size2: '尺寸：16*16*3(cm)',
                            price: '100',
                            num: 1,
                            totalprice: '100',
                            reduce: "reduce reSty",
                            goodselect: false
                            // removeOrder: '移除商品'
                        },
                        {
                            img: "images/2.png",
                            detail: '夏季男士迷彩无袖T恤圆领潮流韩版修身男装背心青年时尚打底衫男',
                            size: '规格：默认',
                            size2: '尺寸：16*16*3(cm)',
                            price: '10',
                            num: 1,
                            totalprice: '10',
                            reduce: "reduce reSty",
                            goodselect: false
                            // removeOrder: '移除商品'
                        }
                    ]
                }],
            },
            /* 方法 */
            methods: {
                /* 总的全选  控制店铺 */
                all() {
                    this.selectall = !this.selectall
                    if (this.selectall) {
                        this.orderlist.forEach((item, index) => {
                            item.shopselect = true;
                        });
                    } else {
                        this.orderlist.forEach((item, index) => {
                            item.shopselect = false;
                        });
                    }
                },

                /* 店铺=>商品 */
                shopselectall(idx) {
                    // console.log(idx);
                    this.orderlist[idx].shopselect = !this.orderlist[idx].shopselect;
                    /* 商品 => 全选 */
                    this.orderlist[idx].list.forEach(ele => {
                        // item.list.forEach(ele => {
                        ele.goodselect = this.orderlist[idx].shopselect;
                        // })
                    })



                },
                /* 商品=>店铺 */
                goodselectall(id1, id2) {
                    // console.log(id1, id2);
                    // this.orderlist[id1].forEach(item => {
                    //     item.list.forEach(ele => {
                    //         ele.goodselect = !ele.goodselect;
                    //     })

                    // })
                    this.orderlist[id1].list[id2].goodselect = !this.orderlist[id1].list[id2].goodselect;
                    // console.log(this.orderlist[id1]);

                }
            },

            /* 计算属性 */
            computed: {
                allsel: {
                    get() {
                        return this.orderlist.every(item => {
                            return item.shopselect
                        })
                    },
                    set(val) {
                        console.log(val);

                        this.orderlist.forEach(item => {
                            item.shopselect = val;
                        })
                        this.orderlist.forEach((item, index) => {
                            item.list.forEach((item2, index2) => {
                                item2.goodselect = val;
                                // }

                            })
                        })




                    }
                }
            }
        })
    }
})();