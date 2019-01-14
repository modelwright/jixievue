import axios from 'axios'
import { GetuserData } from '@/uitls/auth'
import router from '../router/mod1router';
import store from '../store';

let load;
const service = axios.create({
    // baseURL: process.env.BASE_API, // api的base_url config配置
    timeout: 30000
    // withCredentials: true
})

// request拦截器
service.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers['X-Token'] = GetuserData().accessToken
        }
        // NProgress.start();
        return config
    },
    error => {
        console.log(error) // for debug
        Promise.reject(error)
    }
)

// respone拦截器
service.interceptors.response.use(response => {
    /**
    * code为非20000是抛错
    */
    const res = response.data;
    // NProgress.done();
    load.close();
    if (res.status !== 200) {

        // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
        if (res.status === 50008 || res.status === 50012 || res.status === 50014 || res.status === 90001) {
            // MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
            //     confirmButtonText: '重新登录',
            //     cancelButtonText: '取消',
            //     type: 'warning'
            // }).then(() => {
                store.dispatch('FedLogOut').then(() => {
                    location.reload() 
                })
            // })
        }
        return Promise.reject('error')
    } else {
        return response.data
    }
}, error => {
    load.close();
    console.log('err' + error) // for debug
    if(axios.isCancel(error)){
        console.log(error)
        // Message({
        //     message: `服务器错误！错误代码：${error.response.status}`,
        //     type: 'error'
        // })
        return Promise.reject("Ajax Abort: 该请求在axios拦截器中被中断")
    } else if (error.response) {
        switch (error.response.status) {
            case 401:
                router.push('error/401');
                break;
            case 403:
                router.push('error/403');
                break;
            case 404:
                router.push('error/404');
                break;
            case 500:
                router.push('error/500');
                break;
            default: 
                // Message({
                //     message: `服务器错误！错误代码：${error.response.status}`,
                //     type: 'error'
                // })
        }
        return Promise.reject(error)
    }
})