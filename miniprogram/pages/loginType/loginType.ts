// pages/loginType/loginType.ts
import {test} from '../../request/api';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
        hasUserInfo: false,
    },
    weChatLogin() {
        //获取用户头像信息
        const getUserInfo = new Promise((resolve, reject) => {
            wx.getUserProfile({
                desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
                success: (res) => {
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                    resolve(res.userInfo);
                },
                fail: () => {
                    reject('用户拒绝');
                }
            })
        });
        // 登录
        const getUserCode = new Promise((resolve, reject) => {
            wx.login({
                success: res => {
                    // 发送 res.code 到后台换取 openId, sessionKey, unionId
                    resolve(res);
                },
                fail: () =>{
                    reject("登录失败")
                }
            })
        });
        Promise.all([getUserInfo,getUserCode]).then((res)=>{
            console.log("promiseAll66:",res);
            wx.redirectTo({
                url: '../home/home'
            })
        }).catch((e)=>{
            console.log("promiseAll66:",e)
        });
    },
    accoundLogin() {
       console.log(this.data.userInfo);
        test({}).then((res)=>{
            console.log(res);
        });
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