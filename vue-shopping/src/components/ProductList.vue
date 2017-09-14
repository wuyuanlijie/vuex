<template lang="html">
  <ul>
    <!-- 共享数据 -->
    <li v-for="p in products">
      {{p.title}} - {{p.price | currency}}
      <br>
      <button @click="addToCart(p)">购物</button>
    </li>
  </ul>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  computed: mapGetters({
    // 接受数据 使用computed
    products: 'allProducts'
  }),
  created () {
    // 一个程序只能有一个状态树
    this.$store.dispatch('getAllProduct')
  },
  // ????这里问题要看看
  methods: mapActions([
   'addToCart'
 ]),
 // methods: {
 //    ...mapActions([
 //      'increment' // 映射 this.increment() 为 this.$store.dispatch('increment')
 //    ]),
 //    ...mapActions({
 //      add: 'increment' // 映射 this.add() 为 this.$store.dispatch('increment')
 //    })
 //  }
}
</script>

<style lang="css">
</style>
