<template>
  <div class="shopping-cart">
    <h1>Shopping Cart</h1>
    <div class="cart-grid">
      <div v-for="item in store.cart" :key="item.product.id" class="cart-item">
        <p>{{ item.product.name }} x {{ item.quantity }}</p>
        <p>{{ formatCurrency(item.product.price * item.quantity) }}</p>
        <button @click="removeFromCart(item.product)">Remove</button>
      </div>
    </div>
    <p>Total: {{ formatCurrency(store.cartTotal) }}</p>
    <button v-if="store.cart.length > 0" @click="checkout">Checkout</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { store } from '../store.js';

export default {
  name: 'ShoppingCart',
  setup() {
    const router = useRouter();

    const removeFromCart = (product) => {
      store.removeFromCart(product);
    };

    const formatCurrency = (value) => {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
    };

    const checkout = () => {
      router.push('/checkout');
    };

    return {
      store,
      removeFromCart,
      formatCurrency,
      checkout
    };
  }
};
</script>

<style scoped>
.shopping-cart {
  padding: 20px;
}

.cart-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.cart-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
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
