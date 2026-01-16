<template>
  <div>
    <h2>Productos Disponibles</h2>
    
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - ${{ product.price }}
      </li>
    </ul>
    <hr />
    <p>Total productos: {{ products.length }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
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

h2 {
  color: #2c3e50;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #ecf0f1;  
  margin: 10px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
