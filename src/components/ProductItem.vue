<template>
    <div class="product-item">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <p>{{ formatCurrency(product.price) }}</p>
      <button @click="handleAddToCart">Add to Cart</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductItem',
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    methods: {
      handleAddToCart() {
        this.$emit('addToCart', this.product);
      },
      formatCurrency(value) {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
      }
    }
  };
  </script>
  
  <style scoped>
  .product-item {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px;
  }
  </style>
  