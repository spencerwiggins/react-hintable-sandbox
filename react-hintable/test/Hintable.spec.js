import React from "react"
import { expect } from "chai"
import Hintable from "../Hintable"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

describe("<Hintable />", () => {
  describe("render prop", () => {
    it("should exist", () => {
      expect(() => shallow(<Hintable />)).to.throw(
        "You need to pass a render prop to Hintable"
      )
    })

    it("should not allow non-function prop value (i.e. only a function is allowed)", () => {
      expect(() => shallow(<Hintable render="hello" />)).to.throw(
        "this.props.render is not a function"
      )
      expect(() => shallow(<Hintable render={{}} />)).to.throw(
        "this.props.render is not a function"
      )
      expect(() => shallow(<Hintable render={20} />)).to.throw(
        "this.props.render is not a function"
      )
    })

    it("should allow a function as prop value", () => {
      expect(() => shallow(<Hintable render={() => {}} />)).to.not.throw()
    })
  })
})
