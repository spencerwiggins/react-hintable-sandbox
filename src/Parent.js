import React from "react"
import Hintable, { Hint } from "../react-hintable/src"

const style = {
  target: {
    width: 150,
    height: 150,
    marginLeft: 200,
    marginTop: 100,
    backgroundColor: "#ccc"
  }
}

export default class Parent extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.refs.hintRef1.actions.dismiss()}>
          hide ref 1
        </button>

        <Hintable
          ref="hintRef1"
          render={(setTarget, target, actions) => (
            <div>
              <div
                style={style.target}
                ref={setTarget}
                onClick={actions.dismiss}
              />
              <Hint position="bottom" target={target}>
                Click on the button above
              </Hint>
            </div>
          )}
        />
      </div>
    )
  }
}
