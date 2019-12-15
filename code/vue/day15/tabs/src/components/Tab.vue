<template>
  <!-- <div class="contrainer"> -->
  <div class="container">
    <ul class="nav nav‐tabs">
      <li class="nav‐item" v-for="(item,index) in tabs" :key="item" @click="change(index)">
        <a class="nav‐link" href="#" :class="{active:curIndex===index}">{{item}}</a>
      </li>
    </ul>
    <div>
      <!-- 动态组件 -->
      <!-- 缓存 :include="/News|Tiyu/"-->
      <keep-alive :include="/News|Tiyu/">
        <component :is="currentComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
/*1、 引入子组件 */
import News from "./News.vue";
import Tiyu from "./Tiyu.vue";
import Yule from "./Yule.vue";
import Keji from "./Keji.vue";

export default {
  data: function() {
    return {
      tabs: ["新闻", "体育", "娱乐", "科技"],
      componentsArr: ["News", "Tiyu", "Yule", "Keji"],
      currentComponent: "News",
      curIndex: 0
    };
  },
  /* 2、加入到vue里面 components*/
  components: {
    News,
    Tiyu,
    Yule,
    Keji
  },
  methods: {
    change(index) {
      this.curIndex = index;
      // window.console.log(index);
      this.currentComponent = this.componentsArr[index];
    }
  }
};
</script>
<style scoped>
.active {
  color: red;
}
</style>
