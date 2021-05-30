import { shallowMount, createLocalVue } from '@vue/test-utils';
import PageNotFound from '@/views/PageNotFound';

describe('In PageNotFound view', () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();
    wrapper = shallowMount(PageNotFound, {
      localVue,
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
    expect(wrapper.html()).toContain('<div class="page-not-found">');
  });

  it('should redirect to home page when Go To Home is clicked', () => {
    wrapper.find('#home-btn').trigger('click');
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith('/');
  });
});
