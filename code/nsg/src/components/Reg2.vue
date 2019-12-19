<template>
<body>
  <header></header>
  <main class="nctouch-main-layout">
    <!-- /*请输入短信验证码 */ -->
    <div class="register-mobile-tip">
      <span>请输入</span>
      <span class="span1">13245678900</span>
      <span>收到的短信验证码</span>
    </div>
    <!-- /* 再次获取动态验证码 */ -->
    <div class="agin">
      <h4>动&nbsp;态&nbsp;码</h4>
      <input type="text" placeholder="请输入短信动态验证码！" />
      <p>再次短信获取</p>
    </div>
    <div class="next">
      <a>下一步</a>
    </div>
    <!-- 提示信息 -->
    <div class="tips">验证码错误</div>
  </main>
  <footer></footer>
</body>
</template>

<script>
export default {
    
};
</script>

<style >
@charset "UTF-8";
* {
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}

/* main */
.nctouch-main-layout {
  /*请输入短信验证码 */
  /* 再次获取动态验证码 */
  /* 下一步 */
  /*提示信息 */
}

.nctouch-main-layout .register-mobile-tip {
  width: 88.26667vw;
  height: 5.33333vw;
  line-height: 5.33333vw;
  margin: auto;
  padding: 0 5.86667vw;
  font-size: 3.2vw;
  text-align: left;
  padding-top: 11.73333vw;
  padding-bottom: 5.86667vw;
}

.nctouch-main-layout .register-mobile-tip .span1 {
  font-weight: bold;
}

.nctouch-main-layout .agin {
  margin-left: 2.93333vw;
  font-size: 4vw;
  height: 11.2vw;
  background: white;
}

.nctouch-main-layout .agin h4 {
  float: left;
  width: 17.6vw;
  height: 11.2vw;
  line-height: 11.2vw;
  text-align: right;
}

.nctouch-main-layout .agin input {
  float: left;
  padding: 2.93333vw 0;
  padding-left: 2.66667vw;
  font-size: 4vw;
}

.nctouch-main-layout .agin p {
  float: left;
  line-height: 11.2vw;
}

.nctouch-main-layout .next {
  margin-top: 5.86667vw;
  height: 10.66667vw;
  margin-bottom: 5.33333vw;
}

.nctouch-main-layout .next a {
  display: block;
  width: 90vw;
  height: 10.66667vw;
  background: #eee;
  margin: auto;
  text-align: center;
  line-height: 10.66667vw;
  font-size: 4.8vw;
}

.nctouch-main-layout .tips {
  width: 26.66667vw;
  height: 10.66667vw;
  background: white;
  text-align: center;
  line-height: 10.66667vw;
  margin: auto;
  font-size: 4vw;
  box-shadow: 0px 0px 0.66667vw 0.26667vw;
}
</style>