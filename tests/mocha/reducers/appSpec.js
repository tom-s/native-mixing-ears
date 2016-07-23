import appReducer from 'nativeMixing/src/reducers/app'
import { APP_INIT_SUCCESS } from 'nativeMixing/src/actions/types'
import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

describe('app reducer', () => {
  it('default state', () => {
    const state = appReducer(undefined, { type: 'fake' })
    expect(state).to.eql({
      initialized: false
    })
  })

  it('init app', () => {
    const previousState = { initialized: false }
    deepFreeze(previousState)
    const state = appReducer(previousState, { type: APP_INIT_SUCCESS, payload: {} })
    expect(state).to.eql({
      initialized: true
    })
  })
})
