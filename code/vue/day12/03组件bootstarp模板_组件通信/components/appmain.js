let appmain = {
    template: `
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">

          <!--右边上半区域-->
      
          <app-dash :hobby="hobby" @removehb="removeHobby">
              <h1 class="page-header" slot="titledash">{{ keyword }}</h1>/* 插槽 */
          </app-dash>
          
          <!--右边下半区域-->
          <h2 class="sub-header">Section title</h2>
          <app-title :emplist="empList" :removeitem="removeItem"></app-title>
    </div>
    `,
    /* 子组件 */
    components: {
        'app-dash': appdash,
        'app-title': apptitle
    },
    /* 数据   传递给子组件（组件间通信） */
    /* props     */
    data: function () {
        return {
            hobby: ["LOL", "俄罗斯方块", "超级玛丽", "地下城与勇士"],
            empList: [{
                    id: 1,
                    name: '马云',
                    salary: 80001
                },
                {
                    id: 2,
                    name: '东哥',
                    salary: 80002
                },
                {
                    id: 3,
                    name: '小马哥',
                    salary: 80003
                },
                {
                    id: 4,
                    name: '罗老师',
                    salary: 80004
                }
            ],
            keyword: '仪表盘'
        }
    },
    /* 谁的数据谁来管理  方法由子组件调用*/
    methods: {
        /* 删除app-title  props子组件传数据给父组件 id*/
        removeItem(index) {
            this.empList.splice(index, 1);
        },
        /* 删除app-dash  props */
        // removeDash(index) {
        //     /*  <app-dash :hobby="hobby" :removedash="removeDash"></app-dash> */
        //     this.hobby.splice(index, 1);
        // },

        /* <h1 class="page-header">Dashboard</h1>      插槽*/
        /* 删除app-dash  自定义事件 */
        removeHobby(index) {
            this.hobby.splice(index, 1);

            /* 发布消息 兄弟组件间通信 */
            PubSub.publish('getnum', 1)
        }
    }
}