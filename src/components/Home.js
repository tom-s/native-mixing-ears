import React from 'react'
import { View } from 'react-native'

// Components
import SessionProgress from 'nativeMixing/src/components/SessionProgress'
import TargetUserToggle from 'nativeMixing/src/containers/TargetUserToggle'
import Slider from 'nativeMixing/src/components/Slider'
import PlayPauseButton from 'nativeMixing/src/components/PlayPauseButton'

const sliderValues = [0, 1, 2, 3, 4].map(val => ({
  value: val,
  label: val
}))
const Home = () => {
  return (
    <View>
      <SessionProgress />
      <PlayPauseButton />
      <TargetUserToggle />
      <Slider values={sliderValues} onValueChange={() => {
        //console.log("new slider value is", val)
      }}/>
   </View>
  )
}

export default Home
