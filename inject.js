
import Base64Binary from './utils/base64Binary'
import drums from './assets/drums'


const inject = (window, Base64Binary, drums) => {
  alert('ehe')
  /*
  let audioCtx

  // create web audio api context
  audioCtx = new (window.AudioContext || window.webkitAudioContext)()

  const play = (payload) => {
    let myBuffer
    const { sound } = payload
    //alert(sound)
    const soundData = drums
    //alert(soundData)
    const buff = Base64Binary.decodeArrayBuffer(soundData)
    //alert(buff)
    audioCtx.decodeAudioData(buff, function(audioData) {
      myBuffer = audioData
    })

    mySource = audioCtx.createBufferSource()
    mySource.buffer = myBuffer
    mySource.connect(audioCtx.destination)
    mySource.start(0)
  }

  const pause = (payload) => {
    alert('pause !')
    console.was('oscillator pause', oscillator)
    oscillator.stop(0)
  }*/



  window.CrosswalkWebViewBridge.onMessage = (msg) => {

    /*
    try {
      const { action, payload } = JSON.parse(msg)
      //alert('action' + action)

      if (action === 'PAUSE') {
        pause(payload)
      }
      if (action === 'PLAY') {
        play(payload)
      }
    } catch (e) {
      //alert("error parsing")
    }
    */

  }
}

 // add dependancies
const wrappedInject = `
    alert("youpi");

    var test = ${inject}
    var drums = '${drums}'
    var b64 = {
      _keyStr : ${Base64Binary._keyStr}
	    decodeArrayBuffer: ${Base64Binary.decodeArrayBuffer}
			decode: ${Base64Binary.decode}
    };
    /*
    test(window, b64, drums);*/
`

export default wrappedInject