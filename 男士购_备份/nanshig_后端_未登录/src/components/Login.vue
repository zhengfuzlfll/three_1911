<template>
  <div class="p100">
    <div id="container">
      <h2>后台管理系统登录</h2>
      <form>
        <div class="form-group">
          <!-- <label for="exampleInputEmail1">用户名</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <input
          type="text"
          class="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          />-->
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon3">用户名</span>
            </div>
            <input
              placeholder="请输入用户名"
              aria-label="请输入用户名"
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
            />
          </div>
        </div>
        <div class="form-group">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon3">密码</span>
            </div>
            <input
              placeholder="请输入密码"
              aria-label="请输入密码"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              aria-describedby="basic-addon3"
            />
          </div>
        </div>
        <div class="form-group">
          <div class="input-group mb-3">
            <input
              placeholder="请输入验证码"
              aria-label="请输入验证码"
              type="text"
              class="form-control"
              id="check"
              aria-describedby="basic-addon3"
            />
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon3">验证码</span>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between form-group form-check">
          <div>
            <input type="checkbox" class="form-check-input" id="remenberpsw" />
            <label class="form-check-label" for="remenberpsw">记住密码</label>
          </div>
          <div>
            <a href="JavaScript:void(0)">忘记密码？</a>
          </div>
        </div>
        <button type="input" class="btn btn-primary w">登录</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.p100 {
  padding-top: 100px;
}

body {
  background-color: rgb(31, 31, 45) !important;
}

form {
  margin-top: 50px;
}

#container {
  background-color: #f2f9ff;
  width: 500px;
  padding: 50px;
  margin: 0 auto;
  border-radius: 10px;
}

.w {
  width: 100%;
}
</style>