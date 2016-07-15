import { PLAY_SOUND } from './types'

export const playSound = (soundId) => ({ type: PLAY_SOUND, payload: {id: soundId}})
