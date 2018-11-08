import { mount } from 'vue-test-utils'
import Counter from '../src/components/Counter.vue'
import expect from 'expect'

describe('Counter', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Counter)
  })

  it ('default to a count of 0', () => {
    expect(wrapper.vm.count).toBe(0)
  })

  it ('increments the count the button is clicked', () => {
    // 最初は0だけれども
    expect(wrapper.vm.count).toBe(0)

    // ボタンをおすと
    wrapper.find('button').trigger('click');

    // 1になる
    expect(wrapper.vm.count).toBe(1)
  })

  it ('presents the current count', () => {
    expect(wrapper.find('.count').html()).toContain(0)
  })

})