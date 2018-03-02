// todo: if no reset, body has 8px margin (how to calculate for that)

const topAndBottomLeft = (hint, specs) => {
  const hintMiddle = half(hint.offsetWidth)
  const targetMiddle = specs.left + half(specs.width)

  return targetMiddle - hintMiddle
}

const leftAndRightTop = (hint, specs, offset) =>
  specs.top - half(specs.height) - half(hint.offsetHeight)

const half = x => x / 2

const top = (hint, specs, offset) => ({
  top: specs.top - specs.height - hint.offsetHeight - offset,
  left: topAndBottomLeft(hint, specs)
})

const bottom = (hint, specs, offset) => ({
  top: specs.top + offset,
  left: topAndBottomLeft(hint, specs)
})

const left = (hint, specs, offset) => ({
  top: leftAndRightTop(hint, specs, offset),
  left: specs.left - hint.offsetWidth - offset
})

const right = (hint, specs, offset) => ({
  top: leftAndRightTop(hint, specs, offset),
  left: specs.right + offset
})

const positionFn = {
  top,
  bottom,
  right,
  left
}

const floorSpecValues = specs => {
  // const out = Object.keys(specs).reduce((acc, val) => {
  //   console.log(specs[val])
  //   acc[val] = Math.floor(specs[val])
  //   return acc
  // }, {})

  // use above (object.keys) when available
  let _specs = {}
  for (let item in specs) {
    _specs[item] = Math.floor(specs[item])
  }
  return _specs

  // console.log(Object.keys(specs))
}

export default (hint, target, { position, offset }) => {
  const specs = target.getBoundingClientRect()

  return positionFn[position](hint, floorSpecValues(specs), offset)
}
