<template>
  <div class="checkout-page">
    <h1>Checkout</h1>
    <form @submit.prevent="submitOrder">
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" required />
      </div>
      <div>
        <label for="address">Address:</label>
        <input type="text" v-model="address" id="address" required />
      </div>
      <div>
        <label for="payment">Payment Method:</label>
        <select v-model="paymentMethod" id="payment" required>
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>
      <button type="submit">Place Order</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'CheckoutPage',
  setup() {
    const name = ref('');
    const address = ref('');
    const paymentMethod = ref('credit-card');

    const submitOrder = () => {
      // Handle order submission
      alert('Order submitted');
    };

    return {
      name,
      address,
      paymentMethod,
      submitOrder
    };
  }
};
</script>

<style scoped>
.checkout-page {
  padding: 20px;
}
</style>
