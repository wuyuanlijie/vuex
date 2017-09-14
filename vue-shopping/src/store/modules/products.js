import shop from '../../api/shop.js'
import * as types from '../mutation-types.js'
const state = {
  all: []
}
const getters = {
  allProducts: state => state.all //json对象 里面有属性有一个方法
}
const mutations = {
   [types.RECEIVE_PRODUCTS] (state, {products}) {
      state.all = products
  },
  [types.ADD_TO_CART] (state, {id}) {
    state.all.find(p => p.id === id).inventory--
  }
}
const actions = {
  // api请求state.all 填充api应该是单独
  getAllProduct ({commit}) {
    shop.getProducts(products => {
      commit(types.RECEIVE_PRODUCTS, {products})
      console.log(products, types.RECEIVE_PRODUCTS)
    })
  },


}

export default {
  // 模块内的自我循环 独立的一个系统 四大金刚
  state, //状态
  getters,  //获取
  actions,
  mutations

}
