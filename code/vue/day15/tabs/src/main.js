/* vue-router 路由*/
/* 使用方法
    1. 引入vue­router
    2. 使用vue­router（script标签引入方式自动完成）
    3. 实例化router并配置参数  **************************** 重要步骤
    4. 把router实例注入到vue实例中
    5. 在组件中使用
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router/index.js'



/*   1. 引入vue­router */
// import VueRouter from 'vue-router';

// /* 5、引入子组件  通过哈希值的改变切换不用组件 */
// import Home from './pages/Home.vue';
// import Login from './pages/Login.vue';
// import Reg from './pages/Reg.vue';
// import Cart from './pages/Cart.vue';


// /* 2. 使用vue­router（script标签引入方式自动完成） */
// Vue.use(VueRouter)

// /* 3. 实例化router并配置参数-------------------- */
// let router = new VueRouter({
//   routes: [
//     /*首页  */
//     {
//       name: 'home',
//       path: '/home',
//       component: Home
//     },
//     /* 购物车 */
//     {
//       name: 'cart',
//       path: '/cart',
//       component: Cart
//     },
//     /* 注册 */
//     {
//       name: 'reg',
//       path: '/reg',
//       component: Reg
//     },
//     /* 登录 */
//     {
//       name: 'login',
//       path: '/login',
//       component: Login
//     }
//   ]
// })

/* 6. 在组件中使用 =>>>>>APP.vue文件*/

new Vue({
  /* 4. 把router实例注入到vue实例中 */
  router,
  render: h => h(App),
}).$mount('#app')



// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')