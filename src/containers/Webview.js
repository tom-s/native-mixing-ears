import { connect } from 'react-redux'
import WebviewComponent from 'nativeMixing/src/components/Webview'
import { getCurrentSound } from 'nativeMixing/src/selectors/sounds'
import * as actionCreators from 'nativeMixing/src/actions/creators'

const mapStateToProps = (state) => {
  const currentSound = getCurrentSound(state)
  console.log("current Sound", currentSound)
  return {
    currentSound
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playSound: (soundId) => {
      dispatch(actionCreators.playSound(soundId))
    }
  }
}

const Webview = connect(mapStateToProps, mapDispatchToProps)(WebviewComponent)

export default Webview

