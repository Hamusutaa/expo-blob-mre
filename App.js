import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';

export default function App() {
  useEffect(() => {
    try {
      const file = new File([new Blob(['a'])], 'fileName.txt');

      const formData = new FormData();
      formData.append('file', file);
    } catch (e) {
      console.log(`error: ${e}`);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto"/>
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
