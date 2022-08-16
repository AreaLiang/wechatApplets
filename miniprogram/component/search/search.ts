// component/search/search.ts
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        showPage: false,
        searchValue:'',
        record: [{
            title: "历史记录",
            data: [{
                name: "央行进行100亿7天逆转未来",
            },
            {
                name: "茅台集团被强制执行",
                status: "hot"
            },
            {
                name: "热血高校2",
            },
            {
                name: "狂战",
                status: "hot"
            },
            {
                name: "苹果呼吸灯怎么设置",
            }
            ]
        },
        {
            title: "猜你想搜",
            data: [{
                name: "乌克兰最新局势",
            },
            {
                name: "95号汽油今日价格",
            },
            {
                name: "肇庆招聘信息",
            },
            {
                name: "小米12SPro被曝",
                status: "hot"
            },
            {
                name: "退役和退伍的区别",
                status: "hot"
            },
            {
                name: "上海防疫情况",
            },
            {
                name: "豆沙冰棍正宗做法",
            },
            {
                name: "古代言情小说推荐",
            }
            ]
        }
        ]
    },
    attached: function () {
        // 在组件实例进入页面节点树时执行
        let data = JSON.parse(JSON.stringify(this.data.record));
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].data.length; j++) {
                if (j % 2 == 0) { //双数后面添加icon
                    data[i].data[j].icon = true;
                } else {
                    data[i].data[j].icon = false;
                }
            }
        }
        this.setData({
            record:data
        })

    },
    /**
     * 组件的方法列表
     */
    methods: {
        open() {
            this.setData({
                showPage: !this.data.showPage
            })
        },
        tap() {
            console.log('click tap');
            this.setData({
                showPage: true
            });
        },
        enter() {
            console.log('enter');
        },
        afterleave() {//离开中触发
            this.setData({ searchValue:''}); //清空搜索框
        },
        switchRecord(e:any){//点击标题，自动赋值到搜索框
            this.setData({
                searchValue:e.currentTarget.dataset.value
            });
        },
        submitSearch(){//确认搜索
            console.log("66")
        },
        exitedSearch(){//退出搜索界面
            this.setData({
                showPage: false
            })
        }
    }
})
