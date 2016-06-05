const inject =  (window) => {
  let audioCtx, oscillator

  // create web audio api context
   audioCtx = new (window.AudioContext || window.webkitAudioContext)()
   let played = false
  const play = () => {
    if (!played) {
  if (oscillator) pause()
     // create Oscillator node
    oscillator = audioCtx.createOscillator()
    oscillator.type = 'square'
    oscillator.frequency.value = 3000 // value in hertz
    oscillator.connect(audioCtx.destination)
    oscillator.start()
    }
    played = true

  }

  const pause = () => {
    alert('pause !')
    console.was('oscillator pause', oscillator)
    oscillator.stop(0)
  }


  window.CrosswalkWebViewBridge.onMessage = (msg) => {
    console.log("received msg", msg)
    if (msg === 'PAUSE') {
      pause()
    }
    if (msg === 'PLAY') {
      play()
    }
  }

}

export default inject