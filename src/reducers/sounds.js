import { SOUND_PLAY } from 'nativeMixing/src/actions/types'

const sounds = (state = { current: null, all:{}}, { type, payload }) => {
  switch (type) {
    case SOUND_PLAY:
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

