import soundsReducer from 'nativeMixing/src/reducers/sounds'
import { PLAY_SOUND } from 'nativeMixing/src/actions/types'
import { PLAY_MODES } from 'nativeMixing/src/config/sounds'
import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

describe('sounds reducer', () => {
  it('default state', () => {
    const state = soundsReducer(undefined, { type: 'fake' })
    expect(state).to.eql({
      current: null,
      all: {},
      mode: PLAY_MODES.ORIGINAL,
      isPlaying: false
    })
  })

  it('play sound', () => {
    const previousState = { current: null, all: {}, mode: PLAY_MODES.ORIGINAL, isPlaying: false }
    deepFreeze(previousState)
    const state = soundsReducer(previousState, { type: PLAY_SOUND, payload: { id: 1 } })
    expect(state).to.eql({
      current: 1,
      all: {
        1: { id: 1 }
      },
      mode: PLAY_MODES.ORIGINAL,
      isPlaying: true
    })
  })
})
