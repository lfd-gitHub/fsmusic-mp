import http from "./http"
type LoginData = {username:string,password:string};
export default {
    login(data:LoginData){
        return http.post('/api/user/login',data);
    }
}