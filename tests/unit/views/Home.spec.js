import { shallowMount, createLocalVue } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import Vuex from 'vuex';

describe('In Home view', () => {
  let wrapper;
  const storeObj = {
    state: {
      allShows: [
        {"id":1,"rating":{"average":6.6},"genres":["Action","Thriller"]},
        {"id":2,"rating":{"average":9.2},"genres":["Drama","Horror"]},
        {"id":3,"rating":{"average":7.8},"genres":["Drama","Thriller"]},
        {"id":4,"rating":{"average":6.5},"genres":["Drama","Horror"]},
        {"id":5,"rating":{"average":5.6},"genres":["Horror","Thriller"]},
        {"id":6,"rating":{"average":7.6},"genres":["Action","Thriller"]},
        {"id":7,"rating":{"average":8.6},"genres":["Drama","Action"]},
        {"id":8,"rating":{"average":4.6},"genres":["Drama","Thriller"]},
        {"id":9,"rating":{"average":9.2},"genres":["Drama","Action"]},
        {"id":10,"rating":{"average":6.6},"genres":["Drama","Horror"]},
        {"id":11,"rating":{"average":7.1},"genres":["Action","Thriller"]},
        {"id":12,"rating":{"average":5.5},"genres":["Drama","Thriller"]},
        {"id":13,"rating":{"average":9.1},"genres":["Horror","Action"]},
        {"id":14,"rating":{"average":8.2},"genres":["Horror","Action"]},
        {"id":15,"rating":{"average":6.1},"genres":["Drama","Thriller"]},
        {"id":16,"rating":{"average":8.4},"genres":["Action","Thriller"]},
        {"id":17,"rating":{"average":3.9},"genres":["Horror","Action"]},
        {"id":18,"rating":{"average":5.5},"genres":["Drama","Thriller"]},
        {"id":19,"rating":{"average":8.7},"genres":["Drama","Thriller"]},
        {"id":20,"rating":{"average":6.0},"genres":["Horror","Thriller"]},
        {"id":21,"rating":{"average":8.6},"genres":["Action","Horror"]},
        {"id":22,"rating":{"average":8.3},"genres":["Drama","Thriller"]},
      ],
    },
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
      getShowListByGenre: () => ([
        {"id":1,"rating":{"average":6.6},"genres":["Action","Thriller"]},
        {"id":6,"rating":{"average":7.6},"genres":["Action","Thriller"]},
        {"id":7,"rating":{"average":8.6},"genres":["Drama","Action"]},
        {"id":9,"rating":{"average":9.2},"genres":["Drama","Action"]},
        {"id":11,"rating":{"average":7.1},"genres":["Action","Thriller"]},
        {"id":13,"rating":{"average":9.1},"genres":["Horror","Action"]},
        {"id":14,"rating":{"average":8.2},"genres":["Horror","Action"]},
        {"id":16,"rating":{"average":8.4},"genres":["Action","Thriller"]},
        {"id":17,"rating":{"average":3.9},"genres":["Horror","Action"]},
        {"id":21,"rating":{"average":8.6},"genres":["Action","Horror"]},
      ]),
    },
    actions: {
      getAllShows: jest.fn(),
      getSelectedGenre: jest.fn(),
    },
  };

  beforeEach(() => {
    const localVue = createLocalVue();
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

  it('should render the correct markup', () => {
    expect(wrapper.html()).toContain('<div class="home">');
  });

  it('should show 20 top shows and 10 action shows', () => {
    expect(wrapper.findAll('.show').length).toBe(30);
  });

  it('should call getAllShows action when the component is created', () => {
    expect(storeObj.actions.getAllShows).toHaveBeenCalled();
  });

  it('should call getSelectedGenre action when the component is created', () => {
    expect(storeObj.actions.getSelectedGenre).toHaveBeenCalled();
  });

  it('should call getSelectedGenre action when selectedGenre changes', async () => {
    await wrapper.setData({selectedGenre: 'Comedy'});
    expect(storeObj.actions.getSelectedGenre).toHaveBeenCalledTimes(6);
  });  
});
