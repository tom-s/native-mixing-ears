import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Components
const SessionProgress = ({level = 1, progress = 0, score = 0}) => {
  return (
    <View>
      <View>
        <Text>LEVEL</Text>
        <Text>{level}</Text>
      </View>

      <View>
        <Text>PROGRESS</Text>
        <Text>{progress}%</Text>
      </View>

      <View>
        <Text>SCORE</Text>
        <Text>{score}</Text>
      </View>
   </View>
  )
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})

export default SessionProgress
