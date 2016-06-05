/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component, PropTypes } from 'react';
import {
    findNodeHandle, AppRegistry, StyleSheet, NativeModules,
    requireNativeComponent, View, Text, DeviceEventEmitter
} from 'react-native';
const { UIManager, CrosswalkWebViewManager: { JSNavigationScheme } } = NativeModules;
import inject from './inject'


const WEBVIEW_REF = 'crosswalkWebView';

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
        }, 3000)
    },

    componentWillMount: function() {
        DeviceEventEmitter.addListener("crosswalkWebViewBridgeMessage", (body) => {
            const { onBridgeMessage } = this.props;
            const message = body.message;
            if (this.props.onBridgeMessage) {
                onBridgeMessage(message);
            }
        });
    },

    render () {
        const injectScript = inject
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
        const strMessage = JSON.stringify(message)
        console.log(strMessage)
        UIManager.dispatchViewManagerCommand(
            this.getWebViewHandle(),
            UIManager.CrosswalkWebView.Commands.sendToBridge,
            [strMessage]
        );
    },
});

const NativeCrosswalkWebView = requireNativeComponent('CrosswalkWebView', CrosswalkWebView)


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
                    style={{ flex: 0 }}
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
