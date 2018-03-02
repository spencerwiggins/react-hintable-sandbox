// todo: if no reset, body has 8px margin (how to calculate for that)

const topAndBottomLeft = (hint, specs) => {
  const hintMiddle = half(hint.offsetWidth)
  const targetMiddle = half(specs.width)

  return specs.left + targetMiddle - hintMiddle
}

const leftAndRightTop = (hint, specs) =>
  specs.top + half(specs.height - hint.offsetHeight)

const half = x => x / 2

const top = (hint, specs, offset) => ({
  top: specs.top - hint.offsetHeight - offset,
  left: topAndBottomLeft(hint, specs)
})

const bottom = (hint, specs, offset) => ({
  top: specs.top + specs.height + half(hint.offsetHeight) - offset,
  left: topAndBottomLeft(hint, specs)
})

const left = (hint, specs, offset) => ({
  top: leftAndRightTop(hint, specs),
  left: specs.left - hint.offsetWidth - offset
})

const right = (hint, specs, offset) => ({
  top: leftAndRightTop(hint, specs),
  left: specs.left + specs.width + offset
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
}

export default (hint, target, { position, offset }) => {
  const specs = target.getBoundingClientRect()
  return positionFn[position](hint, floorSpecValues(specs), offset)
}
