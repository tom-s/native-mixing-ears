//import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { APP_INIT } from 'nativeMixing/src/actions/types'
import DeviceInfo from 'react-native-device-info'
import PouchDB from 'pouchdb-react-native'


export function* sync (uniqueId) {
  PouchDB.plugin(require('pouchdb-adapter-asyncstorage').default)
  const localDB = new PouchDB(uniqueId, {adapter: 'asyncstorage'})
  const remoteDB = new PouchDB(`http://localhost:5984/${uniqueId}`)
  localDB.sync(remoteDB).on('complete', () => {
    // yay, we're in sync!
    console.log("hurray we are in sync !")
  }).on('error', function (err) {
    // boo, we hit an error!
    console.log("error syncing", err)
  })
}

export function* init () {
  // Retrieve android ID
  const uniqueId = DeviceInfo.getUniqueID()
  // Sync with remote database
  yield sync(uniqueId)
  // If no remote, create it

}

function* watchSync () {
  yield* takeEvery(APP_INIT, init)
}

export default watchSync
