import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HomeView from 'src/views/HomeView.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HomeView, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
