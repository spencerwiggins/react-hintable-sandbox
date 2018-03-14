// @flow
import * as React from "react"
import ceilObjectValues from "./utils/ceilObjectValues"
import half from "./utils/half"

type Options = {
  position: string,
  offset?: number
}

const _topAndBottomLeft = (hint, specs) => {
  const hintMiddle = half(hint.offsetWidth)
  const targetMiddle = half(specs.width)

  return Math.ceil(specs.left + targetMiddle - hintMiddle)
}

const _leftAndRightTop = (hint, specs) => half(specs.height - hint.offsetHeight)

export default (
  hint: React.ElementRef<"div">,
  target: React.ElementRef<"div">,
  { position, offset = 0 }: Options
) => {
  const rect = target.getBoundingClientRect()
  const specs = ceilObjectValues(rect)

  const map = {
    top: {
      bottom: specs.height + half(offset),
      left: _topAndBottomLeft(hint, specs)
    },
    bottom: {
      top: specs.height + offset,
      left: _topAndBottomLeft(hint, specs)
    },
    left: {
      top: _leftAndRightTop(hint, specs),
      left: specs.left - hint.offsetWidth - offset
    },
    right: {
      top: _leftAndRightTop(hint, specs),
      left: specs.left + specs.width + offset
    }
  }

  return map[position]
}
