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
      sendToBridge('YOUPI')
    },
    componentWillMount: function() {
        DeviceEventEmitter.addListener("CrosswalkWebViewBridgeAndroid", (body) => {
            alert('body ' + body);
            const { onBridgeMessage } = this.props;
            const message = body.message;
            if (onBridgeMessage) {
                onBridgeMessage(message);
            }
        });
         DeviceEventEmitter.addListener("crosswalkWebViewBridgeAndroid", (body) => {
            alert('body ' + body);
            alert(body);
            const { onBridgeMessage } = this.props;
            const message = body.message;
            if (onBridgeMessage) {
                onBridgeMessage(message);
            }
        });
    },
    render () {
        return (
            <NativeCrosswalkWebView
                  { ...this.props }
                  onNavigationStateChange={ this.onNavigationStateChange }
                  ref={ WEBVIEW_REF }/>
        );
    },
    getWebViewHandle () {
        return findNodeHandle(this.refs[WEBVIEW_REF]);
    },
    sendToBridge (message) {
        alert('tru to send message' + message)
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
