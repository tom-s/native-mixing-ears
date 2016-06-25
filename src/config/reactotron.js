import Reactotron from 'reactotron' // in a real app, you would use 'reactotron'
import {Platform} from 'react-native'

Reactotron.connect({
  enabled: true,
  name: 'nativeMixing',
  userAgent: Platform.OS,
  server: '192.168.0.12'
})
