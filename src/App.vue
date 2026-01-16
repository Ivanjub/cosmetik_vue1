<template>
  <div id="app">
    <section class="section1">
    <h1>Bienvenido a mi tienda</h1>
    <a href="index.html">
    <img class="logo" src="./assets/boutique.jpg" alt="Logo"></a>
    </section>

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
.section1 {
  background-color: #f5f5f5;
  width: 100%;
  height: 150px;
  padding: 0px;
  margin-bottom: 20px;
  border-radius: 8px;
}
h1 {
  text-align: center;
  position: relative;
  top: 40px;
  color: #34495e;
}
.logo {  
  position: relative;
  bottom: 30px;
  left: 90px;
  width: 150px;
  height: auto;
  display: left;
  margin: 0 auto;
}

</style>
