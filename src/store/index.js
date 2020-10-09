import Vue from 'vue'
// 1.导入包
import Vuex from 'vuex'
Vue.use(Vuex)
// 2.创建store对象
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})
