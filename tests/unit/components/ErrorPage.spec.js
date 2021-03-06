import { shallowMount, createLocalVue } from '@vue/test-utils';
import ErrorPage from '@/components/ErrorPage.vue';

describe('In ErrorPage Component', () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();
    wrapper = shallowMount(ErrorPage, {
      localVue,
      propsData: {
        error: 'Some Error Occured!!',
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('should render the correct markup', () => {
    expect(wrapper.html()).toContain('<div class="error-page">');
  });

  it('error rendered properly through prop data', () => {
    expect(wrapper.props().error).toBe('Some Error Occured!!');
    expect(wrapper.find('.error-page').text()).toContain('Some Error Occured!!');
  });
});
