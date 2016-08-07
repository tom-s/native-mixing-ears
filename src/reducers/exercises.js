import { EXERCISE_GENERATE_SUCCESS } from 'nativeMixing/src/actions/types'

const exercises = (state = { current: null, all:{}}, { type, payload }) => {
  switch (type) {
    case EXERCISE_GENERATE_SUCCESS:
      const { exercise } = payload
      return {
        ...state,
        current: exercise
      }
    default:
      return state
  }
}

export default exercises


