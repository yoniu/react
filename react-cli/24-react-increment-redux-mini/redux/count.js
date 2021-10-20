export default function countRedux(preValue = 0, action) {
  const { type, data } = action
  switch (type) {
    case 'increment':
      return preValue + data
    case 'decrement':
      return preValue - data
    default:
      return preValue
  }
}