<template>
  <div id="app">
    <component :is="status"></component>
  </div>
</template>

<script>
import Login from "./components/Login.vue";
import Main from "./components/Main.vue";

import "../node_modules/jquery/dist/jquery";
import "../node_modules/bootstrap/dist/js/bootstrap";

export default {
  name: "app",
  data: function() {
    return {
      status: "Main"
    };
  },
  components: {
    Login,
    Main
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
