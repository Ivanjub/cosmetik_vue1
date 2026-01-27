<template>
  <div class="add-product">
    <h3>Agregar Nuevo Producto</h3>
    <form @submit.prevent="addProduct">
      
        <label for="name">Nombre: </label>
        <input type="text" v-model="name" required />
      
        <label for="price">Precio: </label>
        <input type="number" v-model="price" required />
      
        <label for="description">Descripción: </label>
        <textarea v-model="description"></textarea>
      
        <label for="image">URL de la Imagen: </label>
        <input type="file" @change="onFileChange" accept="image/*" />
      
      <button type="submit">Guardar Producto</button>
    </form>
  </div>
</template>

<script>

  import { supabase } from '../supabase'
  
  
export default {
  name: 'AddProduct',
  data() {
    return {
        name: '',
        price: 0,
        description: '',
        imageFile: null
      
    }
  },

  methods: {

    onFileChange(e) {
      this.imageFile = e.target.files[0]
    },

    async addProduct() {

      let imageUrl = 'sin imagen'

      // Subir la imagen a Supabase Storage
      // 1️⃣ Subir imagen (si hay)
      if (this.imageFile) {
        const fileExt = this.imageFile.name.split('.').pop()
        const fileName = `${Date.now()}.${fileExt}`

        const { error: uploadError } = await supabase.storage
          .from('products')
          .upload(fileName, this.imageFile)

        if (uploadError) {
          console.error('Error subiendo imagen:', uploadError)
          return
        }

        // 2️⃣ Obtener URL pública
        const { data } = supabase.storage
          .from('products')
          .getPublicUrl(fileName)

        imageUrl = data.publicUrl
      }

      // 3️⃣ Guardar producto en DB
      const { error } = await supabase
        .from('products')
        .insert([
          {
            name: this.name,
            price: this.price,
            description: this.description,
            image: imageUrl
          }
        ])

        if (error) {
        console.error('Error guardando producto:', error)
        return
      }

      alert('Producto Guardado')

      // limpiar
      this.name = ''
      this.price = 0
      this.description = ''
      this.imageFile = null

    }
  }
}

</script>

<style scoped>
.add-product {
  margin-top: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

div {
  margin-bottom: 10px;
}

label {
  margin-bottom: 5px;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
