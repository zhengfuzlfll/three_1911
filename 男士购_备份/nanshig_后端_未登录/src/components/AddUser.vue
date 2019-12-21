<template>
  <div id="adduser">
    <form>
      <div class>
        <label for="goodsname">用户名:</label>
        <input type="text" id="goodsname" placeholder="用户名" aria-label="用户名" />
      </div>
      <div class>
        <label for="goodsname">昵称:</label>
        <input type="text" id="goodsname" placeholder="昵称" aria-label="昵称" />
      </div>
      <div class>
        <label for="goodsname">密码:</label>
        <input type="text" id="goodsname" placeholder="密码" aria-label="密码" />
        <span class="tips">6 - 12位密码</span>
      </div>
      <div class>
        <label for="goodsname">确认密码:</label>
        <input type="text" id="goodsname" placeholder="确认密码" aria-label="确认密码" />
      </div>
      <div class="form-group">
        <label for="goodspirce">手机号码:</label>
        <input type="text" id="goodspirce" placeholder="RMB" aria-label="RMB" />
        <label for="goodsspirce">性别:</label>
        <select class="custom-select" id="inputGroupSelect01">
          <option selected>请选择</option>
          <option value="male">男</option>
          <option value="female">女</option>
        </select>
      </div>
      <div class>
        <label for="goodsname">生日:</label>
        <input type="date" id="goodsname" placeholder="生日" aria-label="生日" />
      </div>
      <div class>
        <label for="goodsname">邮箱地址:</label>
        <input type="email" id="goodsname" placeholder="邮箱地址" aria-label="邮箱地址" />
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">备注:</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
#adduser {
  padding: 20px;
}

.tips {
  color: #999;
}

#adduser {
  label {
    width: 100px !important;
    text-align: right;
    margin-right: 20px;
  }

  select {
    margin-left: 50px;
  }

  input {
    width: 300px;
  }
}
</style>