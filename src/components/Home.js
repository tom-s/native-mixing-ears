import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Home = () => {
  return (
    <Text key='home' style={styles.welcome}>
      This is the main page
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

export default Home
