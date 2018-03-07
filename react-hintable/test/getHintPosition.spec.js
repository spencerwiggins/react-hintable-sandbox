import { expect } from "chai"
import getHintPosition from "../getHintPosition"

describe("getHintPosition", () => {
  let target = {},
    hint = {}

  beforeEach(() => {
    target = {
      getBoundingClientRect: () => ({
        x: 200,
        y: 100,
        width: 150,
        height: 150,
        top: 100,
        right: 350,
        bottom: 250,
        left: 200
      })
    }

    hint = {
      offsetWidth: 50,
      offsetHeight: 50
    }
  })

  it("should position hint on the top", () => {
    const options = {
      position: "top",
      offset: 10
    }

    const expected = { top: 40, left: 250 }

    const hintPosition = getHintPosition(hint, target, options)
    expect(hintPosition).to.deep.equal(expected)
  })

  it("should position hint on the right", () => {
    const options = {
      position: "right",
      offset: 10
    }

    const expected = { top: 150, left: 360 }

    const hintPosition = getHintPosition(hint, target, options)
    expect(hintPosition).to.deep.equal(expected)
  })

  it("should position hint on the bottom", () => {
    const options = {
      position: "bottom",
      offset: 10
    }

    const expected = { top: 265, left: 250 }

    const hintPosition = getHintPosition(hint, target, options)
    expect(hintPosition).to.deep.equal(expected)
  })

  it("should position hint on the left", () => {
    const options = {
      position: "left",
      offset: 10
    }

    const expected = { top: 150, left: 140 }

    const hintPosition = getHintPosition(hint, target, options)
    expect(hintPosition).to.deep.equal(expected)
  })
})
