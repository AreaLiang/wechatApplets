// pages/user/comment/comment.ts
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
        list: [{
            name: '赖少个趁仔',
            date: '2020 年 3 月 19 日',
            content: '猫：给你加点料',
            listType: 'article',
            portraitUrl: '/public/img/user/touxian.jpg',
            coverUrl: '/public/img/comment/cover01.jpg',
            repostNum: "6",//转发
            commentNum: "324",//评论
            likeNum: "6554"//点赞
        },
        {
            name: '爆笑安检',
            date: '2022 年 5 月 18 日',
            content: '王宝强过安检这段，看一次笑一次，至今还无人可以超越！爆笑安检',
            listType: 'video',
            portraitUrl: '/public/img/user/touxian01.jpg',
            coverUrl: '/public/img/comment/cover02.jpg',
            repostNum: "12",
            commentNum: "20",
            likeNum: "115"
        },
        {
            name: '深化王企鹅',
            date: '2021 年 1 月 11 日',
            content: '手机电量剩一半就充比较好，还是应该等快没电了再充？',
            listType: 'article',
            portraitUrl: '/public/img/user/touxian07.jpg',
            coverUrl: '/public/img/comment/cover03.jpg',
            repostNum: "126",
            commentNum: "1324",
            likeNum: "5354"
        }]
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
