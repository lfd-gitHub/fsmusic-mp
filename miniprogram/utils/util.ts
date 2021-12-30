
const toast = (msg: String) => wx.showToast({title:`${msg}`,icon:'none'});
const showLoading = () => wx.showLoading({title:''});
const hideLoading = () => wx.hideLoading();

export default {
    toast,showLoading,hideLoading
}