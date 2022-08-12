// pages/user/notification/notification.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        messageList: [{
            name: '萌萌的小灰灰呢',
            portraitUrl: '/public/img/user/touxian01.jpg',
            likeNumber: 13,
            comment: '猫：我属于那种文科背不会，理科学不会的那种',
            data: '2022-04-26'
        }, {
            name: '单曲循环!',
            portraitUrl: '/public/img/user/touxian03.jpg',
            likeNumber: 16,
            comment: '每次玩手机玩到特别困了，放下手机后又瞬间精神满满了',
            data: '2022-03-16'
        }, {
            name: '青春是套旧校服',
            portraitUrl: '/public/img/user/touxian05.jpg',
            likeNumber: 1035,
            comment: '在家吹着空调，听着歌，看着到处挤成一团的人，怎一个爽字得了',
            data: '2022-03-11'
        }, {
            name: '系统通知',
            portraitUrl: '/public/img/user/notice.png',
            tip: '你提交的头条号信息修改申请已通过审核。',
            data: '2022-02-10',
            type: 'notice'
        }, {
            name: 'showda',
            portraitUrl: '/public/img/user/touxian07.jpg',
            likeNumber: 61,
            comment: '人在前面，魂在后面追',
            data: '2022-02-06'
        }]
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