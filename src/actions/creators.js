import { PLAY_SOUND, APP_INIT, APP_INIT_SUCCESS } from './types'

/* App initialization */
export const init = () => ({ type: APP_INIT, payload: {}})
export const initSuccess = () =>  ({ type: APP_INIT_SUCCESS, payload: {}})

/* Sounds control */
export const playSound = (soundId) => ({ type: PLAY_SOUND, payload: {id: soundId}})

