import { put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { EXERCISE_GENERATE } from 'nativeMixing/src/actions/types'
import { EXERCISES_TYPES, LEVELS } from 'nativeMixing/src/config/exercises'
import { generateExercise } from 'nativeMixing/src/utils/exerciseGenerator'
import * as actionCreators from 'nativeMixing/src/actions/creators'

export function* exerciseGenerate () {
  const exercise = generateExercise(EXERCISES_TYPES.ATTACK, LEVELS.EASY)
  yield put(actionCreators.generateExerciseSuccess(exercise))
}

function* watchExerciseGenerate () {
  yield* takeEvery(EXERCISE_GENERATE, exerciseGenerate)
}

export default watchExerciseGenerate
