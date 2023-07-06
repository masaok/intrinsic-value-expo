import React, { useState } from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'
import * as WebBrowser from 'expo-web-browser'

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
})

let URL = ''
// URL = 'https://intrinsic-value-web.vercel.app/examples/realm'
URL = 'https://hangry-web.vercel.app/examples/firebase'

export const ExpoWebBrowserUsage = () => {
  const [result, setResult] = useState(null)

  const _handlePressButtonAsync = async () => {
    // Web Browser Open Async
    // https://docs.expo.dev/versions/latest/sdk/webbrowser/#webbrowseropenbrowserasyncurl-browserparams
    let result = await WebBrowser.openBrowserAsync(URL, {
      presentationStyle: WebBrowser.WebBrowserPresentationStyle.FULL_SCREEN,
    })
    setResult(result)
  }
  return (
    <View style={styles.container}>
      <Button title="Open WebBrowser" onPress={_handlePressButtonAsync} />
      <Text>{result && JSON.stringify(result)}</Text>
    </View>
  )
}
