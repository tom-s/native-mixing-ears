import { connect } from 'react-redux'
import TargetUserToggleComponent from 'nativeMixing/src/components/TargetUserToggle'
import * as actionCreators from 'nativeMixing/src/actions/creators'
import { getCurrentMode, getIsPlaying } from 'nativeMixing/src/selectors/sounds'

const mapStateToProps = (state) => {
  const mode = getCurrentMode(state)
  const isPlaying = getIsPlaying(state)
  return {
    mode,
    isPlaying
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSoundMode: (mode) => {
      dispatch(actionCreators.switchSoundMode(mode))
    },
    setIsPlaying: (isPlaying) => {
      dispatch(actionCreators.setPlaying(isPlaying))
    }
  }
}

const TargetUserToggle = connect(mapStateToProps, mapDispatchToProps)(TargetUserToggleComponent)

export default TargetUserToggle

