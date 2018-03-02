import React from 'react'
import { render } from 'react-dom'
import Hintable, { Hint } from '../react-hintable'

const App = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}
  >
    <Hintable
      render={(setTarget, target) => (
        <div>
          <div
            style={{
              width: 150,
              height: 150,
              marginLeft: 200,
              marginTop: 100,
              backgroundColor: '#333',
              color: '#fff'
            }}
            ref={setTarget}
          />
          <Hint position="top" target={target}>
            Click on the button above
          </Hint>
        </div>
      )}
    />
  </div>
)

render(<App />, document.getElementById('root'))
