import { reactive } from 'vue';

export const store = reactive({
  products: [
    { id: 1, name: 'Product 1', price: 10.00 },
    { id: 2, name: 'Product 2', price: 20.00 },
    { id: 3, name: 'Product 3', price: 30.00 }
  ],
  cart: [],
  addProduct(name, price) {
    const newProduct = {
      id: this.products.length + 1,
      name,
      price
    };
    this.products.push(newProduct);
  },
  addToCart(product) {
    const item = this.cart.find(item => item.product.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
  },
  removeFromCart(product) {
    const index = this.cart.findIndex(item => item.product.id === product.id);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  },
  get cartTotal() {
    return this.cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }
});
