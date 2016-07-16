import { fork } from 'redux-saga/effects'
import codePushSaga from 'react-native-code-push-saga'

function* rootSaga() {
  yield [
    fork(codePushSaga)
  ]
}

export default rootSaga
