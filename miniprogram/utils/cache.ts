const tokenKey = "token";
export default {
     setToken(token:string){
         wx.setStorageSync(tokenKey,token);
     },
     getToken():string{
        return wx.getStorageSync(tokenKey);
     }
}