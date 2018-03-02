import React from 'react';

const style = {
  container: {
    position: 'relative'
  }
};

export default class Hintable extends React.Component {
  state = {
    target: null
  };

  setTargetNode = target => {
    this.setState({
      target
    });
  };

  render() {
    return (
      <div style={style.container}>
        {this.props.render(this.setTargetNode, this.state.target)}
      </div>
    );
  }
}
