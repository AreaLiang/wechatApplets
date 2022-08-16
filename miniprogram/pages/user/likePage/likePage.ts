// pages/user/likePage/likePage.ts
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
        list:[{
            name:'赖少',
            date:'2022 年 10 月 19 日',
            content:'上海金山政务服务场所逐步恢复服务。',
            listType:'article',
            portraitUrl:'/public/img/user/touxian08.jpg',
            coverUrl:'/public/img/history/history01.jpg',
            repostNum:"16",//转发
            commentNum:"1324",//评论
            likeNum:"16554"//点赞
        },
        {
            name:'黄春燕',
            date:'2022 年 4 月 29 日',
            content:'美方频频将手伸向亚洲，究竟有着怎样的盘算？作为重要地区组织的东盟，需要的又是什么样的合作？作为重要地区组织的东盟，需要的又是什么样的合作',
            listType:'article',
            portraitUrl:'/public/img/user/touxian02.jpg',
            coverUrl:'/public/img/history/history02.jpg',
            repostNum:"1",
            commentNum:"0",
            likeNum:"165"
        },
        {
            name:'若音麦',
            date:'2021 年 3 月 18 日',
            content:'毛主席纪念堂为何建在天安门广场？为何正门朝北？有何寓意？',
            listType:'article',
            portraitUrl:'/public/img/user/touxian01.jpg',
            coverUrl:'/public/img/history/history03.jpg',
            repostNum:"1126",
            commentNum:"13224",
            likeNum:"1165354"
        }]
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
