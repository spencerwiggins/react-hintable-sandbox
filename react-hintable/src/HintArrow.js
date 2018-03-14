// @flow
import React, { Fragment } from "react"

const rotateMap = {
  top: 180,
  right: -90,
  bottom: 0,
  left: 90
}

type Props = {
  arrowSize?: number,
  arrowFillColor?: string,
  position?: "top" | "right" | "bottom" | "left"
}

type State = {
  style: {
    transform: string
  }
}

const DEFAULT_ARROW_SIZE = 24

export default class HintArrow extends React.Component<Props, State> {
  static defaultProps = {
    arrowFillColor: "#ccc",
    arrowSize: DEFAULT_ARROW_SIZE,
    position: "bottom"
  }

  state = {
    style: {
      transform: `rotate(${rotateMap[this.props.position || "bottom"]}deg)`
    }
  }

  render() {
    const { arrowSize = DEFAULT_ARROW_SIZE, arrowFillColor } = this.props

    return (
      <svg
        fill={arrowFillColor}
        height={arrowSize}
        viewBox={`0 0 ${arrowSize} ${arrowSize}`}
        width={arrowSize}
        xmlns="http://www.w3.org/2000/svg"
        style={this.state.style}
      >
        <Fragment>
          <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
        </Fragment>
      </svg>
    )
  }
}
