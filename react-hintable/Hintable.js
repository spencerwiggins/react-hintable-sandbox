import React from 'react'

export default class Hintable extends React.Component {
  state = {
    target: null
  }

  setTargetNode = target => {
    this.setState({
      target
    })
  }

  render() {
    return this.props.render(this.setTargetNode, this.state.target)
  }
}
