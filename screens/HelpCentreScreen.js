import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HelpCentreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help Centre</Text>
      <Text style={styles.text}>If you need assistance, you can reach us at:</Text>
      <Text style={styles.text}>Email: support@example.com</Text>
      <Text style={styles.text}>Phone: +123 456 7890</Text>
      <Text style={styles.text}>For FAQs, visit our website.</Text>
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
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 5,
    color: '#333',
  },
});
