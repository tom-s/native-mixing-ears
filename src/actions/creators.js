import { PLAY_SOUND, APP_INIT, APP_INIT_SUCCESS, EXERCISE_GENERATE, EXERCISE_GENERATE_SUCCESS, SWITCH_SOUND_MODE } from './types'

/* App initialization */
export const init = () => ({ type: APP_INIT, payload: {}})
export const initSuccess = () =>  ({ type: APP_INIT_SUCCESS, payload: {}})

/* Sounds control */
export const playSound = (soundId) => ({ type: PLAY_SOUND, payload: {id: soundId}})
export const switchSoundMode = (mode) => ({ type: SWITCH_SOUND_MODE, payload: { mode }})

/* Exercises */
export const generateExercise = () => ({ type: EXERCISE_GENERATE, payload: {} })
export const generateExerciseSuccess = (exercise) => ({ type: EXERCISE_GENERATE_SUCCESS, payload: { exercise } })

