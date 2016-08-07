import React, { Component } from 'react'
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import PlayPauseButton from 'nativeMixing/src/components/PlayPauseButton'
import { PLAY_MODES } from 'nativeMixing/src/config/sounds'

class TargetUserToggle extends Component {
  render() {
    const { mode } = this.props
    return (
      <View style={styles.wrapper}>
        <TouchableWithoutFeedback onPress={this._toggleTarget.bind(this)} >
          <View style={[ styles.target, mode === PLAY_MODES.TARGET && styles.activeToggle]}  />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this._toggleUser.bind(this)} >
          <View style={[ styles.user, mode === PLAY_MODES.CURRENT && styles.activeToggle]}  />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this._togglePlay.bind(this)} >
          <View style={[ styles.play ]}>
            <View style={styles.buttonWrapper}>
              <PlayPauseButton />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }

  _toggleTarget() {
    const { mode, setSoundMode } = this.props
    const newMode  =  (mode === PLAY_MODES.TARGET) ? null : PLAY_MODES.TARGET
    setSoundMode(newMode)
  }

  _toggleUser() {
    const { mode, setSoundMode } = this.props
    const newMode  =  (mode === PLAY_MODES.CURRENT) ? null : PLAY_MODES.CURRENT
    setSoundMode(newMode)
  }

  _togglePlay() {
    const { canPause } = this.state
    this.setState({
      canPause: !canPause
    })
  }
}

const width = 200
const height = width / 2
const playWidth = width / 3

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    transform: [
      {rotate: '45deg'}
    ]
  },
  target: {
    height:height,
    width:width,
    borderTopLeftRadius: width,
    borderTopRightRadius: width,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: 'red'
  },
  activeToggle: {
    backgroundColor: 'blue'
  },
  user: {
    height:height,
    width:width,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: width,
    borderBottomRightRadius: width,
    backgroundColor: 'green'
  },
  play: {
    position: 'absolute',
    top: (width - playWidth) / 2,
    left: (width - playWidth) / 2,
    width: playWidth,
    height: playWidth,
    borderTopLeftRadius: playWidth ,
    borderTopRightRadius: playWidth,
    borderBottomLeftRadius: playWidth,
    borderBottomRightRadius: playWidth,
    backgroundColor: 'black',
    transform: [
      {rotate: '-45deg'}
    ]
  },
  pauseIcon: {
    color: 'white'
  },
  playIcon: {
    color: 'white'
  },
  buttonWrapper: {
    position: 'relative',
    top: 15,
    left: 15
  }
})

export default TargetUserToggle

