import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../store/firebase';
import * as Notifications from 'expo-notifications';

export default function SettingsScreen({ navigation }) {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);

  useEffect(() => {
    async function fetchNotificationSettings() {
      const settings = await Notifications.getPermissionsAsync();
      setIsNotificationsEnabled(
        settings.granted || settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
      );
    }
    fetchNotificationSettings();
  }, []);

  const toggleSwitch = async () => {
    if (isNotificationsEnabled) {
      await Notifications.setNotificationChannelAsync('default', { enabled: false });
    } else {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status === 'granted') {
        setIsNotificationsEnabled(true);
      }
    }
    setIsNotificationsEnabled((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.navigate('Login');
    } catch (error) {
      alert('Logout failed: ' + error.message);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Settings</Text>

          {/* Account Settings */}
          <Text style={styles.sectionTitle}>Account Settings</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.buttonText}>Profile Information</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChangePassword')}>
            <Text style={styles.buttonText}>Change Password</Text>
          </TouchableOpacity>

          {/* Notifications */}
          <Text style={styles.sectionTitle}>Notification Settings</Text>
          <View style={styles.settingItem}>
            <Text style={styles.settingText}>Enable Notifications</Text>
            <Switch
              onValueChange={toggleSwitch}
              value={isNotificationsEnabled}
              trackColor={{ false: '#767577', true: '#79C1FF' }}
              thumbColor={isNotificationsEnabled ? '#9370DB' : '#f4f3f4'}
            />
          </View>

          {/* Privacy */}
          <Text style={styles.sectionTitle}>Privacy Settings</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DataSharing')}>
            <Text style={styles.buttonText}>Data Sharing</Text>
          </TouchableOpacity>

          {/* App Preferences */}
          <Text style={styles.sectionTitle}>App Preferences</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Theme')}>
            <Text style={styles.buttonText}>Theme</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Accessibility')}>
            <Text style={styles.buttonText}>Accessibility</Text>
          </TouchableOpacity>

          {/* Support */}
          <Text style={styles.sectionTitle}>Support and Feedback</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HelpCentre')}>
            <Text style={styles.buttonText}>Help Centre</Text>
          </TouchableOpacity>

          {/* Logout */}
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F6F8FE',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E4E9C',
    marginBottom: 30,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E4E9C',
    marginBottom: 15,
    marginTop: 15,
  },
  button: {
    backgroundColor: '#E8F0FF',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
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
  logoutButton: {
    backgroundColor: '#9370DB',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  logoutButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
