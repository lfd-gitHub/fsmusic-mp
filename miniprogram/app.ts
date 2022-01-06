import cache from "./utils/cache";
import utils from './utils/util';

// app.ts
App<IAppOption>({
  globalData: {
    baseUrl:'http://localhost:8080'
  },
  onLaunch(options: any){
     const token = cache.getToken();
     if(!token && options.path !== 'pages/login/index'){
        utils.navTo('pages/login/index');
     }
  },
})