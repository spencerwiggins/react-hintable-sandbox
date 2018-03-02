// todo: if no reset, body has 8px margin (how to calculate for that)

const _topAndBottomLeft = (hint, specs) => {
  const hintMiddle = _half(hint.offsetWidth);
  const targetMiddle = _half(specs.width);

  return specs.left + targetMiddle - hintMiddle;
};

const _leftAndRightTop = (hint, specs) =>
  specs.top + _half(specs.height - hint.offsetHeight);

const _half = x => x / 2;

const _floorObjVals = obj => {
  // const out = Object.keys(obj).reduce((acc, val) => {
  //   console.log(obj[val])
  //   acc[val] = Math.floor(obj[val])
  //   return acc
  // }, {})

  // use above (object.keys) when available
  let _obj = {};
  for (let item in obj) {
    _obj[item] = Math.floor(obj[item]);
  }
  return _obj;
};

export default (hint, target, { position, offset }) => {
  const rect = target.getBoundingClientRect();
  const specs = _floorObjVals(rect);

  const map = {
    top: {
      top: specs.top - hint.offsetHeight - offset,
      left: _topAndBottomLeft(hint, specs)
    },
    bottom: {
      top: specs.top + specs.height + _half(hint.offsetHeight) - offset,
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
  };

  return map[position];
};
