import util from '../utils/util';
import log from '../utils/log';
import cache from '../utils/cache';

const app = getApp<IAppOption>();
const baseUrl = app.globalData.baseUrl;

const request = (url:any, method:any, data:any) : Promise<any> => {
    return new Promise((r, j) => {
      util.showLoading();
      wx.request({
        url: url,
        data,
        method: method,
        success: (resp) => r(resp),
        fail: j,
        complete: () => util.hideLoading()
      });
    });
  };

const _http = async function (url:string, method?:any,data?:any) {
   const sUrl = `${baseUrl}${url}`;
   log.d(`[http] url = ${sUrl}`);
   try{
    const resp = await request(sUrl,method,data);
    log.d(`[http] result = ${JSON.stringify(resp)}`);
    if(resp?.statusCode === 401){
       cache.setToken('');
       const currentPage = getCurrentPages();
       const currentRoute = currentPage[currentPage.length - 1].route;
       if(currentRoute !== 'pages/login/index'){
           util.navTo("/pages/login/index");
       }
    }
    if(resp?.data?.code !== 0){
      const msg = resp?.data?.errorMsg ?? '请求失败';
      util.toast(msg);
      return null;
    };
    return resp;
   }catch(e){
     log.e(e);  
     log.d(`[http] error = ${e?.stack}`)
     util.toast('请求失败');
     return null;
   }
};

export default {
  post: (url:string, data?:any) => _http(url, 'POST', data),
  get: (url:string, data?:any) => _http(url, 'GET', data),
}
