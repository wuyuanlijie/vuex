import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters'
import products from './modules/products'
import * as actions from './actions'
// 唯一状态树
Vue.use(Vuex)

console.log(actions);
export default new Vuex.Store ({
    // state,
    actions,
    // mutations,
    // getter,
    // 模板化的套件 大仓库中的小仓库
    modules: {
      products,
    }

})
