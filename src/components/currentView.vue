<template>

  <div id="app">

    <!-- MENÚ -->
    <nav class="menu">
      
      <button @click="currentView = 'bolsos'">Bolsos</button>
      <button @click="currentView = 'cosmeticos'">Cosméticos</button>
      <button @click="currentView = 'tira'">Tira</button>            
      <button @click="currentView = 'add'">Agregar producto</button>
      
    </nav>

    <!-- CONTENIDO -->
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
  <br>
  
  <footer id="footer">
  <p>© Sistema 2026</p>

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
  </div>
</footer>    

</template>

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


</style>