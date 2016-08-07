import { connect } from 'react-redux'
import TargetUserToggleComponent from 'nativeMixing/src/components/TargetUserToggle'
import * as actionCreators from 'nativeMixing/src/actions/creators'
import { getCurrentMode } from 'nativeMixing/src/selectors/sounds'

const mapStateToProps = (state) => {
  const mode = getCurrentMode(state)
  return {
    mode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSoundMode: (mode) => {
      dispatch(actionCreators.switchSoundMode(mode))
    }
  }
}

const TargetUserToggle = connect(mapStateToProps, mapDispatchToProps)(TargetUserToggleComponent)

export default TargetUserToggle

