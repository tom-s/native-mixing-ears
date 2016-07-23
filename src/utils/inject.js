const inject = (window) => {
  let sources = []

  // create web audio api context
  const AudioContext = window.AudioContext || window.webkitAudioContext
  if (window.audioCtx) {
    window.audioCtx.close()
  }
  try {
    window.audioCtx = new AudioContext()
  } catch(err) {
    alert(err)
  }

  /* Web audio API methods */
  const stopAll = () => {
    sources.forEach(source => {
      source.stop()
    })
    sources = []
  }

  const playSound = (buffer) => {
    // @todo: should stop all currently playing sound
    const mySource = window.audioCtx.createBufferSource()
    mySource.buffer = buffer
    mySource.connect(window.audioCtx.destination)
    mySource.loop = true
    mySource.start(0)
    sources.push(mySource)
  }

  const pauseSound = () => {
    //alert('todo')
  }


  const loadSound = (sound) => {
    const request = new window.XMLHttpRequest()
    const url = `file:///android_asset/sounds/${sound}.wav`
    request.responseType = 'arraybuffer'
    request.open('GET', url, true)
    request.responseType = 'arraybuffer'

    request.onload = () => {
      window.audioCtx.decodeAudioData(request.response, (buffer) => {
        playSound(buffer)
      }, () => {
        alert('error decoding')
      })
    }
    request.send()
  }

  /* Interface methods */
  const play = (payload) => {
    const { sound } = payload
    loadSound(sound)
  }

  const pause = (payload) => {
    const { sound } = payload
    pauseSound(sound)
  }

  /* Messaging system */
  window.CrosswalkWebViewBridge.onMessage = (msg) => {
    try {
      const { action, payload } = JSON.parse(msg)

      if (action === 'PAUSE') {
        pause(payload)
      }
      if (action === 'PLAY') {
        stopAll()
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
