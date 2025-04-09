import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';  

// Fertility App Screens
import HomeScreen from '../screens/HomeScreen'; // Should include ovulation tracking
import CycleHistoryScreen from '../screens/CycleHistoryScreen';
import SettingsScreen from '../screens/SettingsScreen';

// Settings Stack Screens
import ThemeScreen from '../screens/ThemeScreen';
import AccessibilityScreen from '../screens/AccessibilityScreen';
import DataSharingScreen from '../screens/DataSharingScreen';
import HelpCentreScreen from '../screens/HelpCentreScreen';
import ProfileInformationScreen from '../screens/ProfileScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';

const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();

function SettingsStackNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="SettingsHome" component={SettingsScreen} options={{ headerShown: false }} />
      <SettingsStack.Screen name="Profile" component={ProfileInformationScreen} />
      <SettingsStack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <SettingsStack.Screen name="Theme" component={ThemeScreen} options={{ title: 'Theme' }} />
      <SettingsStack.Screen name="Accessibility" component={AccessibilityScreen} options={{ title: 'Accessibility' }} />
      <SettingsStack.Screen name="DataSharing" component={DataSharingScreen} options={{ title: 'Data Sharing Preferences' }} />
      <SettingsStack.Screen name="HelpCentre" component={HelpCentreScreen} options={{ title: 'Help Centre' }} />
    </SettingsStack.Navigator>
  );
}

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'History') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1E4E9C',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#F6F8FE',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="History" component={CycleHistoryScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={SettingsStackNavigator} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
