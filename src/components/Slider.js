import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import NativeSlider from 'react-native-slider'

class Slider extends Component {
  constructor(props) {
    super(props)
    const { defaultValue = 0.2 } = props
    this.state = {
      value: defaultValue
    }
  }

  render() {
    const { value } = this.state
    return (
      <View style={styles.container}>
        <NativeSlider
          value={value}
          trackStyle={styles.track}
          onValueChange={(val) => this.setState({value: val})} />
        <Text>Value: {value}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  track: {

  }
})

export default Slider
