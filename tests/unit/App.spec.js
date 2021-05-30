import { shallowMount, createLocalVue } from '@vue/test-utils';
import App from '@/App.vue';
import VueRouter from 'vue-router';
import { routes } from '@/router/index';

describe('In App Component', () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter({ routes });
    wrapper = shallowMount(App, {
      localVue,
      router,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('should render the correct markup', () => {
    expect(wrapper.html()).toContain('<div id="app">');
  });

  it('should contain AppHeader child component', () => {
    expect(wrapper.html()).toContain('<app-header-stub></app-header-stub>');
  }); 

  it('should contain AppFooter child component', () => {
    expect(wrapper.html()).toContain('<app-footer-stub></app-footer-stub>');
  });
});
