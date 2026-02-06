<template>

  <div id="app">

    <!-- MENÚ -->
    <nav class="menu">
      
      <button @click="currentView = 'bolsos'">Bolsos</button>
      <button @click="currentView = 'cosmeticos'">Cosméticos</button>

    <ul>
      <li><router-link to="/cosmeticos">Todos</router-link></li>
      <li><router-link to="/cosmeticos/maquillaje">Maquillaje</router-link></li>
      <li><router-link to="/cosmeticos/facial">Cuidado Facial</router-link></li>
      <li><router-link to="/cosmeticos/capilar">Cuidado Capilar</router-link></li>
    </ul>

      <button @click="currentView = 'tira'">Otros</button>            
      <button v-if="isDev === false" @click="currentView = 'add'">Agregar producto</button>

      
      
    </nav>

    <!-- CONTENIDO -->
     <div class="contenedor">
    <ProductList
      v-if="currentView === 'bolsos'"
      :products="products"
    />

    <AddProduct
      v-if="currentView === 'add'"
      @product-added="handleProductAdded"
    />

    <TiraImagen
      v-if="currentView === 'tira'"
      :products="products"
    />

    </div>

  </div>
  <br>
  
  <footer id="footer">
  
  <div class="contacto">
    <h4>Contacto</h4>
    <p><strong>Fono:</strong> <a href="tel:+56989646126">+56 9 8964 6126</a></p>

    <a
  href="https://wa.me/+56989646126"
  target="_blank"
  style="display:inline-flex;align-items:center;
         background:#25D366;color:#fff;
         padding:10px 16px;border-radius:6px;
         text-decoration:none;font-weight:600;"
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    width="20"
    style="margin-right:8px"
  />
  Contactar por WhatsApp
</a>

    <p><strong>Email:</strong> 
      <a href="mailto:ivan.guerrero@sistventas.cl">
        ivan.guerrero@sistemaventas.cl
      </a>
    </p>
    <p>© Sistema 2026 - Creado por <a href="">SoporteAFTA</a>- Desarrollo web</p>
  </div>
</footer>    

</template>

<script setup>
        const isDev = process.env.MODE === 'development' // Solo muestra el botón en desarrollo
</script>

<script>

import { supabase } from '../supabase'
import ProductList from './ProductList.vue'
import AddProduct from './AddProduct.vue'
import TiraImagen from './tiraImagen.vue'

export default {
  name: 'App', //cambio App a currentView para evitar conflicto con currentView.vue
  
  components: {
    ProductList,
    TiraImagen,
    AddProduct
  },
  
  data() {
    return {
      products: [],
      currentView: 'bolsos' // 'list' | 'add' | 'bolsos' | 'cosmeticos'
      
    }
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
},

  methods: { 
  //metodo para manejar el evento guardar productos en la base de datos
  async handleProductAdded() { this.currentView = 'list' }
}
}

</script>

<style>
.menu {
  display: flex;
  justify-content: center;
  gap: 10px;
  background: #f8c1d9;
  padding: 15px;
}

.menu button {
  background: white;
  border: none;
  padding: 10px 15px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
}

.menu button:hover {
  background: #ffe3ef;
}

#footer {
  background: #111;
  color: #fff;
  padding: 20px;
  text-align: center;
}

#footer a {
  color: #4fc3f7;
  text-decoration: none;
}

.contacto {
  margin-top: 10px;
}

.contenedor {
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 15px;
  align-content: center;
}

</style>