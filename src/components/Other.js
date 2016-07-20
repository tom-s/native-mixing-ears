import React from 'react'
import { StyleSheet, Text } from 'react-native'


const Other = () => {
  return (
    <Text key='other' style={styles.welcome}>
      This is an other page
     </Text>
  )
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})

export default Other
