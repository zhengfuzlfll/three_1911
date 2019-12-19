<template>
  <ul>
    <li>
      <span class="iconfont icon-shouye"></span>
      <span>首页</span>
    </li>
    <li>
      <span class="iconfont icon-leimupinleifenleileibie"></span>
      <span>分类</span>
    </li>
    <li>
      <span class="iconfont icon-xiaoxi"></span>
      <span>消息</span>
    </li>
    <li>
      <span class="iconfont icon-gouwuche"></span>
      <span>购物车</span>
    </li>
    <li>
      <span class="iconfont icon-wode"></span>
      <span>我的</span>
    </li>
  </ul>
</template>
<script>
export default {};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

ul,
li {
  list-style: none;
}

html,
body {
  width: 100%;
  height: 100%;
  position: relative;
}

ul {
  background-color: black;
  color: white;
  display: flex;
  width: 100%;
  justify-content: space-around;
  height: 14.66667vw;
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: 0;
  margin-top: 14.66667vw;
}

ul li {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  font-size: 4.8vw;
}

ul li .icon-shouye,
ul li .icon-leimupinleifenleileibie,
ul li .icon-xiaoxi,
ul li .icon-gouwuche,
ul li .icon-wode {
  font-size: 4.8vw;
}
</style>