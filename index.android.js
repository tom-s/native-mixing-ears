import Reactotron from 'reactotron'
import Root from './src/containers/Root'
import { AppRegistry } from 'react-native'

// Reactotron
Reactotron.connect()

Reactotron.log('start')

// Init app
AppRegistry.registerComponent('nativeMixing', () => Root)
