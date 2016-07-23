import React, { Component } from 'react'
import {TouchableWithoutFeedback } from 'react-native'
//import { Motion, spring } from 'react-motion'
import Svg,{ Path} from 'react-native-svg'
//const animationConfig = {stiffness: 70, damping: 9}

class PlayPauseButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paused: true,
      pause: {
        previousOpacity: 0,
        opacity: 0
      },
      play: {
        previousOpacity: 1,
        opacity: 1
      }
    }
  }

  render() {
    const { ...otherProps } = this.props
    const { paused } = this.state
    const button = (paused)
      ? <Path d='M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26' fill='#FFFFFF'/>
      : <Path d='M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28' fill='#FFFFFF' />

    return (
      <TouchableWithoutFeedback onPress={this._togglePaused.bind(this)} {...otherProps}>
        <Svg width="200" height="200" viewBox="0 0 36 36">
          {button}
        </Svg>
      </TouchableWithoutFeedback>
    )

    /*
    const { pause, play } = this.state
    return (
      <Motion defaultStyle={{playopacity: play.previousOpacity, pauseopacity: pause.previousOpacity }}
          style={{playopacity: spring(play.opacity, animationConfig), pauseopacity: spring(pause.opacity, animationConfig)}}>
          { newStyle =>   (
            <TouchableWithoutFeedback onPress={this._togglePaused.bind(this)}>
              <Svg width="200" height="200" viewBox="0 0 36 36">
                <Path d="M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26" fillOpacity={newStyle.playopacity} />
                <Path d="M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28" fillOpacity={newStyle.pauseopacity} />
              </Svg>
            </TouchableWithoutFeedback>
          )}
      </Motion>
    )*/
  }

  _togglePaused() {
    const { paused, pause, play } = this.state
    if (paused) {
      pause.previousOpacity = 0
      pause.opacity = 1
      play.previousOpacity = 1
      play.opacity = 0
    } else {
      pause.previousOpacity = 1
      pause.opacity = 0
      play.previousOpacity = 0
      play.opacity = 1
    }


    this.setState({
      paused: !paused,
      play,
      pause
    })
  }
}

export default PlayPauseButton

