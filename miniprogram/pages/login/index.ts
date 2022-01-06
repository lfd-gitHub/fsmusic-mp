import util from "../../utils/util";
import userApi from '../../api/user';
import cache from "../../utils/cache";

// pages/login/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
     username:'lfd',
     password:'lfd'
  },

  doChange(){
      
  },

  async doLogin() {
      const username = this.data.username;
      const password = this.data.password;
      if(username.length <=0 || password.length <= 0){
         util.toast("请输入用户名和密码");
         return;
      }
      const resp = await userApi.login({username,password});
      if(resp?.data?.data){
         cache.setToken(resp.data.data);
         util.navBack();
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

})