import { shallowMount, createLocalVue } from '@vue/test-utils';
import ShowCard from '@/components/ShowCard.vue';
import VueRouter from 'vue-router';
import { routes } from '@/router/index';

describe('In ShowCard Component', () => {
  let wrapper;
  let sampleData = {
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
  };

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter({ routes });
    wrapper = shallowMount(ShowCard, {
      localVue,
      router,
      propsData: {
        show: sampleData,
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
    expect(wrapper.html()).toContain('<div class="show-card">');
  });

  it('should render the correct rating', () => {
    expect(wrapper.html()).toContain('Rating: 6.6');
  });

  it('should render properly if image is null', async () => {
    await wrapper.setProps({show: {
      "id":1,
      "url":"https://www.tvmaze.com/shows/1/under-the-dome",
      "name":"Under the Dome",
      "type":"Scripted",
      "language":"English",
      "genres":["Drama","Science-Fiction","Thriller"],
      "officialSite":"http://www.cbs.com/shows/under-the-dome/",
      "rating":{"average":6.6},
      "image":null,
      "summary":"<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome.</p>",
    }});
    expect(wrapper.html()).toContain('<img alt="Show Image" class="show-image">');
  });
});
