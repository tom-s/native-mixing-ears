import { combineReducers } from 'redux'
import app from './app'
import sounds from './sounds'
import exercises from './exercises'

const rootReducer = combineReducers({
  app,
  sounds,
  exercises
})

export default rootReducer
