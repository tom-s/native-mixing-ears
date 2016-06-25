//import Reactotron from 'reactotron'
import Root from './src/containers/Root'
import { AppRegistry } from 'react-native'

// Reactotron
//Reactotron.connect({enabled: __DEV__})

// Init app
AppRegistry.registerComponent('3dears', () => Root)
