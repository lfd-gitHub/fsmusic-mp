const baseUrl = "https://springboot-vovg-1490578-1308849595.ap-shanghai.run.tcloudbase.com"

export default {
    get(uri:string){
       wx.showLoading({title:"加载中..."});
       return new Promise((resolve,reject) => {
           wx.request({
              url:baseUrl + uri,
              method:'GET',
              success:(res) => resolve(res.data),
              fail:reject,
              complete:() => wx.hideLoading()
           });
       });
    }
}

