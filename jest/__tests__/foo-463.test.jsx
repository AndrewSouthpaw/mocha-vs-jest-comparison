import React from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Foo } from '../foo'

enzyme.configure({ adapter: new Adapter() });

jest.mock('../index.js', () => ({ foo: () => 'bar' }))

describe('Foo', () => {
  it('should work', () => {
    const wrapper = shallow(<Foo />)
    expect(wrapper.text()).toEqual('bar')
    expect(wrapper.exists()).toEqual(true)
  })
})
