import Vue from 'vue'
import Vuex from 'vuex'

/**
 * 保存到store
 */
import app from './modules/app'
import getters from './getters'

Vue.use(Vuex)

/**
 * 创建vuex仓库 先放进去
 */
const store = new Vuex.Store({
    modules: {
        app
    },
    getters
})

export default store