<template>
  <div class="card">

    <img :src="product.image !== 'sin imagen'
        ? product.image
        : '/no-image.png'" width="130" />    
    <h3>{{ product.name }}</h3>    
    <p class="price">$ {{ product.price }}</p>
    <button @click="addToCart">Agregar</button>
    
  </div>
</template>

<script>

    export default {
        name: 'ProductCard',
        props: {
            product: {
                type: Object,
                required: true
            }
        }
    }

</script>

<style scoped>
.card {
  width: 220px;
  border-radius: 10px;
  padding: 15px;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0,0,0,.1);
  text-align: center;
}

img {
  width: 100;
  height: 150px;
  object-fit: cover;
  /* border-radius: 8px; */
}

.price {
  color: #d63384;
  font-weight: bold;
}

button {
  margin-top: 10px;
  padding: 8px;
  border: none;
  border-radius: 6px;
  background: #d63384;
  color: white;
  cursor: pointer;
}
</style>
