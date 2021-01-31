// FILE: ~/app/pages/index.test.js
import { mount } from '@vue/test-utils'
import index from './index.vue'
describe('index page', () => {
  const wrapper = mount(index)
  describe('app title', () => {
    const element = wrapper.find('.title')
    it('displays app title', () => {
      expect(element.text()).toEqual('Reminders')
    })
  })

})
