import { PLAY_SOUND, SWITCH_SOUND_MODE } from 'nativeMixing/src/actions/types'
import { PLAY_MODES } from 'nativeMixing/src/config/sounds'

const sounds = (state = { current: null, all:{}, mode: PLAY_MODES.ORIGINAL }, { type, payload }) => {
  switch (type) {
    case PLAY_SOUND:
      const { id } = payload
      return {
        ...state,
        current: id,
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

    default:
      return state
  }
}

export default sounds

