import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import NativeSlider from 'nativeMixing/src/components/common/Slider'

const Labels = ({width=0, values=[]}) => {
  const sliderWidth = 20
  width = width - sliderWidth
  // Calculte position of all labels
  const valuesWithPositions = []
  values.reduce((memo, val, index) => {
    const { label } = val
    const isLast = (index === (values.length - 1))
    const itemWidth = (isLast)
      ? sliderWidth
      : (width / (values.length - 1))
    valuesWithPositions.push({
      label,
      x: memo,
      width: itemWidth
    })
    return memo + itemWidth
  }, 0)


  return (
    <View style={styles.labels}>
      {valuesWithPositions.map((val, index) => {
        const { width: itemWidth, label } = val
        const style = {
          width: itemWidth,
          textAlign: 'left'
        }
        const containerStyle = {
          width: itemWidth,
          padding: 3
        }
        return <View key={index} style={containerStyle}>
          <Text style={[styles.label, style]}> {label} </Text>
        </View>
      })}
    </View>
  )
}
class Slider extends Component {
  constructor(props) {
    super(props)
    const { values = [] } = props // [{ value: 1, label: 'this is 1'}]
    this.sliderWidth = 0
    this.state = {
      value: 0,
      minimumValue: 0,
      maximumValue: values.length
        ? values.length - 1
        : 0,
      step: 1
    }
  }


  render() {
    const { values } = this.props
    const { value, minimumValue, maximumValue } = this.state
    return (
      <View style={styles.container} onLayout={({nativeEvent: { layout: { width }}}) => {
        this.sliderWidth = width
      }}>
        <NativeSlider
          value={value}
          minimumValue={minimumValue}
          maximumValue={maximumValue}
          trackStyle={styles.track}
          step={1}
          onValueChange={this._onValueChange.bind(this)} />
        <Labels width={this.sliderWidth} values={values} />
      </View>
    )
  }

  _onValueChange(val) {
    const { values, onValueChange = () => {} } = this.props
    this.setState({value: val})
    onValueChange(values[val])
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

  },
  labels: {
    flexDirection: 'row'
  },
  label: {
    color: 'black'
  }
})

export default Slider
