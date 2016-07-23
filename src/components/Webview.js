import React, { PropTypes } from 'react'
import ReactNative, { findNodeHandle, requireNativeComponent, View, DeviceEventEmitter } from 'react-native'
import resolveAssetSource from 'resolveAssetSource'

const {
  NativeModules: { UIManager, CrosswalkWebViewManager: { JSNavigationScheme } }
} = ReactNative


const WEBVIEW_REF = 'crosswalkWebView'

const CrosswalkWebView = React.createClass({
  statics:   { JSNavigationScheme },
  propTypes: {
    localhost:               PropTypes.bool.isRequired,
    onNavigationStateChange: PropTypes.func,
    url:                     PropTypes.string,
    injectedJavaScript:      PropTypes.string,
    onBridgeMessage:         PropTypes.func,
    source:                  PropTypes.oneOfType([
      PropTypes.shape({
        uri: PropTypes.string // uri to load in webview
      }),
      PropTypes.shape({
        html: PropTypes.string // static html to load in webview
      }),
      PropTypes.number // used internally by packager
    ]),
    ...View.propTypes
  },

  componentDidMount() {
    const { playSound } = this.props
    setTimeout(() => {
      this.play('techno')
    }, 2000)
  },

  play(soundId) {
    this.sendToBridge({
      action: 'PLAY',
      payload: {
        sound: soundId
      }
    })
  },

  shouldComponentUpdate() {
    return false // otherwise webview renders way too many times and causes audio context bugs
  },

  componentWillReceiveProps(newProps) {
    const { currentSound } = newProps
    const { currentSound: previousCurrentSound } = this.props
    if(currentSound && currentSound !== previousCurrentSound) {
      this.play(currentSound.id)
    }
  },

  getDefaultProps() {
    return {
      localhost: false
    }
  },

  componentWillMount() {
    const { onBridgeMessage } = this.props
    DeviceEventEmitter.addListener("crosswalkWebViewBridgeMessage", (body) => {
      const { message } = body
      if (onBridgeMessage) {
        onBridgeMessage(message)
      }
    })
  },

  render () {
    var source = this.props.source || {}
    if (this.props.url) {
      source.uri = this.props.url
    }
    return (
      <NativeCrosswalkWebView
        { ...this.props }
        ref={ WEBVIEW_REF }
        source={resolveAssetSource(source)}
      />
    )
  },

  getWebViewHandle () {
    return findNodeHandle(this.refs[WEBVIEW_REF])
  },

  reload () {
    UIManager.dispatchViewManagerCommand(
      this.getWebViewHandle(),
      UIManager.NativeCrosswalkWebView.Commands.reload,
      null
    )
  },

  sendToBridge (message) {
    console.log("send to bridge")
    const strMessage = JSON.stringify(message)
    UIManager.dispatchViewManagerCommand(
      this.getWebViewHandle(),
      UIManager.CrosswalkWebView.Commands.sendToBridge,
      [strMessage]
    )
  }
})

var NativeCrosswalkWebView = requireNativeComponent('CrosswalkWebView', CrosswalkWebView)

export default CrosswalkWebView
