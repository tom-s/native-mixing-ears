import React, { Component } from 'react'
import { View, Text } from 'react-native'

// Components
import SessionProgress from 'nativeMixing/src/components/SessionProgress'
import TargetUserToggle from 'nativeMixing/src/containers/TargetUserToggle'
import Slider from 'nativeMixing/src/components/Slider'

class Exercise extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answers: {}
    }
  }

  componentDidMount() {
    // Generate exercise
    const { initExercise } = this.props
    initExercise()
  }

  componentWillReceiveProps(newProps) {
    const { exercise: previousExercise } = this.props
    const { exercise } = newProps
    if (exercise && exercise !== previousExercise) {
      this._init(newProps)
    }
  }

  render() {
    const { exercise } = this.props
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
                  this._updateAnswer(key, val)
                }}/>
              </View>
            ): null
        })}
      </View>
    )
  }

  _init(props) {
    // Prépare answers
    const { exercise } = props
    const answers = {}

    Object.keys(exercise.values).forEach(key => {
      const val = exercise.values[key]
      if (val) {
        answers[key] = val[0]
      }
    })

    this.setState({
      answers
    })
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
