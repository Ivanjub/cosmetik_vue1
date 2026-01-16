<template>
  <div class="add-product">
    <h3>Agregar Nuevo Producto</h3>
    <form @submit.prevent="addProduct">
      <div>
        <label for="name">Nombre:</label>
        <input type="text" v-model="newProduct.name" required />
      </div>
      <div>
        <label for="price">Precio:</label>
        <input type="number" v-model="newProduct.price" required />
      </div>
      <button type="submit">Agregar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data() {
    return {
      newProduct: {
        name: '',
        price: ''
      }
    };
  },
  methods: {
    addProduct() {
      // Aquí puedes emitir un evento o manejar la lógica para agregar el producto
      this.$emit('product-added', { ...this.newProduct });
      this.newProduct.name = '';
      this.newProduct.price = '';
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
