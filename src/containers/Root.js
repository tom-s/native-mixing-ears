import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from 'nativeMixing/src/store/configure-store'
import App from 'nativeMixing/src/containers/App'

const store = configureStore()

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default Root
