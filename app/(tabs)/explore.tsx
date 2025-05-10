import { Platform, View } from 'react-native';
import { useEffect, useState } from 'react';
// import { ENDPOINT } from '@env';

let WebView: any = null;

if (Platform.OS !== 'web') {
  WebView = require('react-native-webview').WebView;
}

export default function TabTwoScreen() {
  if (Platform.OS === 'web') {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <iframe
          src={'http://127.0.0.1:5000/'}
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="Shopping Site"
        />
      </div>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'http://127.0.0.1:5000/' }}
        style={{ flex: 1 }}
        originWhitelist={['*']}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
      />
    </View>
  );
}
