import React from 'react'
import getHintPosition from './getHintPosition'
import HintArrow from './HintArrow'

const style = {
  hintElement: {
    // background: '#ccc',
    // padding: 10,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center'
  }
}

const directionMap = {
  top: 'column-reverse',
  left: 'row-reverse',
  right: 'row',
  bottom: 'column'
}

// const flex

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

    // if (position !== _defaultPosition) {
    // this.setState({
    //   flexDirection: directionMap[position]
    // })
    // }

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
    window.addEventListener('scroll', this.setHintPosition)
    window.addEventListener('resize', this.setHintPosition)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setHintPosition)
    window.removeEventListener('resize', this.setHintPosition)
  }

  render() {
    const { active, children, position } = this.props

    const hintStyle = {
      ...style.hintElement,
      ...this.state.hintPosition,
      flexDirection: this.state.flexDirection
    }

    // console.log(hintStyle)

    return (
      active && (
        <div style={hintStyle} ref={node => (this.hintElement = node)}>
          <HintArrow position={position} />
          {children}
        </div>
      )
    )
  }
}
