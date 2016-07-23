import PouchDB from 'pouchdb-react-native'
import PouchAsync from 'pouchdb-adapter-asyncstorage'
import { POUCH_SERVER_IP } from 'nativeMixing/src/config/urls'

PouchDB.plugin(PouchAsync)

export const createDbs = (uniqueId) => {
  const localDB = new PouchDB(uniqueId, {adapter: 'asyncstorage'})
  const remoteDB = new PouchDB(`http://${POUCH_SERVER_IP}:5984/${uniqueId}`)
  return { localDB, remoteDB }
}

export const dbsSync = (localDB, remoteDB) => {
  return localDB.sync(remoteDB, {
    live: false, // live option does not work
    retry: true
  }).then(() => {
    return true
  }).catch(() => {
    return false
  })
}

export const dbGet = (db, prop) => {
  return db.get(prop).then(res => res).catch(() => null)
}

export const dbPut = (db, doc) => {
  return db.put(doc).then(() => doc).catch(() => null)
}

