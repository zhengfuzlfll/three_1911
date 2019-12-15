/* tab */
<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!-- 5555555 -->
    <Tab></Tab>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

/* 引入样式 */
import "../bootstrap/css/bootstrap.css";
/* 引入子组件 */
import Tab from "./components/Tab.vue";

export default {
  name: "app",
  components: {
    // HelloWorld
    Tab
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
