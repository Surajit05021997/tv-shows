import { shallowMount, createLocalVue } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader.vue';
import VueRouter from 'vue-router';
import { routes } from '@/router/index';
import Vuex from 'vuex';

describe('In AppHeader component', () => {
  let wrapper;
  const storeObj = {
    actions: {
      getSearchValue: jest.fn(),
      changeIsReload: jest.fn(),
    },
  };

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuex);
    const router = new VueRouter({ routes });
    const store = new Vuex.Store(storeObj);
    wrapper = shallowMount(AppHeader, {
      localVue,
      router,
      store,
      data() {
        return {
          searchInput: 'Dark',
        }
      },
    })
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('should render the correct markup', () => {
    expect(wrapper.html()).toContain('<div class="app-header">');
  });

  it('should route to search component when search button is clicked', ()=> {
    wrapper.find('#search-btn').trigger('click');
    expect(wrapper.vm.$route.path).toBe('/search');
  });

  it('should call changeIsReload and changeIsReload when search button is clicked', () => {
    wrapper.find('#search-btn').trigger('click');
    expect(storeObj.actions.getSearchValue).toHaveBeenCalled();
    expect(storeObj.actions.changeIsReload).toHaveBeenCalled();
  });
});
