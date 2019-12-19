import Vue from 'vue';
// 1. 引入vue­router 
import VueRouter from 'vue-router';

/* 5、引入子组件  通过哈希值的改变切换不同组件 */
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import Reg from '../pages/Reg.vue';
import Cart from '../pages/Cart.vue';
import NotFound from '../pages/NotFound.vue';


/* 2. 使用vue­router（script标签引入方式自动完成） */
Vue.use(VueRouter)

/* 3. 实例化router并配置参数-------------------- */
let router = new VueRouter({
    routes: [
        /*首页 */
        {
            name: 'home',
            path: '/home',
            component: Home
        },
        {
            /* 当访问的路径为空则为显示首页 */
            // name: 'home',
            path: '/',
            component: Home
        },
        /* 购物车 */
        {
            name: 'cart',
            path: '/cart',
            component: Cart
        },
        /* 注册 */
        {
            name: 'reg',
            path: '/reg',
            component: Reg
        },
        /* 登录 */
        {
            name: 'login',
            path: '/login',
            component: Login
        },
        /* 404 */
        {
            name: 'notfound',
            path: '*',
            component: NotFound
        }
    ]
})
export default router;