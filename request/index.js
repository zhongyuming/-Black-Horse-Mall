// 同时发送异步代码的次数
let ajaxTimes = 0

export const request = (params) => {
    ajaxTimes++;
    // 显示一个加载中
    wx.showLoading({
        title: '加载中',
        mask: true
    });
    // 定义公共的url
    // https://api-hmugo-web.itheima.net/api/public/v1/categories
    const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1";
    return new Promise((resolve, reject) => {
        wx.request({
            ...params,
            url: baseUrl + params.url,
            success: (result) => {
                resolve(result);
            },
            fail: (err) => {
                reject(err);
            },
            complete: () => {
                ajaxTimes--;
                if (ajaxTimes === 0) {
                    wx.hideLoading();
                }
            }
        });

    })
}