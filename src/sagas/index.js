import { fork } from 'redux-saga/effects'
import codePushSaga from 'react-native-code-push-saga'

function* rootSaga() {
  yield [
    fork(codePushSaga, {
      syncOnInterval: 10 // every 10 seconds
    })
  ]
}

export default rootSaga
