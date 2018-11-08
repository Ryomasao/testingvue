import { mount } from 'vue-test-utils'
import Counter from '../src/components/Counter.vue'
import expect from 'expect'

describe('Counter', () => {


  it ('default to a count of 0', () => {
    let wrapper = mount(Counter)
    expect(wrapper.vm.count).toBe(0)
  })

  it ('increments the count the button is clicked', () => {
    let wrapper = mount(Counter)
    // 最初は0だけれども
    expect(wrapper.vm.count).toBe(0)

    // ボタンをおすと
    wrapper.find('button').trigger('click');

    // 1になる
    expect(wrapper.vm.count).toBe(1)
  })

  it ('presents the current count', () => {
    let wrapper = mount(Counter)
    expect(wrapper.find('.count').html()).toContain(0)
  })

})