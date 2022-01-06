
const toast = (msg: String) => wx.showToast({title:`${msg}`,icon:'none'});
const showLoading = () => wx.showLoading({title:''});
const hideLoading = () => wx.hideLoading();
const navTo = (url:string) => wx.navigateTo({url});
const navBack = () => wx.navigateBack();

export default {
    toast,showLoading,hideLoading, //
    navTo,navBack
}