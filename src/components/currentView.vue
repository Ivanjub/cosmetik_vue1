<template>
  <div id="app">
    <!-- MENÚ -->
    <nav class="menu">
      <button @click="currentView = 'list'">Productos</button>
      <button @click="currentView = 'add'">Agregar producto</button>
    </nav>

    <!-- CONTENIDO -->
    <ProductList
      v-if="currentView === 'list'"
      :products="products"
    />

    <AddProduct
      v-if="currentView === 'add'"
      @product-added="handleProductAdded"
    />
  </div>
</template>

<script>

// console.log('DB:', db)

//importar colección, agregar documentos y obtener documentos
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { db } from '../firebase'//importar la conexión

import ProductList from './ProductList.vue'
import AddProduct from './AddProduct.vue'

// import { version } from 'vue'
// console.log('Vue version:', version)

export default {
  name: 'App', //cambio App a currentView para evitar conflicto con currentView.vue
  components: {
    ProductList,
    AddProduct
  },
  data() {
    return {
      products: [],
      currentView: 'list'
      
    }
  },

  async mounted() {
    try{
  const querySnapshot = await getDocs(collection(db, 'products'))
  // console.log('DOCS', querySnapshot.docs)

  this.products = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
  // console.log('PRODUCTOS', this.products)

    } catch (error) {
      console.error('Error al obtener los productos:', error)
    }
},

  methods: {
  
  //metodo para manejar el evento guardar productos en la base de datos
  async handleProductAdded(product) {
    const docRef = await addDoc(collection(db, 'products'), {
      name: product.name,
      price: product.price
    })

    this.products.push({id: docRef.id, ...product})

    this.currentView = 'list'
  }
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
</style>