// pages/user/user.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        commonFunctions: [{
            name: "关注",
            icon: "like",
            url: "./follow/follow",
        },
        {
            name: "消息通知",
            icon: "bellring-on",
            url: "./notification/notification",
        },
        {
            name: "收藏",
            icon: "star",
            url: "./combinePages/combinePages?index=0",
        },
        {
            name: "浏览历史",
            icon: "time",
            url: "./combinePages/combinePages?index=3",
        },
        {
            name: "钱包",
            icon: "photo-wall",
            url: "src/pages/index/User/Wallet",
        },
        {
            name: "用户反馈",
            icon: "pencil",
            url: "",
        },
        {
            name: "免流量服务",
            icon: "clip",
            url: "src/pages/index/User/FreeStreamingService",
        },
        {
            name: "系统设置",
            icon: "setting",
            url: "src/pages/index/User/SystemSettings"
        }
        ],
        moreFunctions: [{
            name: "订单",
            icon: "copy",
            url: "",
        },
        {
            name: "夜间模式",
            icon: "eyes-on",
            url: "",
        },
        {
            name: "评论",
            icon: "comment",
            url: "./combinePages/combinePages?index=1",
        },
        {
            name: "点赞",
            icon: "sticker",
            url: "src/pages/index/User/GatherPage?index=2&&name=LikePage",
        }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})