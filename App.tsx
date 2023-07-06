import { StyleSheet, StatusBar } from 'react-native'

// https://docs.expo.dev/versions/latest/sdk/safe-area-context/
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context'

import HomeScreen from './src/screens/HomeScreen'
import { ExpoWebBrowserUsage } from './src/examples/browsers/ExpoWebBrowserUsage'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  webview: {
    paddingTop: StatusBar.currentHeight,
    marginTop: StatusBar.currentHeight,
  },
})

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <HomeScreen />
      {/* <ExpoWebBrowserUsage /> */}
    </SafeAreaProvider>
  )
}

export default App
