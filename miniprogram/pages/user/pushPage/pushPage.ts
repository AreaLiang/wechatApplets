// pages/user/pushPage/pushPage.ts
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
            name:'醒不来的梦',
            date:'2022 年 10 月 19 日',
            content:'四川皇泽寺，存有女皇帝唯一的真容像，看看武则天到底长什么样子',
            listType:'article',
            portraitUrl:'/public/img/user/touxian05.jpg',
            coverUrl:'/public/img/history/history01.jpg',
            repostNum:"16",//转发
            commentNum:"1324",//评论
            likeNum:"16554"//点赞
        },
        {
            name:'凌晨的末班车',
            date:'2022 年 4 月 29 日',
            content:'108岁病人顺利出院，瑞金医院卢湾分院已收治10位百岁老人',
            listType:'article',
            portraitUrl:'/public/img/user/touxian07.jpg',
            coverUrl:'/public/img/history/history02.jpg',
            repostNum:"1",
            commentNum:"0",
            likeNum:"165"
        },
        {
            name:'遮住星星的窗',
            date:'2021 年 3 月 18 日',
            content:'毛主席纪念堂为何建在天安门广场？为何正门朝北？有何寓意？？',
            listType:'article',
            portraitUrl:'/public/img/user/touxian03.jpg',
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
