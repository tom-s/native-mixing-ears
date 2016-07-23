import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { APP_INIT } from 'nativeMixing/src/actions/types'
import { dbsSync, dbGet, dbPut, createDbs } from 'nativeMixing/src/utils/pouchdb'
import DeviceInfo from 'react-native-device-info'
import * as actionCreators from 'nativeMixing/src/actions/creators'

// Init databases
const uniqueId = `user_${DeviceInfo.getUniqueID().toLowerCase()}`
let { localDB, remoteDB } = createDbs(uniqueId)

export function* sync () {
  // Sync with remote database
  const synced = yield call(dbsSync, localDB, remoteDB)
  return synced
}

export function* initDb () {
  const userDetails = yield call(dbGet, localDB, 'user_details')
  if (!userDetails) {
    yield call (dbPut, localDB, {
      '_id': 'user_details',
      'android_id': uniqueId
    })
  }
}

export function* init () {
  // Perform sync (o retrieve new data)
  yield call(sync)
  // Init missing data
  yield call(initDb)
  // Notify app
  yield put(actionCreators.initSuccess())
}

function* watchSync () {
  yield* takeEvery(APP_INIT, init)
}

export default watchSync
