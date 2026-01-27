<template>
  <div class="grid">

    <!--solo llama productos en productlist-->
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add="handleAdd"
    />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  components: { ProductCard },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
