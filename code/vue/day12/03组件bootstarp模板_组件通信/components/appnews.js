let appnews = {
  template: `
   <div class="col-sm-3 col-md-2 sidebar">
   <ul class="nav nav-sidebar">
     <li class="active">
      <a href="#">删除条数
      <span v-show="delNum">({{ delNum }})</span>
      </a>
      </li>
     <li><a href="#">Reports</a></li>
     <li><a href="#">Analytics</a></li>
     <li><a href="#">Export</a></li>
   </ul>
   <ul class="nav nav-sidebar">
     <li><a href="">Nav item</a></li>
     <li><a href="">Nav item again</a></li>
     <li><a href="">One more nav</a></li>
     <li><a href="">Another nav item</a></li>
     <li><a href="">More navigation</a></li>
   </ul>
   <ul class="nav nav-sidebar">
     <li><a href="">Nav item again</a></li>
     <li><a href="">One more nav</a></li>
     <li><a href="">Another nav item</a></li>
   </ul>
 </div>
   `,
  data: function () {
    return {
      delNum: 0
    }
  },
  /* 兄弟组件间的通信 */
  created() {
    /*1、 实例化的时候就订阅消息 */
    PubSub.subscribe('getnum', (event, data) => {
      console.log(data);
      this.delNum = this.delNum + data

    })
  }
}