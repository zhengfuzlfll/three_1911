<template>
  <div id="goodslist">
    <div class="head d-flex justify-content-between">
      <div class="h1">
        <a class="btn btn-primary" href="#" role="button">
          <img src="../images/goodslist/u213.png" alt />添加
        </a>
        <a class="btn btn-outline-primary" href="#" role="button">
          <img src="../images/goodslist/u182.png" alt />删除
        </a>
      </div>
      <div class="h2">
        <input
          type="text"
          class="form-control"
          placeholder="请输入标题"
          aria-label="请输入标题"
          aria-describedby="basic-addon1"
        />
        <div class="input-group-prepend m">
          <select class="custom-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <a class="btn btn-primary" href="#" role="button">搜索</a>
      </div>
    </div>

    <table cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <td>
            <input type="checkbox" aria-label="Checkbox for following text input" />
          </td>
          <td>#</td>
          <td>商品名称</td>
          <td>
            <select class="custom-select" id="inputGroupSelect01">
              <option selected>分类</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </td>
          <td>价格（原价）</td>
          <td>价格（售价）</td>
          <td>库存</td>
          <td>
            <select class="custom-select" id="inputGroupSelect01">
              <option selected>状态</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </td>
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
          <td>iphone</td>
          <td>手机</td>
          <td>￥ 500</td>
          <td>￥ 600</td>
          <td>999</td>
          <td>上线</td>
          <td>2019-12-14</td>
          <td>
            <div class="operation d-flex justify-content-around">
              <!-- <a class="btn btn-primary" href="#" role="button">
                <img src="../images/goodslist/u187.png" alt />
              </a>-->
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
    <nav aria-label="...">
      <ul class="pagination justify-content-end">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item active" aria-current="page">
          <a class="page-link" href="#">
            2
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
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