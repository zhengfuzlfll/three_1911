<template>
  <!-- 新闻组件 -->
  <div>
    <p>新闻时事</p>
    <input type="text" />
    <button @click="add()">点击{{ num }}</button>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      num: 0
    };
  },
  methods: {
    add() {
      this.num++;
    }
  },
  created() {
    window.console.log("新闻时事created");
  },
  destroyed() {
    window.console.log("新闻时事destroyed");
    // window.console.log(66666);
  }
};
</script>