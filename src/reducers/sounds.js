import { PLAY_SOUND } from 'nativeMixing/src/actions/types'

const sounds = (state = { current: null, all:{}}, { type, payload }) => {
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
    default:
      return state
  }
}

export default sounds

