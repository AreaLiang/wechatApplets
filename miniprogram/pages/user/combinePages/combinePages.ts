// pages/user/combinePages/combinePages.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        titleList: [{
            name: '收藏',
            componentName: 'CollectPage',
            url: 'src/pages/index/User/GatherPage?index=0&&name=CollectPage'
        },
        {
            name: '评论',
            componentName: 'Comment',
            url: 'src/pages/index/User/GatherPage?index=1&&name=Comment'
        },
        {
            name: '点赞',
            componentName: 'LikePage',
            url: 'src/pages/index/User/GatherPage?index=2&&name=LikePage'
        },
        {
            name: '历史',
            componentName: 'HistoryRecord',
            url: 'src/pages/index/User/GatherPage?index=3&&name=HistoryRecord'
        },
        {
            name: '推送',
            componentName: 'PushPage',
            url: 'src/pages/index/User/GatherPage?index=4&&name=PushPage'
        },
        {
            name: '举报',
            componentName: 'ReportPage',
            url: 'src/pages/index/User/GatherPage?index=5&&name=ReportPage'
        }],
        actIndex: 1
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