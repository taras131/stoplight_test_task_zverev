import { mount, createLocalVue } from '@vue/test-utils'
import TrafficLights from '../TrafficLights.vue';

const localVue = createLocalVue()
const activeColor = 'red'
const timeLimit = 10
const prevRoute = {path: '/red'}

describe('TrafficLights renders', () => {
  beforeEach(() => {
    jest.spyOn(Storage.prototype, 'setItem')
  })

  afterEach(() => {
    localStorage.setItem.mockRestore()
  })
  it('renders the correct markup', () => {
    const wrapper = mount(TrafficLights, {localVue, propsData: {activeColor,timeLimit,prevRoute }})
    expect(wrapper.contains('div')).toBeTruthy()
  })
})


