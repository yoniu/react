import { INCREMENT, DECREMENT } from './constant'

export default function countRedux(preValue = 0, action) {
  const { type, data } = action
  switch (type) {
    case INCREMENT:
      return preValue + data
    case DECREMENT:
      return preValue - data
    default:
      return preValue
  }
}