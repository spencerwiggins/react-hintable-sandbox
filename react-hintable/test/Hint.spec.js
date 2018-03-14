import React from "react"
import { expect } from "chai"
import Hint from "../src/Hint"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

describe("<Hint />", () => {
  it("should be passed at least one prop called `target`", () => {
    expect(() => shallow(<Hint />)).to.throw(
      "You need to pass a target prop to Hint"
    )
    expect(() => shallow(<Hint target="apples" />)).to.not.throw()
  })
})
