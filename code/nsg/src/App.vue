<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Reg></Reg>
    <Reg2></Reg2>
    <Bottom></Bottom>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import "./css/base.css";
import "./iconfont/iconfont.css";

import Reg from "./components/Reg.vue";
import Reg2 from "./components/Reg2.vue";
import Bottom from "./components/Bottom.vue";

export default {
  name: "app",
  components: {
    // HelloWorld
    Reg,
    Reg2,
    Bottom
  }
};
</script>

<style  >
#app {
}
</style>
