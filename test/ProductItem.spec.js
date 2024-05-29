import { mount } from '@vue/test-utils';
import ProductItem from '../src/components/ProductItem.vue';

describe('ProductItem.vue', () => {
  it('renders product details', () => {
    const product = { id: 1, name: 'Product 1', price: 10.0 };
    const wrapper = mount(ProductItem, {
      props: { product }
    });
    expect(wrapper.text()).toContain('Product 1');
    expect(wrapper.text()).toContain('$10.00');
  });

  it('emits addToCart event with product when button is clicked', async () => {
    const product = { id: 1, name: 'Product 1', price: 10.0 };
    const wrapper = mount(ProductItem, {
      props: { product }
    });
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted().addToCart).toBeTruthy();
    expect(wrapper.emitted().addToCart[0]).toEqual([product]);
  });
});
