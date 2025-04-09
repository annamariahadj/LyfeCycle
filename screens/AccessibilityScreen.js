import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AccessibilityScreen() {
  const [fontSize, setFontSize] = useState(16);

  const increaseTextSize = () => setFontSize((prev) => prev + 2);
  const decreaseTextSize = () => setFontSize((prev) => (prev > 14 ? prev - 2 : 14));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accessibility Settings</Text>
      <Text style={[styles.text, { fontSize }]}>Sample Text Size</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increase Text Size" onPress={increaseTextSize} />
        <Button title="Decrease Text Size" onPress={decreaseTextSize} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#F6F8FE',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E4E9C',
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
