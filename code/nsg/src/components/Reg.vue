<template>

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>注册页</title>
    <link rel="stylesheet" href="../css/base.css" />
    <link rel="stylesheet" href="../iconfont/iconfont.css" />
    <link rel="stylesheet" href="../sass/reg.css" />
  </head>

  <body>
    <header></header>
    <main class="nctouch-main-layout">
      <div class="nctouch-inp-con">
        <form action>
          <!-- ul/nav -->
          <nav class="form-box">
            <li class="form-item list1">
              <h4>手&nbsp;机&nbsp;号</h4>
              <div class="input-box">
                <input type="text" placeholder="请输入手机号" />
                <span class="input-del iconfont icon-iconfront-"></span>
              </div>
            </li>
            <li class="form-item list2">
              <h4>验&nbsp;证&nbsp;码</h4>
              <div class="input-box">
                <input type="text" placeholder="请输入验证码" />
                <span class="input-del iconfont icon-iconfront-"></span>
                <a href>
                  <img
                    src="https://www.nanshig.com/mobile/index.php?act=seccode&op=makecode&k=241da99b&t=0.2947737496861651"
                    alt
                  />
                </a>
              </div>
            </li>
          </nav>
          <!-- 同意协议 -->
          <div class="remember-form">
            <!-- <span class="iconfont icon-fuxuankuang_xuanzhong"></span> -->
            <input type="checkbox" checked />
            <label for>同意</label>
            <a style="color: #4B89DC;">用户注册协议</a>
          </div>
          <div class="form-btn">
            <a>获取短信校验码</a>
          </div>
        </form>
      </div>
    </main>
    <footer></footer>
  </body>
</html>
</template>
<script>
export default {};
</script>
<style scoped>
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
  padding-top: 11.73333vw;
  /* ul/nav */
  /* 同意协议 */
  /*获取验证码 */
}

.nctouch-main-layout .nctouch-inp-con {
  background-color: white;
  /* li */
}

.nctouch-main-layout .nctouch-inp-con .form-item {
  width: 97.06667vw;
  height: 11.33333vw;
  margin-left: 2.93333vw;
  background-color: white;
  line-height: 11.33333vw;
  overflow: hidden;
  margin: auto;
  border-bottom: 1px solid #ccc;
  /* input */
}

.nctouch-main-layout .nctouch-inp-con .form-item h4 {
  float: left;
  font-size: 4vw;
  width: 17.6vw;
  height: 11.73333vw;
  text-align: right;
}

.nctouch-main-layout .nctouch-inp-con .form-item .input-box {
  float: left;
}

.nctouch-main-layout .nctouch-inp-con .form-item .input-box input {
  padding: 2.66667vw 0vw;
  margin-left: 2.66667vw;
  font-size: 4vw;
}

.nctouch-main-layout .nctouch-inp-con .form-item .input-box .icon-iconfront- {
  color: #aaa;
  font-size: 5.33333vw;
}

.nctouch-main-layout .nctouch-inp-con .list1 {
  border-bottom: 1px solid #ccc;
}

.nctouch-main-layout .nctouch-inp-con .list2 {
  position: relative;
}

.nctouch-main-layout .nctouch-inp-con .list2 img {
  width: 23.46667vw;
  height: 8vw;
  position: absolute;
  top: 50%;
  right: 11.73333vw;
  transform: translateY(-50%);
}

.nctouch-main-layout .nctouch-inp-con .list2 .input-del {
  position: absolute;
  left: 46.66667vw;
  top: 50%;
  transform: translateY(-50%);
}

.nctouch-main-layout .remember-form {
  width: 76.53333vw;
  height: 5.33333vw;
  margin: auto;
  margin-top: 5.86667vw;
  font-size: 4vw;
}

.nctouch-main-layout .form-btn {
  margin-top: 5.86667vw;
}

.nctouch-main-layout .form-btn a {
  font-size: 5.33333vw;
  display: block;
  width: 90vw;
  height: 10.66667vw;
  text-align: center;
  background-color: #eee;
  margin: auto;
  line-height: 10.66667vw;
}
</style>