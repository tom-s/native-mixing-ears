const inject = (window) => {
  // create web audio api context
  let audioCtx = new (window.AudioContext || window.webkitAudioContext)()


  const play = (payload) => {
    const { sound } = payload

    const playSound = (buffer) => {
      // @todo: should stop all currently playing sound
      const mySource = audioCtx.createBufferSource()
      mySource.buffer = buffer
      mySource.connect(audioCtx.destination)
      mySource.start(0)
    }

    const loadSound = (sound) => {
      const request = new window.XMLHttpRequest()
      const url = `file:///android_asset/sounds/${sound}.wav`
      request.responseType = 'arraybuffer'
      request.open('GET', url, true)
      request.responseType = 'arraybuffer'

      request.onload = () => {
        audioCtx.decodeAudioData(request.response, (buffer) => {
          playSound(buffer)
        }, (e) => {
          alert('error decoding' + e)
        })
      }
      request.send()
    }

    loadSound(sound)
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
    fn(window)
`

export default wrappedInject
