// (() => {
window.onload = function () {
    /* 需要进行页面预加载，否则找不到元素节点 */

    let vm = new Vue({
        el: "#app",
        data: {
            orderlist: [{
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
                }
                // , {
                //     shopname: "卷卷旗舰店",
                //     shopselect: false,
                //     list: [{
                //             img: "images/1.png",
                //             detail: '夏季男士迷彩无袖T恤圆领潮流韩版修身男装背心青年时尚打底衫男',
                //             size: '规格：默认',
                //             size2: '尺寸：16*16*3(cm)',
                //             price: '100',
                //             num: 1,
                //             totalprice: '100',
                //             reduce: "reduce reSty",
                //             goodselect: false
                //             // removeOrder: '移除商品'
                //         },
                //         {
                //             img: "images/2.png",
                //             detail: '夏季男士迷彩无袖T恤圆领潮流韩版修身男装背心青年时尚打底衫男',
                //             size: '规格：默认',
                //             size2: '尺寸：16*16*3(cm)',
                //             price: '10',
                //             num: 1,
                //             totalprice: '10',
                //             reduce: "reduce reSty",
                //             goodselect: false
                //             // removeOrder: '移除商品'
                //         }
                //     ]
                // }
            ],




        },

        /* 计算属性---- */
        computed: {
            /* 全选 */
            // checkAll: {
            //     get() {
            //         /* 获取  m-v  需要 return*/
            //         // return this.dipslayMark = ""
            //         // return this.hasMark = !this.hasMark
            //         // console.log(666);
            //         return this.orderlist.every(item => {
            //             return item.shopselect;
            //         })
            //     },
            //     set(val) {
            //         /* 设置 v-m   监听修改的值*/
            //         // return this.dipslayMark = "mark"
            //         // this.checked() = !this.checked

            //         // console.log(val);

            //         this.orderlist.forEach(item => {
            //             item.shopselect = val;
            //         })

            //     }

            // }
        },




        /* 方法-- */
        methods: {
            // /* ---店铺全选--- */
            shopchoice(idx) {
                console.log(idx);
                this.orderlist[idx].shopselect = !this.orderlist[idx].shopselect
                this.orderlist[idx].list.forEach(item => {
                    item.goodselect = this.orderlist[idx].shopselect
                })
            }


        }
    })
}
// })()