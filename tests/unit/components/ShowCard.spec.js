import { shallowMount, createLocalVue } from '@vue/test-utils';
import ShowCard from '@/components/ShowCard.vue';
import VueRouter from 'vue-router';
import { routes } from '@/router/index';

describe('In ShowCard Component', () => {
  let wrapper;
  const commonData = {
    "id":1,
    "name":"Under the Dome",
    "rating":{"average":6.6},
  };
  const sampleData = {
    ...commonData,
    "image":{
      "medium":"https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
    },
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

  it('should render the correct show rating', () => {
    expect(wrapper.html()).toContain('Rating: 6.6');
  });

  it('should render the correct show name', () => {
    expect(wrapper.html()).toContain('Under the Dome');
  });

  it('should render the image properly', () => {
    expect(wrapper.html()).toContain('<img src="https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg" alt="Show Image" class="show-image">');
  });

  it('should render properly if image is null', async () => {
    await wrapper.setProps({show: {
      ...commonData,
      "image":null,
    }});
    expect(wrapper.html()).toContain('<img alt="Show Image" class="show-image">');
  });
});
