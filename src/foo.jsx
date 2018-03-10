import React from 'react'

export const foo = () => 'foo'

export class Foo extends React.Component {
  render() {
    return (<p>{foo()}</p>)
  }
}
