import {mount, createLocalVue, shallowMount} from '@vue/test-utils'
import Green from "../../pages/Green";
import {TIMER_GREEN} from "../../const";


const localVue = createLocalVue()

describe('Green component renders', () => {
  beforeEach(() => {
    jest.spyOn(Storage.prototype, 'setItem')
  })

  afterEach(() => {
    localStorage.setItem.mockRestore()
  })
  const wrapper = mount(Green, {localVue})
  it('component mount', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(shallowMount(Green).vm).toBeTruthy();
  })

})
