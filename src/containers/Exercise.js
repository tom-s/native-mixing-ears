import { connect } from 'react-redux'
import ExerciseComponent from 'nativeMixing/src/components/Exercise'
import * as actionCreators from 'nativeMixing/src/actions/creators'

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => {
  return {
    playSound: (sound) => {
      dispatch(actionCreators.playSound(sound))
    }
  }
}

const Exercise = connect(mapStateToProps, mapDispatchToProps)(ExerciseComponent)

export default Exercise

