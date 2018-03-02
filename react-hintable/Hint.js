import React from 'react'
import getHintPosition from './getHintPosition'
import HintArrow from './HintArrow'

const style = {
  hintElement: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    zIndex: 100
  }
}

const directionMap = {
  top: 'column-reverse',
  left: 'row-reverse',
  right: 'row',
  bottom: 'column'
}

const _defaultPosition = 'bottom'

export default class Hint extends React.Component {
  static defaultProps = {
    active: true,
    position: _defaultPosition,
    offset: 10
  }

  state = {
    hintPosition: {},
    flexDirection: directionMap[this.props.position]
  }

  setHintPosition = props => {
    const { target, position, offset } = props || this.props

    const hintPosition = getHintPosition(this.hintElement, target, {
      position,
      offset
    })

    this.setState({
      hintPosition
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.target !== nextProps.target) {
      this.setHintPosition(nextProps)
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.setHintPosition(this.props))
    window.addEventListener('resize', () => this.setHintPosition(this.props))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.setHintPosition(this.props))
    window.removeEventListener('resize', () => this.setHintPosition(this.props))
  }

  render() {
    const { active, children, position } = this.props

    const hintStyle = {
      ...style.hintElement,
      ...this.state.hintPosition,
      flexDirection: this.state.flexDirection
    }

    return (
      active && (
        <div style={hintStyle} ref={node => (this.hintElement = node)}>
          <HintArrow position={position} />
          <div>{children}</div>
        </div>
      )
    )
  }
}
