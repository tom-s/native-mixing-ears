import { combineReducers } from "redux"
import sounds from './sounds'
import app from './app'

const rootReducer = combineReducers({
  app,
  sounds
})

export default rootReducer
