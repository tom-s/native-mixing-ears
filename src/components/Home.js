import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Components
import TargetUserToggle from 'nativeMixing/src/containers/TargetUserToggle'
import Slider from 'nativeMixing/src/components/Slider'
import PlayPauseButton from 'nativeMixing/src/components/PlayPauseButton'

const Home = () => {
  return (
    <View>
      <Text key='home' style={styles.welcome}>
        This is the main page
      </Text>
      <PlayPauseButton />
      <TargetUserToggle />
      <Slider defaultValue={0.5} />
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

export default Home
