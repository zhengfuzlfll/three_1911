/* vue-router 路由*/
/* 使用方法
    1. 引入vue­router
    2. 使用vue­router（script标签引入方式自动完成）
    3. 实例化router并配置参数  **************************** 重要步骤
    4. 把router实例注入到vue实例中
    5. 在组件中使用
 */


<template>
  <div id="app">
    <!-- 6. 在组件中使用 -->
    <ul>
      <li v-for="(item) in tags" :key="item.name" @click="zheng(item.path)">
        {{item.text}}
        <!-- <router-link :to="item.path">{{item.text}}</router-link> 声明式导航-->
      </li>
      <!-- <li></li>
      <li></li>
      <li></li>-->
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
// import { log } from "util";
// import { log } from "util";
export default {
  name: "app",
  components: {},
  data: function() {
    return {
      tags: [
        { name: "home", path: "/home", text: "首页", component: "Home" },
        { name: "login", path: "/login", text: "登录", component: "Login" },
        { name: "reg", path: "/reg", text: "注册", component: "Reg" },
        { name: "cart", path: "/cart", text: "购物车", component: "Cart" }
      ],
      curentpage: "/home"
    };
  },
  methods: {
    zheng(path) {
      window.console.log(path);
      this.$router.push({ path }); /* 编程式导航 */
    }
  }
};
</script>

<style scoped>
.current {
  color: red;
  font‐weight: bold;
}
</style>


