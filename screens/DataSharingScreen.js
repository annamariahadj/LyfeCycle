import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function DataSharingScreen() {
  const [isDataSharingEnabled, setIsDataSharingEnabled] = useState(false);

  const toggleSwitch = () => setIsDataSharingEnabled((prev) => !prev);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Data Sharing Preferences</Text>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Enable Data Sharing</Text>
        <Switch
          onValueChange={toggleSwitch}
          value={isDataSharingEnabled}
          trackColor={{ false: '#767577', true: '#79C1FF' }}
          thumbColor={isDataSharingEnabled ? '#9370DB' : '#f4f3f4'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F6F8FE',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E4E9C',
    marginBottom: 20,
    textAlign: 'center',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#E8F0FF',
    borderRadius: 10,
    marginVertical: 5,
  },
  settingText: {
    fontSize: 16,
    color: '#333',
  },
});
