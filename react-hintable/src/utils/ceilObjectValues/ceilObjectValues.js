// @flow
export default (obj: Object): Object =>
  Object.keys(obj).reduce((acc, val) => {
    acc[val] = Math.ceil(obj[val])
    return acc
  }, obj)
