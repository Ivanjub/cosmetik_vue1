<template>

  <div>
    <section class="section1">
    <h1>Bienvenido a Tienda Boutique</h1>
    <a href="index.html">      
    <img class="logo" src="./assets/boutique.png" alt="Logo"></a>

    <img class="build" src="./assets/imgbuild.png" alt="En Construcción">    

    </section>

    <CurrentView />
    
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

<style scoped>
/* Aquí puedes agregar estilos globales */
.section1 {
  background-color: #f5f5f5;
  width: 100%;
  height: 150px;
  padding: 0px;
  margin-bottom: 20px;
  border-radius: 8px;
  justify-content: flex-end;
  ;
}
h1 {
  text-align: center;
  position: relative;
  top: 40px;
  color: #34495e;
}
.logo {  
  position: relative;
  bottom: 50px;
  left: 250px;
  width: 200px;
  /* height: auto; */
  display: left;
;
}
.build {
  width: 280px;
  float: right;
  margin-top: -80px;
  margin-right: 90px;
  
  /* float: right; */
}

</style>
