<template>
  
    <h2>Productos Disponibles</h2>
    
    <div class="grid">
      <ProductCard v-for="product in products" :key="product.id"
      :product="product"
      @add="handleAdd" />
    </div>
  
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  name: 'ProductList',
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
/* Estilos específicos para el componente */

.grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

h2 {
  color: #2c3e50;
  text-align: center;
}

</style>
