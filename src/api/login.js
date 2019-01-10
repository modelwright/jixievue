import request from '@/uitls/request'
import {packUrl,managerUrl} from '@/uitls/count'

/*
  定义全局接口
*/

export function login(data) {
    return request({
        url: packUrl + managerUrl + '/login/index',
        method: 'post',
        data: data
    })
}

export function logout() {
    return request({
        url: packUrl + managerUrl + '/login/logout'
    })
}
