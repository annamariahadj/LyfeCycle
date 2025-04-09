import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import MainTabNavigator from './navigation/MainTabNavigator';
import WelcomeScreen from './screens/WelcomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import ShareYourSymptomsScreen from './screens/ShareYourSymptomsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name='Welcome' component={WelcomeScreen}/>
      <Stack.Screen options={{headerShown: false}} name='Login' component={LoginScreen} />
      <Stack.Screen options={{headerShown: false}} name='SignUp' component={SignUpScreen} />
      <Stack.Screen options={{headerShown: false}} name='Home' component={HomeScreen} />
      <Stack.Screen name='Main' component={MainTabNavigator} options={{headerShown: false}} />
      <Stack.Screen name="ShareYourSymptoms" component={ShareYourSymptomsScreen} />

      </Stack.Navigator>

        
       
    </NavigationContainer>
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
