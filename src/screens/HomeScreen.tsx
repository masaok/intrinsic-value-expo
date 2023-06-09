import { StyleSheet, StatusBar, View, Platform } from 'react-native'

import { WebView } from 'react-native-webview'

// https://docs.expo.dev/versions/latest/sdk/safe-area-context/
import { useSafeAreaInsets } from 'react-native-safe-area-context'

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

// const PROD_URL = 'https://coding-flashcards-web.vercel.app'
// const DEV_URL = 'https://localhost:3000' // iOS Simulator and Android Emulator only
// const DEV_URL = 'https://google.com' // Google Test

// const IP_HTTP_URL = 'http://10.0.1.77:3000' // Local IP so Expo works on phone
// const DEV_URL = 'https://10.0.1.10:3000' // Local IP so Expo works on phone

// const LOCAL_URL = 'http://localhost:3000' // iOS Simulator and Android Emulator only

// const URL = DEV_URL

let URL = ''
// URL = 'https://intrinsic-value-web.vercel.app/examples/email'
URL = 'https://intrinsic-value-web.vercel.app/examples/realm'
// URL = 'https://react-oauth.vercel.app/'
URL = 'https://hangry-web.vercel.app/examples/firebase'

// const URL = __DEV__ ? DEV_IP_URL : PROD_URL
// const URL = PROD_URL

const HomeScreen = () => {
  const insets = useSafeAreaInsets()

  return (
    // SafeAreaView flex: 1 required
    // https://stackoverflow.com/a/58589659
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? insets.top : 5,
        paddingBottom: insets.bottom,
      }}
    >
      <WebView
        style={styles.webview}
        source={{ uri: URL }}
        // This override will get you to the Google user name form, but the next page is still blocked
        userAgent="Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36"
      />
    </View>
  )
}

export default HomeScreen
