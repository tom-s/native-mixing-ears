import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { APP_INIT } from 'nativeMixing/src/actions/types'
import DeviceInfo from 'react-native-device-info'
import PouchDB from 'pouchdb-react-native'

const POUCH_SERVER_IP = '192.168.0.12'

const sync = (localDB, remoteDB) => {
  console.log("try to sync", localDB, remoteDB)
  return localDB.sync(remoteDB).then(() => {
    console.log("return true")
    return true
  }).catch(() => {
    console.log("error")
    return false
  })
}

export function* createDBs (uniqueId) {
  PouchDB.plugin(require('pouchdb-adapter-asyncstorage').default)
  const localDB = new PouchDB(uniqueId, {adapter: 'asyncstorage'})
  const remoteDB = new PouchDB(`http://${POUCH_SERVER_IP}:5984/${uniqueId}`)
  return { localDB, remoteDB }
}

export function* init () {
  // Retrieve android ID
  const uniqueId = `user_${DeviceInfo.getUniqueID().toLowerCase()}`

  // Try syncing with remote database
  const { localDB, remoteDB } = yield createDBs(uniqueId)
  const synced = yield call(sync, localDB, remoteDB)

  console.log("after sync")
  // Check that we have the necessary data, otherwise intialize them
  const userDetails = yield call(localDB.get, 'user_details')
  console.log('user details', userDetails)

  /*
  try {
    yield call(PouchDB.sync, localDB, remoteDB, {live: true, retry: true})
    console.log("synced")
  } catch(err) {
    console.log("err", err)
  }
  console.log("after")
  */
 /*
  console.log("synced ?", synced)
  // If no remote, create it
  if (synced) {
    // Check that we have essential data, otherwise create theml
  } else {
    // Create data locally

  }*/
}

function* watchSync () {
  yield* takeEvery(APP_INIT, init)
}

export default watchSync
