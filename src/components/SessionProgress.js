import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Components
const SessionProgress = ({level = 1, progress = 0, score = 0}) => {
  return (
    <View style={styles.container}>
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
  container: {}
})

export default SessionProgress
