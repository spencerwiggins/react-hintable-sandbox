// @flow
import * as React from "react"
import getHintPosition from "./getHintPosition"
import HintArrow from "./HintArrow"
import invariant from "invariant"

const style = {
  hintElement: {
    position: "absolute",
    display: "flex",
    alignItems: "center"
  }
}

const directionMap = {
  top: "column-reverse",
  left: "row-reverse",
  right: "row",
  bottom: "column"
}

const DEFAULT_POSITION = "bottom"

type Props = {
  target: string,
  // target: React.ElementRef<"div">,
  position: "top" | "right" | "bottom" | "left",
  offset?: number,
  visible: boolean,
  children: React.Node,
  style?: Object
}

type State = {
  hintPosition: Object,
  flexDirection: string
}

export default class Hint extends React.Component<Props, State> {
  static defaultProps = {
    visible: true,
    position: DEFAULT_POSITION,
    offset: 5
  }

  state = {
    hintPosition: {},
    flexDirection: directionMap[this.props.position]
  }

  // componentWillMount() {
  //   invariant(
  //     this.props.hasOwnProperty("target"),
  //     "You need to pass a target prop to Hint"
  //   )
  // }

  componentDidMount() {
    window.addEventListener("scroll", () => this.setHintPosition(this.props))
    window.addEventListener("resize", () => this.setHintPosition(this.props))

    this.setHintPosition()
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.target !== nextProps.target) {
      this.setHintPosition(nextProps)
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", () => this.setHintPosition(this.props))
    window.removeEventListener("resize", () => this.setHintPosition(this.props))
  }

  setHintPosition = (props?: Props) => {
    const { target, position, offset } = props || this.props

    if (!this.hintElement || !target) return

    const hintPosition = getHintPosition(this.hintElement, target, {
      position,
      offset
    })

    this.setState({
      hintPosition
    })
  }

  hintElement: ?React.ElementRef<"div">

  render() {
    const { visible, children, position, style: propsStyle } = this.props

    const hintStyle = {
      ...style.hintElement,
      ...this.state.hintPosition,
      ...propsStyle,
      flexDirection: this.state.flexDirection
    }

    return (
      visible && (
        <div style={hintStyle} ref={node => (this.hintElement = node)}>
          <HintArrow position={position} />
          <div>{children}</div>
        </div>
      )
    )
  }
}
