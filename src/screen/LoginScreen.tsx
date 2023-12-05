import React, { useState } from 'react';
import { Layout, Text, Button, Input, Icon } from '@ui-kitten/components';
import { StyleSheet, Image, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import InputProfile from '../components/InputProfile';
import { AppNavigationProp } from '../navigation/AppNavigator';

const LoginScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleCheck = () => {
    if (email === '' || password === '') {
      Alert.alert('Please fill all fields')
    } else {
      console.log('success')
      navigation.navigate('Main')
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Layout style={styles.layout}>
        <Image style={styles.shapeImage} source={require('../assets/shape.png')} />
        <Text category='h4' style={styles.welcomeText}>Welcome Back</Text>
        <Image style={styles.logoImage} source={require('../assets/login_logo.png')} />
        <Layout style={styles.inputLayout}>
          <InputProfile
            onInputChange={setEmail}
            icon={(props) => <Icon {...props} name='email-outline' />}
            placeholder='Enter your email'
          />
          <InputProfile
            onInputChange={setPassword}
            icon={(props) => <Icon {...props} name='lock-outline' />}
            placeholder='Enter password'
            isSecure={true}
          />
        </Layout>
        <Button onPress={handleCheck} style={styles.loginButton}>Login</Button>
        <Text style={styles.registerText}>Don't have an account?
          <Text style={styles.registerLink} onPress={() => navigation.navigate('Register')}> Sign Up</Text>
        </Text>
      </Layout>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#EEE',
  },
  shapeImage: {
    top: 0,
    left: 0,
  },
  welcomeText: {
    textAlign: 'center',
    marginTop: 50,
  },
  logoImage: {
    alignSelf: 'center',
    justifyContent: 'center',
    top: 50,
  },
  inputLayout: {
    backgroundColor: "#EEE",
    marginTop: 70,
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginBottom: 15,
    color: '#50C2C9',
    marginTop: 10,
  },
  loginButton: {
    margin: 20,
    backgroundColor: '#50C2C9',
  },
  registerText: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  registerLink: {
    color: '#50C2C9',
  },
});

export default LoginScreen;