<template>
  <div>
    <p>体育</p>
    <input type="text" />
    <button @click="add()">点击{{num}}</button>
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
    window.console.log("体育created");
  },
  destroyed() {
    window.console.log("体育destroyed");
  }
};
</script>