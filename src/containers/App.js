import { connect } from 'react-redux'
import AppComponent from 'nativeMixing/src/components/App'
import * as actionCreators from 'nativeMixing/src/actions/creators'
import { getInitialized } from 'nativeMixing/src/selectors/app'

const mapStateToProps = (state) => {
  const isInitialized = getInitialized(state)
  return {
    isInitialized
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    init: () => {
      dispatch(actionCreators.init())
    }
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent)

export default App
