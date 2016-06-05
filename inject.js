
const inject = (window) => {

  // create web audio api context
  let audioCtx = new (window.AudioContext ||
    window.webkitAudioContext ||
    window.mozAudioContext ||
    window.oAudioContext ||
    window.msAudioContext)()


  const play = (payload) => {
    const { sound } = payload
    alert("play" + sound)

    const playSound = (buffer) => {
      const mySource = audioCtx.createBufferSource()
      mySource.buffer = buffer
      mySource.connect(audioCtx.destination)
      mySource.start(0)
    }

    const loadSound = (url) => {
      const request = new XMLHttpRequest()
      request.open('GET', url, true)
      request.responseType = 'arraybuffer'

      // Decode asynchronously
      request.onload = function() {
        alert('response', audioCtx.decodeAudioData)
        audioCtx.decodeAudioData(request.response, (buffer) => {
          alert('buffer' + buffer)
          playSound(buffer)
        }, (e) => {
          alert('error')
          alert('error decoding' + e)
        })
      }
      request.onerror = () => {
        alert("error loading file")
      }

      request.send();
    }

    loadSound('/android_asset/www/techno.wav')
    //loadSound('http://freewavesamples.com/files/Korg-DW-8000-Noise-Snare.wav')
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
    var test = ${inject}
    test(window, null);
`

export default wrappedInject