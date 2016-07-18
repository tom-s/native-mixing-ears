import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import rootReducer from 'nativeMixing/src/reducers'
//import reactotron from 'reactotron'
import sagaMiddleware from 'redux-saga'
import sagas from 'nativeMixing/src/sagas'

const loggerMiddleware = createLogger()

export default () => {
  const enhancer = compose(
    applyMiddleware(
      loggerMiddleware,
      sagaMiddleware(...sagas)
    )
    //reactotron.storeEnhancer()
  )

  return createStore(rootReducer, enhancer)
}
