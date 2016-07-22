import { connect } from 'react-redux'
import AppComponent from 'nativeMixing/src/components/App'
import * as actionCreators from 'nativeMixing/src/actions/creators'

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => {
  return {
    init: () => {
      dispatch(actionCreators.init())
    }
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent)

export default App
