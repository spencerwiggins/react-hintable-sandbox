import React, { Fragment } from 'react'

const rotateMap = {
  top: 180
}

// const style = {
//   svg: {}
// }

export default class HintArrow extends React.Component {
  state = {
    style: {}
  }

  componentWillMount() {
    const { position } = this.props

    if (position !== 'bottom') {
      this.setState({
        style: {
          transform: `rotate(${rotateMap[position]}deg)`
        }
      })
    }
  }

  render() {
    return (
      <svg
        fill="#000000"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
        style={this.state.style}
      >
        <Fragment>
          <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </Fragment>
      </svg>
    )
  }
}

// HintArrow.Bottom = () => (
//   <Fragment>
//     <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
//     <path d="M0 0h24v24H0z" fill="none" />
//   </Fragment>
// )

// HintArrow.Top = () => (
//   <Fragment>
//     <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
//     <path d="M0-.75h24v24H0z" fill="none" />
//   </Fragment>
// )
