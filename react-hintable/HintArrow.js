import React, { Fragment } from 'react';

const rotateMap = {
  top: 180,
  right: -90,
  bottom: 0,
  left: 90
};

export default class HintArrow extends React.Component {
  state = {
    style: {
      transform: `rotate(${rotateMap[this.props.position]}deg)`
    }
  };

  static defaultProps = {
    arrowFillColor: '#ccc',
    arrowSize: 24
  };

  render() {
    const { arrowSize, arrowFillColor } = this.props;

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
          <path d="M0 0h24v24H0z" fill="none" />
        </Fragment>
      </svg>
    );
  }
}
