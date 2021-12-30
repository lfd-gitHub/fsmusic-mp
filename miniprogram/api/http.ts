import util from '../utils/util';
import log from '../utils/log';

const baseUrl = "http://localhost:8080";

const request = (url:any, method:any, data:any) : Promise<any> => {
    return new Promise((r, j) => {
      wx.request({
        url: url,
        data,
        method: method,
        success: (resp) => r(resp),
        fail: j,
      });
    });
  };

const _http = async function (url:string, method?:any,data?:any) {
   const sUrl = `${baseUrl}${url}`;
   log.d(`[http] url = ${sUrl}`);
   try{
    util.showLoading();
    const resp = await request(sUrl,method,data);
    log.d(`[http] result = ${JSON.stringify(resp)}`);
    if(resp?.data?.code !== 0) return null;
    return resp.data;
   }catch(e){
     log.e(e);  
     log.d(`[http] error = ${e?.stack}`)
     return null;
   }finally{
       wx.hideLoading();
   }
};

export default {
  post: (url:string, data?:any) => _http(url, 'POST', data),
  get: (url:string, data?:any) => _http(url, 'GET', data),
}
