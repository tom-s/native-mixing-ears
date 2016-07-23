import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { EXERCISES_TYPES, LEVELS } from 'nativeMixing/src/config/exercises'
import { generateExercise } from 'nativeMixing/src/utils/exerciseGenerator'

// Components
import SessionProgress from 'nativeMixing/src/components/SessionProgress'
import TargetUserToggle from 'nativeMixing/src/containers/TargetUserToggle'
import Slider from 'nativeMixing/src/components/Slider'

class Exercise extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exercise: null
    }
  }

  componentDidMount() {
    const exercise = generateExercise(EXERCISES_TYPES.ATTACK, LEVELS.EASY)
    this.setState({
      exercise
    })
  }

  render() {
    const { exercise } = this.state
    if (!exercise) {
      return null
    }
    const { values } = exercise
    return (
      <View>
        <SessionProgress />
        <TargetUserToggle />
        {Object.keys(values).map(key => {
          const val = values[key]
          return (val)
            ? (
              <View key={key}>
                <Text> {key} </Text>
                <Slider values={val} onValueChange={() => {
                  //console.log("new slider value is", val)
                }}/>
              </View>
            ): null
        })}
      </View>
    )
  }
}

export default Exercise
