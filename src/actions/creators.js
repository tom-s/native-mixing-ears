import { PLAY_SOUND, APP_INIT } from './types'

export const init = () => ({ type: APP_INIT, payload: {}})
export const playSound = (soundId) => ({ type: PLAY_SOUND, payload: {id: soundId}})

