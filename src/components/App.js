import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Reactotron from 'reactotron'
import Webview from 'nativeMixing/src/components/Webview'
import inject from 'nativeMixing/src/utils/inject'

class App extends Component {
  componentDidMount() {
    Reactotron.log('start')
  }
  render() {
    const url = 'file:///android_asset/webview.html'
    return (
      <View  style={{ flex: 1 }}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Webview localhost={false}
          injectedJavaScript={inject}
          onBridgeMessage={this.onBridgeMessage}
          style={{ flex: 0 }}
          url={url} />
     </View>
    )
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
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

export default App
