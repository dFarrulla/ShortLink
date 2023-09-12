import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Panagrama } from './src/view/Panagrama';

export default function App() {
  return (
    <View style={styles.container}>
      <Panagrama />
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
