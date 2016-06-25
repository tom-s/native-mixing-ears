import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import reactotron from 'reactotron'
import sagaMiddleware from 'redux-saga'
import sagas from '../sagas/'

const loggerMiddleware = createLogger()

export default () => {
  const enhancer = compose(
    applyMiddleware(
      loggerMiddleware,
      sagaMiddleware(...sagas)
    ),
    reactotron.storeEnhancer()
  )

  return createStore(rootReducer, enhancer)
}
