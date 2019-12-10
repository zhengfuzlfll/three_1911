let appdash = {
    template: `
   
    <div class="row placeholders">
            <div v-for="(item,index) in hobby" class="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200"
                height="200" class="img-responsive" alt="Generic placeholder thumbnail">
              <h4>{{ item }}</h4>
              <span class="text-muted">删除</span>
            </div>
        
            </div>
        `,
    data: function () {
        return {
            hobby: ["英雄联盟", "俄罗斯方块", "超级玛丽", "魂斗罗"]
        }
    }
}