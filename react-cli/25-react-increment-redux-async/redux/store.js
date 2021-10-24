import { createStore, applyMiddleware } from 'redux'

import count from './count'

import thunk from 'redux-thunk'

export default createStore(count, applyMiddleware(thunk))