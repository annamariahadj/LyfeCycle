import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Large Top Circle */}
      <View style={styles.topCircle}>
        <Image
          source={require('../assets/cover.jpg')} // Ensure the path is correct
          style={styles.coverImage}
          resizeMode="cover"
        />
      </View>

      {/* Small Circle with Icon */}
      <View style={styles.smallCircle}>
        <Text style={styles.icon}>🌼</Text> {/* Replace with your fertility icon */}
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        <Text style={styles.title}>Fertility Tracking Ring</Text>
        <Text style={styles.subtitle}>
          Sync your ring and track your reproductive health!
        </Text>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Let’s start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6E4B8E', // Purple background
    justifyContent: 'space-between',
  },
  topCircle: {
    width: '200%',
    height: 500,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
    position: 'absolute',
    top: 60, // Adjust to place it slightly higher
    zIndex: 1,
    overflow: 'hidden', // Ensures the image stays within the circle
  },
  coverImage: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
  },
  smallCircle: {
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    position: 'absolute',
    top: 540, // Position inside the purple area
    left: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  icon: {
    fontSize: 30,
    color: '#6E4B8E', // Fertility icon color
  },
  content: {
    flex: 1,
    marginTop: 600,
    alignItems: 'center',
    paddingHorizontal: 20,
    zIndex: 3,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'left',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 17,
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingTop: 20,
    lineHeight: 20,
  },
  bottomSection: {
    alignItems: 'center',
    paddingBottom: 50,
    backgroundColor: '#6E4B8E', // Matches the background
    zIndex: 3,
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    color: '#6E4B8E',
    fontSize: 16,
    fontWeight: '600',
  },
});
