import { APP_INIT_SUCCESS } from 'nativeMixing/src/actions/types'

const app = (state = { initialized: false }, { type }) => {
  switch (type) {
    case APP_INIT_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }
}

export default app

