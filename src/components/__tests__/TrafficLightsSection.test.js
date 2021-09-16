import {mount, createLocalVue} from '@vue/test-utils'
import TrafficLightsSection from '../TrafficLightsSection.vue';

const localVue = createLocalVue()
const currentColor = 'red'
const timer = 5
const activeColor = 'red'

describe('TrafficLightsSection renders', () => {
  const wrapper = mount(TrafficLightsSection, {localVue, propsData: {currentColor,timer,activeColor}})
  it('have a div', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
  it('show correct timer', () => {
    expect(wrapper.html()).toContain('<div class="timer">5</div>')
  })
  it('correct props activeColor', () => {
    expect(wrapper.vm.activeColor).toBe(activeColor)
  })
  it('correct props currentColor', () => {
    expect(wrapper.vm.currentColor).toBe(currentColor)
  })
})

