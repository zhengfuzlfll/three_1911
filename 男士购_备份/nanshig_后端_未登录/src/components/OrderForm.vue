<template>
  <div id="orderform">
    <table cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <td>
            <input type="checkbox" aria-label="Checkbox for following text input" />
          </td>
          <td>#</td>
          <td>商品名称</td>
          <td>
            <div class="flex">
              <span>价格</span>
              <div class="flex2">
                <a class="asc" href="javascript:void(0)"></a>
                <a class="des" href="javascript:void(0)"></a>
              </div>
            </div>
          </td>
          <td>数量</td>
          <td>运费</td>
          <td>商品总额</td>
          <td>订单总额</td>
          <td>
            <div class="flex">
              <span>下单时间</span>
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
#orderform {
  padding: 20px;
}

.btn {
  display: flex;
  margin-right: 20px;
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