import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import startReducer from './reducers/start/reducer'

export const configureStore = () => {

  const reducers = combineReducers({
    start: startReducer,
  })

  const middleware = [thunk]

  const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    reducers,
    enhancers(applyMiddleware(...middleware))
  )

  return store
}