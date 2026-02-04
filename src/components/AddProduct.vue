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
        <input type="file" multiple @change="onFilesSelected" accept="image/*" />
      
      <button type="submit">GUARDAR PRODUCTO</button>
    </form>
  </div>
</template>

<script setup>
 
import { ref } from 'vue'
import { supabase } from '../supabase'

const name = ref('')
const price = ref(0)
const description = ref('')
const selectedFiles = ref([])

const onFilesSelected = (e) => {
  selectedFiles.value = Array.from(e.target.files)
}

const uploadImages = async (productId) => {
  const paths = []

  for (const file of selectedFiles.value) {
    const filePath = `productos/${productId}/${Date.now()}-${file.name}`

    const { error } = await supabase.storage
      .from('product-images') // 👈 nombre del bucket
      .upload(filePath, file)

    if (error) throw error

    paths.push(filePath)
  }

  return paths
}

const addProduct = async () => {
  // 1️⃣ crear producto
  const { data: product, error: insertError } = await supabase
    .from('products')
    .insert({
      name: name.value,
      price: price.value,
      description: description.value,
      images: []
    })
    .select()
    .single()

  if (insertError) {
    console.error('Error creando producto:', insertError)
    return
  }

  // 2️⃣ subir imágenes
  const imagePaths = await uploadImages(product.id)

  console.log('IMAGES UPLOADED:', imagePaths)

  // 3️⃣ actualizar producto
  const { error: updateError } = await supabase
    .from('products')
    .update({ images: imagePaths })
    .eq('id', product.id)

  if (updateError) {
    console.error('Error actualizando imágenes:', updateError)
    return
  }

  console.log('IMAGES GUARDADAS:', imagePaths)

  alert('Producto guardado')

  // 4️⃣ limpiar formulario
  name.value = ''
  price.value = 0
  description.value = ''
  selectedFiles.value = []
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
