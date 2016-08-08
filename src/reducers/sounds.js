import { PLAY_SOUND, SWITCH_SOUND_MODE, SET_PLAYING } from 'nativeMixing/src/actions/types'
import { PLAY_MODES } from 'nativeMixing/src/config/sounds'

const sounds = (state = { current: null, all:{}, mode: PLAY_MODES.ORIGINAL, isPlaying: false }, { type, payload }) => {
  switch (type) {
    case PLAY_SOUND:
      const { id } = payload
      return {
        ...state,
        current: id,
        isPlaying: true,
        all: {
          ...state.sounds,
          [id]: {
            id
          }
        }
      }
    case SWITCH_SOUND_MODE:
      const { mode } = payload
      return {
        ...state,
        mode
      }

    case SET_PLAYING:
      const { isPlaying } = payload
      return {
        ...state,
        isPlaying
      }

    default:
      return state
  }
}

export default sounds

