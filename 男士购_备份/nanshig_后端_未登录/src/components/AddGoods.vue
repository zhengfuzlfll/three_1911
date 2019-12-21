<template>
  <div id="addgoods">
    <form>
      <div class>
        <label for="goodsname">商品名称:</label>
        <input type="text" id="goodsname" class="w500" placeholder="商品名称" aria-label="商品名称" />
        <span class="tips">50字以内</span>
      </div>
      <div class="form-group">
        <label for="goodstitle">商品副标题:</label>
        <input type="text" id="goodstitle" class="w500" placeholder="商品副标题" aria-label="商品副标题" />
        <span class="tips">50字以内</span>
      </div>
      <div class="form-group">
        <label for="goodspirce">商品价格:</label>
        <input type="text" id="goodspirce" placeholder="RMB" aria-label="RMB" class="w100" />
        <label for="goodsspirce">商品售价:</label>
        <input type="text" id="goodsspirce" placeholder="RMB" aria-label="RMB" class="w100" />
      </div>
      <div class="form-group">
        <label for="goodstitle">商品分类:</label>
        <select class="custom-select w500" id="inputGroupSelect01">
          <option selected>请选择</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="form-group">
        <label for="goodsnum">库存:</label>
        <input type="number" id="goodsnum" placeholder="0" aria-label="0" />
      </div>
      <div class="form-group">
        <label>商品属性:</label>
        <input type="checkbox" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">热卖</label>
        <input type="checkbox" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">推荐</label>
        <input type="checkbox" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">促销</label>
      </div>
      <div class="form-group">
        <label for="goodstitle">图片:</label>
        <input type="text" id="goodstitle" class="w500" placeholder="图片" aria-label="图片" />
      </div>
      <div class="form-group">
        <label for="goodstitle">上架状态</label>
        <select class="custom-select w500" id="inputGroupSelect01">
          <option selected>上架状态</option>
          <option value="1">One</option>
          <option value="2">Two</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">商品描述</label>
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
.form-group {
  label {
    width: 0px;
  }
}

#addgoods {
  padding: 20px;
}

.tips {
  color: #999;
}

#addgoods label {
  label {
    width: 100px !important;
    text-align: right;
    margin-right: 20px;
  }

  select {
    margin-left: 50px;
  }
}

.w500 {
  width: 500px;
}

.w100 {
  width: 100px;
}

.form-group {
  label {
    margin-right: 0 !important;
    margin-left: 5px !important;
    width: auto !important;
  }

  input {
    margin-left: 20px;
  }
}
</style>