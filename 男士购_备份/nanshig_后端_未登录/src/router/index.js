import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from "../components/Home";
import GoodsList from "../components/GoodsList";
import GoodsKinds from "../components/GoodsKinds";
import AddGoods from "../components/AddGoods";
import ChangeGoodsInfo from "../components/ChangeGoodsInfo";
import UserList from "../components/UserList";
import AddUser from "../components/AddUser";
import ChangeUserInfo from "../components/ChangeUserInfo";
import OrderForm from "../components/OrderForm";
import NotFound from "../components/NotFound";

let router = new VueRouter(
    {
        routes: [
            //首页的路由
            {
                name: 'home',
                path: '/home',  //当浏览器地址为/home时，显示Home组件的内容
                component: Home
            },
            {

                path: '/',  //当浏览器地址为/home时，显示Home组件的内容
                redirect: '/home' //重定向
            },
            // 购物车
            {
                name: 'goodslist',
                path: '/goodslist',
                component: GoodsList
            },
            {
                name: 'goodskinds',
                path: '/goodskinds',
                component: GoodsKinds
            }, {
                name: 'addgoods',
                path: '/addgoods',//获取动态路由
                component: AddGoods
            }, {
                name: 'changegoodsinfo',
                path: '/changegoodsinfo',//获取动态路由
                component: ChangeGoodsInfo
            }, {
                name: 'userlist',
                path: '/userlist',//获取动态路由
                component: UserList
            }, {
                name: 'adduser',
                path: '/adduser',//获取动态路由
                component: AddUser
            }, {
                name: 'changeuserinfo',
                path: '/changeuserinfo',//获取动态路由
                component: ChangeUserInfo
            }, {
                name: 'orderform',
                path: '/orderform',//获取动态路由
                component: OrderForm
            },
            {
                name: '404',
                path: '/404',
                component: NotFound
            },
            {
                name: '404',
                path: '*',
                redirect: '/404' //重定向
            }
        ]
    }
);

export default router;