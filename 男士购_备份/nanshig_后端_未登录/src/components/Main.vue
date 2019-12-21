<template>
  <div id="indexpage" class="d-flex justify-content-between">
    <div id="menu">
      <div class="head">
        <img src="../images/center/u80.png" alt />
        <span class="title">后台管理系统</span>
      </div>
      <div>
        <h3>商品管理</h3>
        <ul>
          <li>
            <!-- <a href="#" :to="/goodslist">商品列表</a> -->
            <router-link :to="`goodslist`" active-class="current">商品列表</router-link>
          </li>
          <li>
            <!-- <a href="#">商品分类</a> -->
            <router-link :to="`goodskinds`" active-class="current">商品分类</router-link>
          </li>
          <li>
            <!-- <a href="#">添加商品</a> -->
            <router-link :to="`addgoods`" active-class="current">添加商品</router-link>
          </li>
        </ul>
      </div>
      <div>
        <h3>用户管理</h3>
        <ul>
          <li>
            <!-- <a href="#">用户列表</a> -->
            <router-link :to="`userlist`" active-class="current">用户列表</router-link>
          </li>
          <li>
            <!-- <a href="#">添加用户</a> -->
            <router-link :to="`adduser`" active-class="current">添加用户</router-link>
          </li>
        </ul>
      </div>
      <div>
        <h3>订单管理</h3>
        <ul>
          <li>
            <!-- <a href="#">订单列表</a> -->
            <router-link :to="`orderform`" active-class="current">订单列表</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div id="main">
      <div id="head">
        <p>
          <span>首页</span>/
          <span>商品管理</span>
        </p>
      </div>
      <!-- <div id="content">2</div> -->
      <!-- <component :is="showitem"></component> -->
      <router-view />
    </div>
  </div>
</template>

<script>
// import Home from "./Home";
// import GoodsList from "./GoodsList";
// import GoodsKinds from "./GoodsKinds";
// import AddGoods from "./AddGoods";
// import UserList from "./UserList";
// import AddUser from "./AddUser";
// import ChangeUserInfo from "./ChangeUserInfo";
// import OrderForm from "./OrderForm";

export default {
  data: function() {
    return {
      showitem: "OrderForm"
    };
  },
  components: {
    // Home,
    // GoodsList,
    // GoodsKinds,
    // AddGoods,
    // UserList,
    // AddUser,
    // ChangeUserInfo,
    // OrderForm
  }
};
</script>

<style>
html,
body,
html,
#indexpage {
  height: 100%;
}

#main {
  flex: 1;
}

#menu {
  width: 240px;
  background: rgb(3, 0, 32);
}

.head {
  margin: 20px;
  display: flex;
  align-items: center;
}

img {
  width: 24px;
  height: 24px;
}

.title {
  margin-left: 10px;
  font-weight: 900;
  font-size: 24px;
}

li {
  list-style: none;
  padding: 10px 0;
  /* text-align: left; */
}

#menu * {
  color: #ddd;
}

h3,
li {
  text-align: center;
}

#head {
  width: 100%;
  border-bottom: 2px solid #ddd;
}

#main p {
  text-align: left;
  padding: 10px 30px;
  margin: 0 !important;
  color: #999;
}

#main .head span {
  color: #999;
  margin: 0 20px;
}

#content {
  width: 100%;
  height: 100%;
  background-color: #eee;
}
</style>