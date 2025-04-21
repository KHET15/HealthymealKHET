import React from 'react';
import { View, StyleSheet, Image, Dimensions , Text} from 'react-native';


const { width, height } = Dimensions.get('window');

const BackgroundDecor = () => (
  <>
  <Text style={styles.title}>Healthy meal</Text>
  <Text style={styles.subtitle}>Sign Up</Text>
    <View style={styles.topCircle} />
    <Image source={require('../assets/logo/logo1.png')} style={styles.logo1} />  
  </>
);

const styles = StyleSheet.create({
  topCircle: {
    position: 'absolute',
    top: height * 0.09,
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: width * 0.25,
    backgroundColor: '#FFC757',
  },
  logo1: {
    position: 'absolute',
    top: height * 0.07,
    left: width * 0.19,
    width: width * 0.6,
    height: width * 0.6,
    resizeMode: 'contain',
  },
  title: {
    position: 'absolute',
    fontSize: width * 0.08,
    top: height * 0.35,
    fontFamily: 'MM-Bold',
    marginBottom: 5,
    color: 'black',
  },
  subtitle: {
    position: 'absolute',
    fontSize: width * 0.06,
    top: height * 0.41,
    fontFamily: 'MM-Medium',
    marginBottom: 30,
    color: 'black',
  },
});

export default BackgroundDecor;
