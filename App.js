import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Expo Test</Text>
      <Text style={styles.subTitle}>Subtitle</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subTitle: {
    color: '#000',
    marginTop: '4%',
    fontSize: 12
  }
});
