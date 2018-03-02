import React from 'react'
import { render } from 'react-dom'
import Hintable, { Hint } from '../react-hintable'

const App = () => (
  <div>
    <div>
      <h2>Header</h2>
    </div>
    <Hintable
      render={(setTarget, target) => (
        <div style={{ width: 300, margin: '0 auto' }}>
          <button ref={setTarget}>button</button>
          <Hint target={target}>Click on the button above</Hint>
        </div>
      )}
    />
  </div>
)

render(<App />, document.getElementById('root'))
