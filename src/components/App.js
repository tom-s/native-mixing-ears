import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import Webview from '3dears/components/Webview'

class App extends Component {
  render() {
    const url = 'http://www.google.fr'
    return (
      <View  style={{ flex: 1 }}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Webview localhost={ false }
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
