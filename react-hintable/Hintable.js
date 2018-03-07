import React from "react"
import invariant from "invariant"

const style = {
  container: {
    position: "relative"
  }
}

export default class Hintable extends React.Component {
  componentWillMount() {
    invariant(this.props.render, "You need to pass a render prop to Hintable")
  }

  state = {
    target: null
  }

  setTargetNode = target => {
    this.setState({
      target
    })
  }

  render() {
    return (
      <div style={style.container}>
        {this.props.render(this.setTargetNode, this.state.target)}
      </div>
    )
  }
}
