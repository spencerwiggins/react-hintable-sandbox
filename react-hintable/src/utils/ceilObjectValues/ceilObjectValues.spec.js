import { expect } from "chai"
import ceilObjectValues from "./ceilObjectValues"

describe("ceilObjectValues", () => {
  it("should ceil object values", () => {
    const obj = {
      x: 23.4,
      y: 22.7
    }

    const expected = {
      x: 24,
      y: 23
    }

    const result = ceilObjectValues(obj)

    expect(result).to.deep.equal(expected)
  })
})
