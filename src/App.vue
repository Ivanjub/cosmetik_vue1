<template>
  <div id="app">
    <h1>Bienvenido a la Tienda</h1>
    <CurrentView></CurrentView>
    

  </div>
</template>

<script>
import CurrentView from './components/currentView.vue';

export default {
  name: 'App',
  components: {
    CurrentView
  }
  
}
</script>

<style>
/* Aquí puedes agregar estilos globales */
</style>
