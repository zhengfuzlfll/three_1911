let appdash = {
  template: `<div>
   <slot name="titledash"></slot>
    <div class="row placeholders">
            <div v-for="(item,index) in hobby" class="col-xs-6 col-sm-3  placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200"
                height="200" class="img-responsive" alt="Generic placeholder thumbnail">
              <h4>{{ item }}</h4>
              <span class="text-muted" @click="remove(index)"><a>删除</a></span>
            </div>
        
            </div></div>
        `,
  // data: function () {
  //     return {
  //         hobby: ["英雄联盟", "俄罗斯方块", "超级玛丽", "魂斗罗"]
  //     }
  // }
  props: ["hobby", "removedash"],
  methods: {
    /* props   */
    // removeDel(index) {/* <span class="text-muted" @click="removeDel(index)"><a>删除</a></span> */
    //   let isok = confirm(`您确定要删除【${this.hobby[index]}】吗？`)
    //   if (isok) {
    //     this.removedash(index);
    //   }

    // }
    remove(index) {
      /* 自定义事件 ,子组件不用接收*/
      let isok = confirm(`您确定要删除【${this.hobby[index]}】吗？`)
      if (isok) {
        this.$emit("removehb", index)
      }

    }
  }
}