import { connect } from 'react-redux'
import WebviewComponent from 'nativeMixing/src/components/Webview'
import { getCurrentSound } from 'nativeMixing/src/selectors/sounds'

const mapStateToProps = (state) => {
  const currentSound = getCurrentSound(state)
  console.log("current Sound", currentSound)
  return {
    currentSound
  }
}

const mapDispatchToProps = () => ({})

const Webview = connect(mapStateToProps, mapDispatchToProps)(WebviewComponent)

export default Webview

