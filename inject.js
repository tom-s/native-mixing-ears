const inject =  (window) => {
  window.CrosswalkWebViewBridge.onMessage = (msg) => {
    alert("received message" + msg)
  }
}

export default inject