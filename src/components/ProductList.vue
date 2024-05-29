<template>
    <div class="product-list">
      <h1>Product List</h1>
      <div class="products-grid">
        <ProductItem v-for="product in store.products" :key="product.id" :product="product" @addToCart="addToCart"/>
      </div>
      <form @submit.prevent="addProduct">
        <input v-model="newProductName" placeholder="Product Name" required />
        <input v-model.number="newProductPrice" type="number" step="0.01" placeholder="Product Price" required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { store } from '../store.js';
  import ProductItem from './ProductItem.vue';
  
  export default {
    name: 'ProductList',
    components: {
      ProductItem
    },
    setup() {
      const newProductName = ref('');
      const newProductPrice = ref(0);
  
      const addProduct = () => {
        if (newProductName.value && newProductPrice.value > 0) {
          store.addProduct(newProductName.value, newProductPrice.value);
          newProductName.value = '';
          newProductPrice.value = 0;
        }
      };
  
      const addToCart = (product) => {
        store.addToCart(product);
      };
  
      return {
        store,
        newProductName,
        newProductPrice,
        addProduct,
        addToCart
      };
    }
  };
  </script>
  
  <style scoped>
  .product-list {
    padding: 20px;
  }
  
  .products-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  
  form {
    margin-top: 20px;
  }
  
  button {
    background-color: yellow;
    border: none;
    color: black;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: darkgoldenrod;
  }
  </style>
  