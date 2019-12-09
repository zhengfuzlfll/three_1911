// (() => {
window.onload = function () {
    /* 需要进行页面预加载，否则找不到元素节点 */

    let vm = new Vue({
        el: "#app",
        data: {
            orderlist: [{
                shopname: "卷卷旗舰店",
                list: [{
                        img: "images/1.png",
                        detail: '夏季男士迷彩无袖T恤圆领潮流韩版修身男装背心青年时尚打底衫男',
                        size: '规格：默认',
                        size2: '尺寸：16*16*3(cm)',
                        price: '100',
                        num: 1,
                        totalprice: '100',
                        reduce: "reduce reSty"
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
                        reduce: "reduce reSty"
                        // removeOrder: '移除商品'
                    }
                ]
            }, {
                shopname: "卷卷旗舰店",
                list: [{
                        img: "images/1.png",
                        detail: '夏季男士迷彩无袖T恤圆领潮流韩版修身男装背心青年时尚打底衫男',
                        size: '规格：默认',
                        size2: '尺寸：16*16*3(cm)',
                        price: '50',
                        num: 1,
                        totalprice: '50',
                        reduce: "reduce reSty"
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
                        reduce: "reduce reSty"
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
                        reduce: "reduce reSty"
                        // removeOrder: '移除商品'
                    }
                ]
            }],
            modifynum: 1,
            del: "none",
            /* 是否显示删除 */
            check: false,
            /* 是否勾选 */
            hasMark: false,
            /* 全选---是否有mark属性   */
            // dipslayMark: '',
            listMark: true



        },

        /* 计算属性---- */
        computed: {
            /* 全选 */
            checkAll: {
                get() {
                    /* 获取  m-v  需要 return*/
                    // return this.dipslayMark = ""
                    // return this.hasMark = !this.hasMark
                    console.log(666);

                },
                set(val) {
                    /* 设置 v-m   监听修改的值*/
                    // return this.dipslayMark = "mark"
                    // this.checked() = !this.checked

                    console.log(val);

                }

            }
        },




        /* 方法-- */
        methods: {
            /* 增加商品数量 */
            addNum(i, ids) {
                // this.list[i].num = this.list[i].num + 1
                console.log(i, ids); /* i---店铺，ids相应店铺的相应商品 */
                let target = this.orderlist[i];
                target.list[ids].num++;
                target.list[ids].totalprice = (target.list[ids].num) * 1 * target.list[ids].price * 1
                // this.orderlist[i].list[i].num = this.orderlist[i].list[i].num + 1;
                // this.list[i].num = this.num + 1;
                // this.orderlist.forEach((item, index) => {
                // console.log(item); /*   item 为  list   */

                //     // if (i == index) {
                //     //     item.num = item.num + 1;
                //     // }
                //     // console.log(item);
                //     // console.log(item);

                // item.list.forEach((ele, id) => {
                // console.log(ele); /*  5 */
                // console.log(id);

                // ele.num = ele.num + 1;
                // console.log(le[id]);
                // ele[i]
                // if (i == id) {
                //     console.log(ele);

                // }
                // })

                // });
                // for (let j = 0; j < this.orderlist.length; i++) {
                // console.log(this.orderlist.length);
                // console.log(666);

                // }

            },

            /* 减少商品数量 */
            cutNum(i, ids) {
                console.log(i, ids); /* i---店铺，ids相应店铺的相应商品 */
                // if (this.num > 0) {
                let target = this.orderlist[i];
                // target.list[ids].num++;
                // }
                // console.log(666 );
                // let target = this.orderlist[i].list[ids].num;
                // console.log(target);
                let amount = target.list[ids].num


                if (amount > 1) {
                    // console.log(666);
                    amount--;
                    target.list[ids].num = amount;
                    console.log(amount);
                    target.list[ids].totalprice = (target.list[ids].price) * 1 * amount * 1
                    // target.list[ids].totalprice = (target.list[ids].num) * 1 * amount * 1
                    // let target = this.orderlist[i];
                    // target.list[ids].num--;
                    // this.orderlist[i].list[ids].num--
                    // target.list[ids].totalprice = (target.list[ids].num) * 1 * target.list[ids].price * 1
                    // amount--;
                    // target.list[ids].totalprice = (target.list[ids].num) * 1 * target.list[ids].price * 1

                }

            },

            /* 删除商品 */
            delGood(id) {
                this.del = "block"
                // console.log(id);

            },

            /* 取消删除 */
            cancelDel() {
                // console.log(eve);
                this.del = "none"
            },
            /* 确定删除 */
            sureDel(shopId, goodsId) {
                console.log(shopId, goodsId);

                // let target = this.orderlist[shopId];
                // target.list.slice(goodsId, 1)
                // this.del = "none";
            },

            /*全选 是否有mark 属性 */
            checked() {
                return this.hasMark = !this.hasMark
            },
            // check2() {
            //     return this.hasClass = !this.hasClass
            // }
            /* 减号按钮，数量为1 更改颜色    即class改变 */
            reduceResty() {
                if (this.num >= 2) {
                    this.reduce = "reduce";
                } else {
                    this.reduce = "reduce reSty"
                }
            },


        }
    })
}
// })()