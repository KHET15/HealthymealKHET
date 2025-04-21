import React from 'react';
import { View, StatusBar, StyleSheet, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import LoginForm from './components/LoginForm';
import BackgroundDecor from './components/BackgroundDecor';

const { width } = Dimensions.get('window');

const LoginScreen = () => {
  let [fontsLoaded] = useFonts({
    'MM-Bold': require('./assets/fonts/MuseoModerno-Bold.ttf'),
    'MM-Medium': require('./assets/fonts/MuseoModerno-Medium.ttf'),
    'MM-Regular': require('./assets/fonts/MuseoModerno-Regular.ttf'),
    'MM-SemiBold': require('./assets/fonts/MuseoModerno-SemiBold.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <BackgroundDecor />
      <LoginForm/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9ED',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width * 0.05,
  },
});

export default LoginScreen;
