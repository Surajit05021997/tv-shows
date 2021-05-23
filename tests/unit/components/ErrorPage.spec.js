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

  it('is a vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it('should render the correct markup', () => {
    expect(wrapper.html()).toContain('<div class="error-page">');
  });

  it('error rendered properly through prop data', () => {
    expect(wrapper.props().error).toBe('Some Error Occured!!');
    expect(wrapper.find('.error-page').text()).toContain('Some Error Occured!!');
  });

  it('should call reload on reload button click', () => {
    const { location } = window;
    delete window.location;
    window.location = { reload: jest.fn() };
    wrapper.find('#reload-btn').trigger('click');
    expect(window.location.reload).toHaveBeenCalled();
    window.location = location;
  });
});
