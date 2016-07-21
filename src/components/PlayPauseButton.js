import React, { Component } from 'react'
import { Motion, StaggeredMotion, spring } from 'react-motion'
import Svg,{
    Path
} from 'react-native-svg'
const animationConfig = {stiffness: 170, damping: 9}
const fadeConfig = {stiffness: 10, damping: 9}

class PlayPauseButton extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Svg width="200" height="200" viewBox="0 0 36 36" >
          <Path d="M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26" />
          <Path d="M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28" />
      </Svg>
    )
  }
}

export default PlayPauseButton

