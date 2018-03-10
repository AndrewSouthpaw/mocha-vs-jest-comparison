import React from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Foo } from '../foo'

enzyme.configure({ adapter: new Adapter() });

describe('Foo', () => {
  it('should work', () => {
    const wrapper = shallow(<Foo />)
    expect(wrapper.exists()).toEqual(true)
  })
})
