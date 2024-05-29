import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '../components/ProductList.vue';
import ShoppingCart from '../components/ShoppingCart.vue';
import CheckoutPage from '../components/CheckoutPage.vue';

const routes = [
  {
    path: '/',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/cart',
    name: 'ShoppingCart',
    component: ShoppingCart
  },
  {
    path: '/checkout',
    name: 'CheckoutPage',
    component: CheckoutPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
