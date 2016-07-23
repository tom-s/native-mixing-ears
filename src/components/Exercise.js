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
      exercise: null,
      answers: {}
    }
  }

  componentDidMount() {
    const exercise = generateExercise(EXERCISES_TYPES.ATTACK, LEVELS.EASY)
    const answers = {}
    Object.keys(exercise.values).forEach(key => {
      const val = exercise.values[key]
      if (val) {
        answers[key] = val[0]
      }
    })
    this.setState({
      exercise,
      answers
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
                <Slider values={val} onValueChange={(val) => {
                  //console.log("new slider value is", val)
                  this._updateAnswer(key, val)
                }}/>
              </View>
            ): null
        })}
      </View>
    )
  }

  _updateAnswer(key, val) {
    const { answers } = this.state
    answers[key] = val
    this.setState({
      answers
    })
  }
}

export default Exercise
