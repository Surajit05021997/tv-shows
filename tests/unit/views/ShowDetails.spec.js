import { shallowMount, createLocalVue } from '@vue/test-utils';
import ShowDetails from '@/views/ShowDetails.vue';
import BootstrapVue from 'bootstrap-vue';
import Vuex from 'vuex';

describe('In ShowDetails view', () => {
  let wrapper;
  const storeObj = {
    state: {
      showDetails: {
        "id":1,
        "url":"https://www.tvmaze.com/shows/1/under-the-dome",
        "name":"Under the Dome",
        "type":"Scripted",
        "language":"English",
        "genres":["Drama","Science-Fiction","Thriller"],
        "officialSite":"http://www.cbs.com/shows/under-the-dome/",
        "rating":{"average":6.6},
        "image":{
          "medium":"https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
          "original":"https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
        },
        "summary":"<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome.</p>",
      },
      cast: [
        {"person":{"id":1,"name":"Mike Vogel","image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/0/1815.jpg"}}},
        {"person":{"id":2,"name":"Rachelle Lefevre","image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/82/207417.jpg"}}},
      ],
    },
    actions: {
      getShowDetails: jest.fn(),
      getCast: jest.fn(),
    },
  };

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    localVue.use(Vuex);

    const store = new Vuex.Store(storeObj);

    wrapper = shallowMount(ShowDetails, {
      localVue,
      store,
      mocks: {
        $route: {
          params: {  id: 1},
        },
        $router: {
          go: jest.fn(),
        },
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('is a vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it('should render the correct markup', () => {
    expect(wrapper.html()).toContain('<div class="show-details">');
  });

  it('should call getShowDetails action when getShowDetails method is called', () => {
    wrapper.vm.getShowDetails(1);
    expect(storeObj.actions.getShowDetails).toHaveBeenCalled();
  });

  it('should call getCast action when getCast method is called', () => {
    wrapper.vm.getCast(1);
    expect(storeObj.actions.getCast).toHaveBeenCalled();
  });
});
