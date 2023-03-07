import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as btc from 'micro-btc-signer';
import { hex } from '@scure/base';

export default function App() {
  const PubKey = hex.decode('0101010101010101010101010101010101010101010101010101010101010101');
  console.log(btc.p2tr(PubKey).address);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
