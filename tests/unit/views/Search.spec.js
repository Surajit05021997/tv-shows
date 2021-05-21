import { shallowMount, createLocalVue } from '@vue/test-utils';
import Search from '@/views/Search.vue';
import Vuex from 'vuex';

describe('In Search view', () => {
  let wrapper;
  const storeObj = {
    state: {
      searchResult: [
        {show:{"id":1,"name":"Dark Times","rating":{"average":6.6},"genres":["Action","Thriller"]}},
        {show:{"id":2,"name":"The Dark","rating":{"average":9.2},"genres":["Drama","Horror"]}},
      ],
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
        $route: {
          params: {
            searchInput: 'Dark',
          },
        },
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('is a vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
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
});
