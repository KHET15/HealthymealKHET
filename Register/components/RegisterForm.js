import React, { useState } from 'react';
import { View , Text , TextInput , TouchableOpacity , StyleSheet , Dimensions , ScrollView ,TouchableWithoutFeedback , Keyboard , } from 'react-native';

const { width, height } = Dimensions.get('window');

const RegisterForm= () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const Register = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    // ดำเนินการสมัครสมาชิกต่อไป
  };

  return (
    <ScrollView >
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
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
{/*-------------------------------------------------------------------------------------*/}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity style={styles.registerButton} onPress={Register} >
        <Text style={styles.Sign_Up}>Sign Up</Text>
      </TouchableOpacity>
     </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: width * 0.7,
    height: 50,
    top: height * 0.5,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
   //shadowColor: '#000',
   //shadowOffset: { width: 0, height: 2 },
   //shadowOpacity: 0.1,
   //shadowRadius: 3,
   // elevation: 5,
  },
  registerButton: {
    top: height * 0.54,
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: width * 0.2,
    borderRadius: 25,
    //shadowColor: '#000',
    //shadowOffset: { width: 0, height: 2 },
    //shadowOpacity: 0.2,
    //shadowRadius: 3,
    //elevation: 5,
  },
  Sign_Up: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: 'black',
  },
  errorText: {
    top: height * 0.08,
    color: 'red',
    marginBottom: 10,
    fontFamily: 'MM-Regular',
  },
});

export default RegisterForm;
