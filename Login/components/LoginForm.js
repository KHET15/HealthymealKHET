import React, { useState } from 'react';
import {View,Image,Text,TextInput,TouchableOpacity,StyleSheet,Dimensions,ScrollView,TouchableWithoutFeedback,Keyboard,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const Login = () => {
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    setError('');
  };
  return (
    
      <ScrollView>
        <View style={{ width: '100%', alignItems: 'center' }}>
          {/*-------------------------------------------------------------------------------------*/}
          <TextInput
            style={styles.input}
            placeholder="Email / Username"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          {/* Forget Password */}
          <TouchableOpacity onPress={() => console.log('Forgot Password')}>
            <Text style={styles.Foget_password}>Forgot Password?</Text>
          </TouchableOpacity>
           {/*---------------------- ERROR ------------------------*/}
           {error ? <Text style={styles.errorText}>{error}</Text> : null}
          {/*-------------------------------------------------------------------------------------*/}
          <TouchableOpacity style={styles.LoginButton} onPress={Login}>
            <Text style={styles.Login}>Login</Text>
          </TouchableOpacity>
          {/*-------------------------------------------------------------------------------------*/}
          <Text style={styles.or}>or login with</Text>
          <View style={styles.socialContainer}>
              <Image source={require('../assets/logo/image Tiktok.png')} style={styles.logo2} />  
              <Image source={require('../assets/logo/image facebook.png')} style={styles.logo2} />  
              <Image source={require('../assets/logo/image google.png')} style={styles.logo2} /> 
              <Image source={require('../assets/logo/image apple.png')} style={styles.logo2} /> 
            </View>
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: width * 0.7,
    height: 50,
    top: height * 0.47,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  Login: {
    fontSize: width * 0.04,
    fontFamily: 'MM-Medium',
    color: 'black',
  },
  LoginButton: {
    top: height * 0.467,
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: width * 0.25,
    borderRadius: 15,
  },
  
  Foget_password: {
    top: height * 0.458,
    color: '#616161',
    marginBottom: 10,
    marginLeft: 180,
    fontFamily: 'MM-Regular',
    textDecorationLine: 'underline',
    fontSize: 10,
  },
  errorText: {
    top:  height * 0.48, 
    color: 'red',
    margintop: 10,
    fontFamily: 'MM-Regular',
  },
  or: 
  {
  position: 'absolute',
  fontSize: width * 0.04,
  top: height * 0.77,
  fontFamily: 'MM-Medium',
  marginBottom: 30,
  color: 'black',
  },
  socialContainer: {
    position: 'absolute',
    top: height * 0.82, 
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
  },
  logo2: {
    width: width * 0.08,
    height: width * 0.08,
    resizeMode: 'contain',
  },
  
});

export default LoginForm;
