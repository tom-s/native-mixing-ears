import { connect } from 'react-redux'
import ExerciseComponent from 'nativeMixing/src/components/Exercise'
import * as actionCreators from 'nativeMixing/src/actions/creators'
import { getCurrentExercise } from 'nativeMixing/src/selectors/exercises'

const mapStateToProps = (state) => {
  const exercise = getCurrentExercise(state)
  return {
    exercise
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initExercise: () => {
      dispatch(actionCreators.generateExercise())
    }
    /*
    playSound: (sound) => {
      dispatch(actionCreators.playSound(sound))
    }*/
  }
}

const Exercise = connect(mapStateToProps, mapDispatchToProps)(ExerciseComponent)

export default Exercise

