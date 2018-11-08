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

  it ('increments the count the increment button is clicked', () => {
    // 最初は0だけれども
    expect(wrapper.vm.count).toBe(0)

    // ボタンをおすと
    wrapper.find('.increment').trigger('click')

    // 1になる
    expect(wrapper.vm.count).toBe(1)
  })

  it ('decrement the count the decrement button is clicked', () => {

    wrapper.setData({
      count :5
    })

    wrapper.find('.decrement').trigger('click')

    expect(wrapper.vm.count).toBe(4)
  })

  // onlyをつけると、onlyがある箇所のみテストをしてくれる！
  //it.only ('never goes below 0', () => {
  it ('never goes below 0', () => {
    expect(wrapper.vm.count).toBe(0)

    expect(wrapper.find('.decrement').hasStyle('display', 'none')).toBe(true)
    //wrapper.find('.decrement').trigger('click');
    //expect(wrapper.vm.count).toBe(0)

    wrapper.find('.increment').trigger('click')

    expect(wrapper.find('.decrement').hasStyle('display', 'none')).toBe(false)
  })



  it ('presents the current count', () => {
    expect(wrapper.find('.count').html()).toContain(0)
  })

})