<template>
  <!-- imagen principal -->
  <swiper
    :modules="[Navigation]"
    navigation
    :slides-per-view="1"
    class="main-swiper"
  >
    <swiper-slide v-for="img in images" :key="img">
      <img :src="img" class="main-img" />
    </swiper-slide>
    
  </swiper>

  <!-- tira thum  bnails -->
  <swiper
    :slides-per-view="4"
    space-between="10"
    class="thumbs"
  >
    <!-- v-for="(img, i) in images" :key="i" // cambiar si las urls se repiten o tiran error,
      si las urls se repiten se repetirían las imagenes -->
    <swiper-slide v-for="img in images" :key="img">
      <img :src="img" class="thumb-img" />
    </swiper-slide>
  </swiper>

</template>

<script setup>


import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import { supabase, getPublicImage } from '@/supabase'

const props = defineProps({
  productId: Number
})

const images = ref([])

onMounted(async () => {
  const { data, error } = await supabase
    .from('products')
    .select('images')
    .eq('id', props.productId)
    .single()

  if (!error && data?.images) {
    images.value = data.images.map(path => getPublicImage(path))
  }
})
</script>

<style>

.main-img {
  width: 100%;
  height: 350px;
  object-fit: contain;
}

.thumb-img {
  width: 100%;
  height: 80px;
  object-fit: cover;
  cursor: pointer;
}

</style>
