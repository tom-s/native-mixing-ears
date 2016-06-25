import { createStore, applyMiddleware } from "redux"
import createLogger from "redux-logger"
import rootReducer from "../reducers"

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = applyMiddleware(
  loggerMiddleware
)(createStore)

const configureStore = (initialState) => {
  return createStoreWithMiddleware(rootReducer, initialState)
}

export default configureStore
