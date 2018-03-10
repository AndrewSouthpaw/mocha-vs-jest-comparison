import React from 'react'
import enzyme, { shallow } from 'enzyme'
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'
import { Foo, __RewireAPI__ } from '../foo'

enzyme.configure({ adapter: new Adapter() });

describe('Foo', () => {
  __RewireAPI__.__Rewire__('foo', () => 'bar')
  it('should work', () => {
    const wrapper = shallow(<Foo />)
    expect(wrapper.text()).to.eql('bar')
    expect(wrapper.exists()).to.eql(true)
  })
})
