<template>
  
<div class="card">

    <!-- Swiper de imágenes -->
    <swiper
      v-if="images.length"            
      :slides-per-view="1"
      :modules="[Pagination]"
      pagination
      class="product-swiper"
    >
      <swiper-slide v-for="img in images" :key="img">
        <img :src="img" />
      </swiper-slide>
    </swiper>

    <!-- fallback -->
    <img v-else src="/no-image.png" />

    <h3>{{ product.name }}</h3>
    <p class="price">$ {{ product.price }}</p>
    <button @click="addToCart">Agregar</button>

    <!-- <pre style="font-size:11px; text-align:left">
{{ product.images }}
</pre> -->

    
  </div>

</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import { getPublicImage } from '../supabase'

export default {
  name: 'ProductCard',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },

  setup() {
    return {
      Pagination
    }
  },

  computed: {
    images() {
      return this.product.images
        ? this.product.images.map(path => getPublicImage(path))
        : []
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
  /* width: 100%; */
  /* height: 150px; */
  /* object-fit: cover; */
  border-radius: 8px;
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

.product-swiper img {
  width: 100%;
  height: 300px;
  object-fit: flex;
}

</style>
