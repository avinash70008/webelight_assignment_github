import { legacy_createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer } from './Search/reducer'
const rootReducer = combineReducers({
  users: reducer,
})
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose
const middleware = [thunk]
const enhancer = composeEnhancers(applyMiddleware(...middleware))

export const store = legacy_createStore(rootReducer, enhancer)