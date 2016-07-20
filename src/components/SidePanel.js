import React, {Component, PropTypes} from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'

import * as routes from 'nativeMixing/src/config/routes'

export default class SidePanel extends Component {
  static propTypes = {
    closeDrawer: PropTypes.func.isRequired
  };

  render() {
    let { closeDrawer, goTo } = this.props
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.controlText}>Control Panel</Text>
        <TouchableOpacity style={styles.button} onPress={closeDrawer}>
          <Text>Close Drawer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {
          goTo(routes.OTHER)
        }}>
          <Text>Go to another page</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black'
  },
  controlText: {
    color: 'white'
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10
  }
})

export default SidePanel
