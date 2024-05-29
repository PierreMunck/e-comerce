import { mount } from '@vue/test-utils';
import ProductList from '../src/components/ProductList.vue';
import { store } from '../src/store.js';

describe('ProductList.vue', () => {
  it('renders product list', () => {
    const wrapper = mount(ProductList);
    expect(wrapper.findAll('.product-item').length).toBe(store.products.length);
  });

  it('adds a product to the cart', async () => {
    const wrapper = mount(ProductList);
    const product = store.products[0];
    await wrapper.findAllComponents({ name: 'ProductItem' })[0].vm.$emit('addToCart', product);
    expect(store.cart.length).toBe(1);
    expect(store.cart[0].product).toBe(product);
  });
});
