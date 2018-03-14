import React from "react"
import { render } from "react-dom"
import Parent from "./Parent"

const App = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}
  >
    <Parent />
  </div>
)

render(<App />, document.getElementById("root"))
