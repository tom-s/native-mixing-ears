import React, { PropTypes } from 'react'
import {
  findNodeHandle, NativeModules,
  requireNativeComponent, View, DeviceEventEmitter
} from 'react-native'
const { UIManager, CrosswalkWebViewManager: { JSNavigationScheme } } = NativeModules
import inject from '3dsears/utils/inject'


const WEBVIEW_REF = 'crosswalkWebView'

const CrosswalkWebView = React.createClass({
  statics:   { JSNavigationScheme },
  propTypes: {
    localhost:               PropTypes.bool.isRequired,
    onNavigationStateChange: PropTypes.func,
    url:                     PropTypes.string,
    injectedJavaScript:      PropTypes.string,
    onBridgeMessage:         PropTypes.func,
    ...View.propTypes
  },

  componentDidMount: function() {
    setTimeout(() => {
      this.sendToBridge({
        action: "PLAY",
        payload: {
          sound: 'drums'
        }
      })
    }, 1000)
  },

  componentWillMount: function() {
    DeviceEventEmitter.addListener("crosswalkWebViewBridgeMessage", (body) => {
      const { onBridgeMessage } = this.props
      const message = body.message
      if (this.props.onBridgeMessage) {
        onBridgeMessage(message)
      }
    })
  },

  render () {
    const injectScript = inject
    return (
      <NativeCrosswalkWebView
        { ...this.props }
        injectedJavaScript={injectScript}
        onNavigationStateChange={ this.onNavigationStateChange }
        ref={ WEBVIEW_REF }/>
    )
  },

  getWebViewHandle () {
    return findNodeHandle(this.refs[WEBVIEW_REF]);
  },

  reload () {
    UIManager.dispatchViewManagerCommand(
      this.getWebViewHandle(),
      UIManager.CrosswalkWebView.Commands.reload,
      null
    )
  },

  sendToBridge (message) {
    const strMessage = JSON.stringify(message)
    UIManager.dispatchViewManagerCommand(
      this.getWebViewHandle(),
      UIManager.CrosswalkWebView.Commands.sendToBridge,
      [strMessage]
    )
  }
})

const NativeCrosswalkWebView = requireNativeComponent('CrosswalkWebView', CrosswalkWebView)

export default NativeCrosswalkWebView
