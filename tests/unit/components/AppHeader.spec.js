import { shallowMount, createLocalVue } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader.vue';
import VueRouter from 'vue-router';
import { routes } from '@/router/index';

describe('In AppHeader component', () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter({ routes });
    wrapper = shallowMount(AppHeader, {
      localVue,
      router,
      data() {
        return {
          searchInput: 'Dark',
          isActive: false,
        }
      },
    })
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('is a vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it('should render the correct markup', () => {
    expect(wrapper.html()).toContain('<div class="app-header">');
  });

  it('should route to search component when search button is clicked', async ()=> {
    await wrapper.find('.btn').trigger('click');
    expect(wrapper.vm.$route.path).toBe('/search/Dark');
  });
});
