import { shallowMount, createLocalVue } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import BootstrapVue from 'bootstrap-vue';
import Vuex from 'vuex';

describe('In Home view', () => {
  let wrapper;
  const storeObj = {
    getters: {
      getTop20Shows: () => ([
        {"genres": ["Drama", "Horror"], "id": 2, "rating": {"average": 9.2}},
        {"genres": ["Drama", "Action"], "id": 9, "rating": {"average": 9.2}},
        {"genres": ["Horror", "Action"], "id": 13, "rating": {"average": 9.1}},
        {"genres": ["Drama", "Thriller"], "id": 19, "rating": {"average": 8.7}},
        {"genres": ["Action", "Horror"], "id": 21, "rating": {"average": 8.6}},
        {"genres": ["Drama", "Action"], "id": 7, "rating": {"average": 8.6}},
        {"genres": ["Action", "Thriller"], "id": 16, "rating": {"average": 8.4}},
        {"genres": ["Drama", "Thriller"], "id": 22, "rating": {"average": 8.3}},
        {"genres": ["Horror", "Action"], "id": 14, "rating": {"average": 8.2}},
        {"genres": ["Drama", "Thriller"], "id": 3, "rating": {"average": 7.8}},
        {"genres": ["Action", "Thriller"], "id": 6, "rating": {"average": 7.6}},
        {"genres": ["Action", "Thriller"], "id": 11, "rating": {"average": 7.1}},
        {"genres": ["Action", "Thriller"], "id": 1, "rating": {"average": 6.6}},
        {"genres": ["Drama", "Horror"], "id": 10, "rating": {"average": 6.6}},
        {"genres": ["Drama", "Horror"], "id": 4, "rating": {"average": 6.5}},
        {"genres": ["Drama", "Thriller"], "id": 15, "rating": {"average": 6.1}},
        {"genres": ["Horror", "Thriller"], "id": 20, "rating": {"average": 6}},
        {"genres": ["Horror", "Thriller"], "id": 5, "rating": {"average": 5.6}},
        {"genres": ["Drama", "Thriller"], "id": 18, "rating": {"average": 5.5}},
        {"genres": ["Drama", "Thriller"], "id": 12, "rating": {"average": 5.5}},
      ]),
      getShowsByGenres: () => ({
          "Action": [{"genres": ["Action", "Thriller"], "id": 1, "rating": {"average": 6.6}}, {"genres": ["Action", "Thriller"], "id": 6, "rating": {"average": 7.6}}, {"genres": ["Drama", "Action"], "id": 7, "rating": {"average": 8.6}}, {"genres": ["Drama", "Action"], "id": 9, "rating": {"average": 9.2}}, {"genres": ["Action", "Thriller"], "id": 11, "rating": {"average": 7.1}}, {"genres": ["Horror", "Action"], "id": 13, "rating": {"average": 9.1}}, {"genres": ["Horror", "Action"], "id": 14, "rating": {"average": 8.2}}, {"genres": ["Action", "Thriller"], "id": 16, "rating": {"average": 8.4}}, {"genres": ["Horror", "Action"], "id": 17, "rating": {"average": 3.9}}, {"genres": ["Action", "Horror"], "id": 21, "rating": {"average": 8.6}}],
          "Drama": [{"genres": ["Drama", "Horror"], "id": 2, "rating": {"average": 9.2}}, {"genres": ["Drama", "Thriller"], "id": 3, "rating": {"average": 7.8}}, {"genres": ["Drama", "Horror"], "id": 4, "rating": {"average": 6.5}}, {"genres": ["Drama", "Action"], "id": 7, "rating": {"average": 8.6}}, {"genres": ["Drama", "Thriller"], "id": 8, "rating": {"average": 4.6}}, {"genres": ["Drama", "Action"], "id": 9, "rating": {"average": 9.2}}, {"genres": ["Drama", "Horror"], "id": 10, "rating": {"average": 6.6}}, {"genres": ["Drama", "Thriller"], "id": 12, "rating": {"average": 5.5}}, {"genres": ["Drama", "Thriller"], "id": 15, "rating": {"average": 6.1}}, {"genres": ["Drama", "Thriller"], "id": 18, "rating": {"average": 5.5}}, {"genres": ["Drama", "Thriller"], "id": 19, "rating": {"average": 8.7}}, {"genres": ["Drama", "Thriller"], "id": 22, "rating": {"average": 8.3}}],
          "Horror": [{"genres": ["Drama", "Horror"], "id": 2, "rating": {"average": 9.2}}, {"genres": ["Drama", "Horror"], "id": 4, "rating": {"average": 6.5}}, {"genres": ["Horror", "Thriller"], "id": 5, "rating": {"average": 5.6}}, {"genres": ["Drama", "Horror"], "id": 10, "rating": {"average": 6.6}}, {"genres": ["Horror", "Action"], "id": 13, "rating": {"average": 9.1}}, {"genres": ["Horror", "Action"], "id": 14, "rating": {"average": 8.2}}, {"genres": ["Horror", "Action"], "id": 17, "rating": {"average": 3.9}}, {"genres": ["Horror", "Thriller"], "id": 20, "rating": {"average": 6}}, {"genres": ["Action", "Horror"], "id": 21, "rating": {"average": 8.6}}],
          "Thriller": [{"genres": ["Action", "Thriller"], "id": 1, "rating": {"average": 6.6}}, {"genres": ["Drama", "Thriller"], "id": 3, "rating": {"average": 7.8}}, {"genres": ["Horror", "Thriller"], "id": 5, "rating": {"average": 5.6}}, {"genres": ["Action", "Thriller"], "id": 6, "rating": {"average": 7.6}}, {"genres": ["Drama", "Thriller"], "id": 8, "rating": {"average": 4.6}}, {"genres": ["Action", "Thriller"], "id": 11, "rating": {"average": 7.1}}, {"genres": ["Drama", "Thriller"], "id": 12, "rating": {"average": 5.5}}, {"genres": ["Drama", "Thriller"], "id": 15, "rating": {"average": 6.1}}, {"genres": ["Action", "Thriller"], "id": 16, "rating": {"average": 8.4}}, {"genres": ["Drama", "Thriller"], "id": 18, "rating": {"average": 5.5}}, {"genres": ["Drama", "Thriller"], "id": 19, "rating": {"average": 8.7}}, {"genres": ["Horror", "Thriller"], "id": 20, "rating": {"average": 6}}, {"genres": ["Drama", "Thriller"], "id": 22, "rating": {"average": 8.3}}],
        }),
    },
    actions: {
      getAllShows: jest.fn(),
    },
  };

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    localVue.use(Vuex);

    const store = new Vuex.Store(storeObj);

    wrapper = shallowMount(Home, {
      localVue,
      store,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('is a vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it('should render the correct markup', () => {
    expect(wrapper.html()).toContain('<div class="home">');
  });

  it('should call getAllShows action when getAllShows method is called', () => {
    wrapper.vm.getAllShows();
    expect(storeObj.actions.getAllShows).toHaveBeenCalled();
  });
});
