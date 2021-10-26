import { createStore, applyMiddleware, combineReducers } from 'redux'

import count from './reducers/count'
import person from './reducers/person'

import thunk from 'redux-thunk'

const allReducers = combineReducers({
  he: count,
  rens: person
})

export default createStore(allReducers, applyMiddleware(thunk))