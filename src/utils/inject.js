import drumsSound from '3dears/assets/drums'
import decodeArrayBuffer from '3dears/src/utils/base64Binary'

const inject = (window, sounds, decodeArrayBuffer) => {
  // create web audio api context
  let audioCtx = new (window.AudioContext || window.webkitAudioContext)()


  const play = (payload) => {
    const { soundId } = payload

    const playSound = (buffer) => {
      const mySource = audioCtx.createBufferSource()
      mySource.buffer = buffer
      mySource.connect(audioCtx.destination)
      mySource.start(0)
    }

    const loadSound = (soundId) => {
      const buff = decodeArrayBuffer(sounds[soundId])
      audioCtx.decodeAudioData(buff, (buffer) => {
        playSound(buffer)
      }, (e) => {
        alert('error decoding' + e)
      })
    }

    loadSound(soundId)
  }

  const pause = (payload) => {
    alert('pause !')
  }

  window.CrosswalkWebViewBridge.onMessage = (msg) => {
    try {
      const { action, payload } = JSON.parse(msg)

      if (action === 'PAUSE') {
        pause(payload)
      }
      if (action === 'PLAY') {
        play(payload)
      }
    } catch (e) {
      //alert("error parsing")
    }
  }
}

 // add dependancies
const wrappedInject = `
    var fn = ${inject}
    var sounds = {
     "drums": "${drumsSound}"
    };
    var decodeArrayBuffer = ${decodeArrayBuffer}
    fn(window, sounds, decodeArrayBuffer)
`

export default wrappedInject
