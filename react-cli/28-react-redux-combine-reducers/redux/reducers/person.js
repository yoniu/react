import { ADD_PERSON } from "../constant"

export default function personReducer (perValue = [], {type, data}) {
  switch (type) {
    case ADD_PERSON:
      return [data, ...perValue]
    default:
      return perValue
  }
}