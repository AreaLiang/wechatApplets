// pages/user/collect/collect.ts
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
            name:'宋南枝',
            date:'2022 年 10 月 19 日',
            content:'108岁病人顺利出院，瑞金医院卢湾分院已收治10位百岁老人',
            listType:'article',
            portraitUrl:'/public/img/user/touxian02.jpg',
            coverUrl:'/public/img/collectPage/collectPage03.jpg',
            repostNum:"6",//转发
            commentNum:"324",//评论
            likeNum:"6554"//点赞
        },
        {
            name:'浮月',
            date:'2022 年 5 月 18 日',
            content:'四川皇泽寺，存有女皇帝唯一的真容像，看看武则天到底长什么样子',
            listType:'video',
            portraitUrl:'/public/img/user/touxian06.jpg',
            coverUrl:'/public/img/collectPage/collectPage01.jpg',
            repostNum:"12",
            commentNum:"20",
            likeNum:"115"
        },
        {
            name:'若音麦',
            date:'2021 年 1 月 11 日',
            content:'毛主席纪念堂为何建在天安门广场？为何正门朝北？有何寓意？',
            listType:'article',
            portraitUrl:'/public/img/user/touxian07.jpg',
            coverUrl:'/public/img/collectPage/collectPage02.jpg',
            repostNum:"126",
            commentNum:"1324",
            likeNum:"5354"
        }]
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
