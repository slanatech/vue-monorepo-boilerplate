import { expect } from 'chai'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('HelloWorld.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      loadServerInfo: function () {
        console.log('loadServerInfo Called!')
        store.state.loadCalled = true
      }
    }
    store = new Vuex.Store({
      state: {
        loadCalled: false
      },
      actions
    })
  })

  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      store, localVue, propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
    expect(store.state.loadCalled).to.be.equal(true)
  })
})
