<template>
  <div id="app">
    <h1>Shop Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <product-list></product-list>
    <br>
    <cart></cart>
  </div>
</template>

<script>
import Cart from '@/components/Cart'
import ProductList from '@/components/ProductList'
export default {
  name: 'app',
  components: {
    Cart,
    ProductList,
  }
}
</script>

<style>

</style>
