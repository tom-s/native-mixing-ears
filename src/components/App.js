import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Reactotron from 'reactotron'
import inject from 'nativeMixing/src/utils/inject'

// Components
import Webview from 'nativeMixing/src/containers/Webview'
import Drawer from 'react-native-drawer'
import SidePanel from 'nativeMixing/src/components/SidePanel'

class App extends Component {
  componentDidMount() {
    Reactotron.log('start')
  }
  render() {
    const url = 'file:///android_asset/webview.html'
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="static"
        tweenDuration={150}
        panThreshold={0.25}
        acceptDoubleTap
        styles={{main: {shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15}}}
        closedDrawerOffset={0}
        panOpenMask={0.25}
        panCloseMask={0.25}
        openDrawerOffset={0.25}
        closedDrawerOffset={0}
        captureGestures={true}
        acceptDoubleTap={true}
        content={<SidePanel closeDrawer={this.closeDrawer} />}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Webview localhost={false}
            injectedJavaScript={inject}
            onBridgeMessage={this.onBridgeMessage}
            style={{ flex: 0 }}
            url={url} />
      </View>
     </Drawer>
    )
  }

  closeDrawer = () => {
    this._drawer.close()
  }

  openDrawer = () => {
    this._drawer.open()
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
    backgroundColor: '#FFFFFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})

export default App
