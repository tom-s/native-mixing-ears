import React, { Component } from 'react'
import { View, StyleSheet, Navigator, ActivityIndicator } from 'react-native'
import inject from 'nativeMixing/src/utils/inject'
import * as routes from 'nativeMixing/src/config/routes'
import codePush from 'react-native-code-push'

// Components
import Drawer from 'react-native-drawer'
import Webview from 'nativeMixing/src/containers/Webview'
import Exercise from 'nativeMixing/src/containers/Exercise'
import SidePanel from 'nativeMixing/src/components/SidePanel'
import Home from 'nativeMixing/src/components/Home'

// Navigator config
const baseConfig = Navigator.SceneConfigs.FloatFromRight

const customSceneConfig = Object.assign({}, baseConfig, {
  // A very tighly wound spring will make this transition fast
  springTension: 100,
  springFriction: 1
})


class App extends Component {
  constructor(props) {
    super(props)
    this._navigator = null
  }

  componentWillMount() {
    const { init } = this.props
    init()
  }

  componentDidMount() {
    // Try to sync to check it works
    //codePush.sync()
  }

  render() {
    const { isInitialized } = this.props

    if (!isInitialized) {
      return (
        <ActivityIndicator
        animating={true}
        style={[styles.centering, {height: 80}]}
        size="large"/>
     )
    }

    const url = 'file:///android_asset/webview.html'

    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type='overlay'
        tweenDuration={150}
        panThreshold={0.25}
        styles={{main: {shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15}}}
        closedDrawerOffset={0}
        panOpenMask={0.25}
        panCloseMask={0.25}
        openDrawerOffset={0.25}
        closedDrawerOffset={0}
        captureGestures={true}
        acceptDoubleTap={true}
        acceptPan={false}
        panOpenMask={0.1}
        content={<SidePanel closeDrawer={this.closeDrawer} goTo={this._goTo.bind(this)} />}>
        <Navigator ref={(ref) => this._navigator = ref} initialRoute={{id: routes.EXERCISE }}
            renderScene={this._renderScene.bind(this)}
            configureScene={this._configureScene.bind(this)} />
        <Webview key='webview' localhost={false}
          injectedJavaScript={inject}
          onBridgeMessage={this._onBridgeMessage}
          style={{ flex: 0 }}
          url={url} />
     </Drawer>
    )
  }

  closeDrawer = () => {
    this._drawer.close()
  }

  openDrawer = () => {
    this._drawer.open()
  }

  _onBridgeMessage() {
    alert('received message ' + msg)
  }

  _configureScene() {
    return customSceneConfig
  }


  _renderScene(route, navigator) {
    let page
    switch(route.id) {
      case routes.HOME:
        page = <Home navigator={navigator} />
        break
      case routes.EXERCISE:
        page = <Exercise navigator={navigator} />
        break
    }
    return (
      <View style={styles.container}>
        {page}
      </View>
    )
  }

  _goTo(route) {
    this.closeDrawer()
    this._navigator.push({id: route})

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
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  }
})

export default App
