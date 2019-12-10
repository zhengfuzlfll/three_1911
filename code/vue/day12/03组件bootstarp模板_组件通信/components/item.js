let item = {
    template: `
        <tr>
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.salary}}</td>
            <td><a @click="remove(index)">删除</a></td>
        </tr>
    `,
    // data: function () {
    //     return {

    //     }
    // }
    props: ["item", "removeitem", "index"],
    methods: {
        remove(index) {
            let isok = confirm(`您确定开除【${this.item.name}】吗？`)
            if (isok) {
                this.removeitem(index)
            }

        }
    }
}