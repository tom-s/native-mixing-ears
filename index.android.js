/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component, PropTypes } from 'react';
import { findNodeHandle, AppRegistry, StyleSheet, NativeModules, requireNativeComponent, View, Text, DeviceEventEmitter } from 'react-native';
var { UIManager, CrosswalkWebViewManager: { JSNavigationScheme } } = NativeModules;

var WEBVIEW_REF = 'crosswalkWebView';

var CrosswalkWebView = React.createClass({
    statics:   { JSNavigationScheme },
    propTypes: {
        localhost:               PropTypes.bool.isRequired,
        onNavigationStateChange: PropTypes.func,
        url:                     PropTypes.string,
        injectedJavaScript:      PropTypes.string,
        onBridgeMessage:         PropTypes.func,
        ...View.propTypes
    },
    getDefaultProps () {
        return {
            localhost: false
        };
    },
    componentDidMount: function() {
    },
    componentWillMount: function() {
        DeviceEventEmitter.addListener("crosswalkWebViewBridgeMessage", (body) => {
            alert('body ' + body);
            const { onBridgeMessage } = this.props;
            const message = body.message;
            if (this.props.onBridgeMessage) {
                onBridgeMessage(message);
            }
        });
    },
    render () {
      const injectScript =`(function () {
        CrosswalkWebViewBridge.send("hello from webview");
      }())`;
        return (
            <NativeCrosswalkWebView
                  { ...this.props }
                  injectedJavaScript={injectScript}
                  onNavigationStateChange={ this.onNavigationStateChange }
                  ref={ WEBVIEW_REF }/>
        );
    },
    getWebViewHandle () {
        return findNodeHandle(this.refs[WEBVIEW_REF]);
    },
     reload () {
        UIManager.dispatchViewManagerCommand(
            this.getWebViewHandle(),
            UIManager.CrosswalkWebView.Commands.reload,
            null
        );
    },
    sendToBridge (message) {
        UIManager.dispatchViewManagerCommand(
            this.getWebViewHandle(),
            UIManager.CrosswalkWebView.Commands.sendToBridge,
            [message]
        );
    },
});

var NativeCrosswalkWebView = requireNativeComponent('CrosswalkWebView', CrosswalkWebView);


class nativeMixing extends Component {
  render() {
    const url = 'http://www.google.fr'

    return (
      <View  style={{ flex: 1 }}>
              <Text style={styles.welcome}>
                Welcome to React Native!
              </Text>
              <CrosswalkWebView
                localhost={ false }
                onBridgeMessage={this.onBridgeMessage}
                style={{ flex: 0.5 }}
                url={url} />
      </View>

    );
  }
  onBridgeMessage(msg) {
    alert('received message ' + msg)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('nativeMixing', () => nativeMixing);
