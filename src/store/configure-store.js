import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import rootReducer from 'nativeMixing/src/reducers'
//import reactotron from 'reactotron'
import createSagaMiddleware from 'redux-saga'
import sagas from 'nativeMixing/src/sagas'

const loggerMiddleware = createLogger()

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  let enhancers = [
    applyMiddleware(
      loggerMiddleware,
      sagaMiddleware
    )
  ]
  const store = createStore(
    rootReducer,
    compose(...enhancers)
  )
  sagaMiddleware.run(sagas)
  return store
}

export default configureStore

