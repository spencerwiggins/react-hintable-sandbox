// @flow
import * as React from "react"
import invariant from "invariant"

const style = {
  container: {
    position: "relative"
  }
}

type ActionType = (id: string) => void
type Actions = {
  dismiss: ActionType,
  show: ActionType
}

type Props = {
  render: (
    setTarget: () => void,
    target: React.Node,
    visible: boolean,
    actions: Actions
  ) => void,
  visible: boolean,
  dismiss: ActionType,
  show: ActionType,
  state: {
    enabled: true,
    hints: Array<string>
  }
}

type State = {
  target?: React.Node
}

export default class Hintable extends React.Component<Props, State> {
  static defaultProps = {
    visible: true
  }

  state = {
    target: null,
    visible: this.props.visible
  }

  componentWillMount() {
    invariant(this.props.render, "You need to pass a render prop to Hintable")
  }

  // handleDismiss = () => this.props.dismiss(this.props.hintId)
  // handleShow = () => this.props.show(this.props.hintId)
  handleDismiss = () => {
    this.setState({
      visible: false
    })
  }

  handleShow = () => {
    this.setState({
      visible: false
    })
  }

  handleToggle = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  setTargetNode = (target: React.Node) => {
    this.setState({
      target
    })
  }

  actions = {
    dismiss: this.handleDismiss,
    show: this.handleShow,
    toggle: this.handleToggle
  }

  render() {
    return (
      <div style={style.container}>
        {this.props.render(this.setTargetNode, this.state.target, this.actions)}
      </div>
    )
  }
}
