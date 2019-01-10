import { validatenull } from '@/uitls/validate'

const userData = 'userData'

// 获取
export function GetuserData() {
    return JSON.parse(localStorage.getItem(userData))
}
// 修改
export function SetuserData(val) {
    return localStorage.setItem(userData, JSON.stringify(val))
}
// 删除
export function RemoveuserData() {
    return localStorage.removeItem(userData)
}

/**
 * 存储localStorage
 */
export const setLocalStore = (params) => {
    const {
        name,
        content,
        type
    } = params
    const obj = {
        dataType: typeof (content),
        content: content,
        type: type,
        datetime: new Date().getTime()
    }
    if (type) window.sessionStorage.setItem(name, JSON.stringify(obj))
    else window.localStorage.setItem(name, JSON.stringify(obj))
}

/**
 * 获取主题色localStorage
 */
export const getLocalStore = (params) => {
    const { name } = params
    let obj = {}
    let content
    obj = window.localStorage.getItem(name)
    if (validatenull(obj)) obj = window.sessionStorage.getItem(name)
    if (validatenull(obj)) return
    obj = JSON.parse(obj)
    if (obj.dataType === 'string') {
        content = obj.content
    } else if (obj.dataType === 'number') {
        content = Number(obj.content)
    } else if (obj.dataType === 'boolean') {
        content = eval(obj.content)
    } else if (obj.dataType === 'object') {
        content = obj.content
    }
    return content
}

/**
 * 删除localStorage
 */
export const removeLocalStore = params => {
    let {
        name
    } = params
    window.localStorage.removeItem(name)
    window.sessionStorage.removeItem(name)
}