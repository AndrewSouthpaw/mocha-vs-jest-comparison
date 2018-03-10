import React from 'react'
import { foo } from './index'

export class Foo extends React.Component {
  render() {
    return (<p>{foo()}</p>)
  }
}
