import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ThemeScreen() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => setIsDarkTheme((prev) => !prev);

  return (
    <View style={[styles.container, { backgroundColor: isDarkTheme ? '#333' : '#F6F8FE' }]}>
      <Text style={[styles.title, { color: isDarkTheme ? '#fff' : '#1E4E9C' }]}>
        Theme Selection
      </Text>
      <Text style={[styles.text, { color: isDarkTheme ? '#fff' : '#333' }]}>
        Current Theme: {isDarkTheme ? 'Dark' : 'Light'}
      </Text>
      <Button
        title={`Switch to ${isDarkTheme ? 'Light' : 'Dark'} Theme`}
        onPress={toggleTheme}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});
