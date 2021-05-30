import { shallowMount, createLocalVue } from '@vue/test-utils';
import Search from '@/views/Search.vue';
import Vuex from 'vuex';

describe('In Search view', () => {
  let wrapper;
  const storeObj = {
    state: {
      searchResult: [
        {show:{"id":1,"name":"Dark Times","rating":{"average":6.6},"image":"show Image","genres":["Action","Thriller"]}},
        {show:{"id":2,"name":"The Dark","rating":{"average":9.2},"image":"show Image","genres":["Drama","Horror"]}},
        {show:{"id":3,"name":"Dark Place","rating":{"average":7.2},"genres":["Drama","Horror"]}},
      ],
      searchValue: 'Dark',
      isReload: false,
    },
    actions: {
      getSearchResult: jest.fn(),
    },
  };

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    const store = new Vuex.Store(storeObj);

    wrapper = shallowMount(Search, {
      localVue,
      store,
      mocks: {
        $router: {
          push: jest.fn(),
        },
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('should render the correct markup', () => {
    expect(wrapper.html()).toContain('<div class="search">');
  });

  it('should call getSearchResult action when component is created', () => {
    expect(storeObj.actions.getSearchResult).toHaveBeenCalled();
  });

  it('should show correct now of show after search', () => {
    expect(wrapper.findAll('.show').length).toBe(2);
  });

  it('should redirect to homepage when isReload is true', () => {
    storeObj.state.isReload = true;
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = new Vuex.Store(storeObj);
    wrapper = shallowMount(Search, {
      localVue,
      store,
      mocks: {
        $router: {
          push: jest.fn(),
        },
      },
    });
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith('/');
  });
});
