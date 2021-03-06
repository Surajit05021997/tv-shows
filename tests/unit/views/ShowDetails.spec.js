import { shallowMount, createLocalVue } from '@vue/test-utils';
import ShowDetails from '@/views/ShowDetails.vue';
import Vuex from 'vuex';

describe('In ShowDetails view', () => {
  let wrapper;
  const storeObj = {
    state: {
      showDetails: {
        "id":1,
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
        {"person":{"id":3,"name":"Alan Tudyk"}},
      ],
    },
    actions: {
      getShowDetails: jest.fn(),
      getCast: jest.fn(),
    },
  };

  beforeEach(() => {
    const localVue = createLocalVue();
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
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('should render the correct markup', () => {
    expect(wrapper.html()).toContain('<div class="show-details">');
  });

  it('should call getShowDetails action when the component is created', () => {
    expect(storeObj.actions.getShowDetails).toHaveBeenCalled();
  });

  it('should render the correct data', () => {
    expect(wrapper.html()).toContain('<p>Drama, Science-Fiction, Thriller</p>');
    expect(wrapper.html()).toContain('<p>English</p>');
    expect(wrapper.html()).toContain('<p>Scripted</p>');
  });

  it('should call getCast action when the component is created', () => {
    expect(storeObj.actions.getCast).toHaveBeenCalled();
  });

  it('should render the cast correctly', () => {
    expect(wrapper.findAll('.cast').length).toBe(2);
  });
});
