import { expect } from "chai"
import half from "./half"

describe("half", () => {
  it("should halfsies the number", () => {
    const num = 10
    const expected = 5
    const result = half(num)

    expect(result).to.deep.equal(expected)
  })
})
