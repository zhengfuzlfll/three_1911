<template>
  <div id="goodslist">
    <div class="head">
      <a class="btn btn-primary" href="#" role="button">
        <img src="../images/goodslist/u213.png" alt />添加
      </a>
      <a class="btn btn-outline-primary" href="#" role="button">
        <img src="../images/goodslist/u182.png" alt />删除
      </a>
    </div>

    <table cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <td>
            <input type="checkbox" aria-label="Checkbox for following text input" />
          </td>
          <td>#</td>
          <td>商品分类</td>
          <td>
            <div class="flex">
              <span>时间</span>
              <div class="flex2">
                <a class="asc" href="javascript:void(0)"></a>
                <a class="des" href="javascript:void(0)"></a>
              </div>
            </div>
          </td>
          <td class="operation">操作</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="checkbox" aria-label="Checkbox for following text input" />
          </td>
          <td>1</td>
          <td>手机</td>
          <td>2019-12-14</td>
          <td>
            <div class="operation d-flex justify-content-around">
              <router-link class="btn btn-primary" :to="`changegoodsinfo`" active-class="current">
                <img src="../images/goodslist/u187.png" alt />
              </router-link>
              <a class="btn btn-outline-primary" href="#" role="button">
                <img src="../images/goodslist/u182.png" alt />
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#goodslist {
  padding: 20px;
}

.btn {
  display: flex;
  margin-right: 20px;
}

.h1,
.h2 {
  display: flex;
  input {
    width: auto;
  }
  select {
    width: 200px;
  }
}

.m {
  margin: 0 30px;
}

table {
  width: 100%;
  td {
    color: #666;
    border: 2px solid #666;
    padding: 5px 10px;
  }
  select {
    width: 80px;
  }
}

.operation {
  a {
    margin: 0;
  }
}
.flex {
  display: flex;
  align-items: center;
}

.flex2 {
  display: flex;
  flex-direction: column;
}

.asc {
  width: 15px;
  height: 9px;
  background-image: url("../images/u198.png");
}

.des {
  width: 15px;
  height: 9px;
  background-image: url("../images/u199.png");
}

.asc:hover {
  background-image: url("../images/u198_mouseOver.png");
}
.des:hover {
  background-image: url("../images/u199_mouseOver.png");
}
</style>