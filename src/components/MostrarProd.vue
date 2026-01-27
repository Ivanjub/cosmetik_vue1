
<template>
  <div>
    <h2>Lista de Productos</h2>
    
      <!-- <div v-for="producto in products" :key="producto.id">
        <h3>{{ producto.name }}</h3>
        <p style="font-size: 16px;">{{ producto.description }}</p>
        <strong>${{ producto.price }}</strong>

        <img :src="producto.image !== 'sin imagen'
        ? producto.image
        : '/no-image.png'" width="100" />
      </div> -->
      </div>

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
import { ProductCard } from './ProductCard.vue'
import { supabase } from '../supabase'

export default {
  components: { ProductCard },

  data() {
    return { products: [] }
  },

  async mounted() {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      
      
    if (error) {
      console.error(error)
      return
    }      
      this.products = data
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