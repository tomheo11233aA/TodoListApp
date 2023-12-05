import React, { useState } from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import { Layout, Text, Button, Icon, Modal, Card } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import InputProfile from '../components/InputProfile';
import { AppNavigationProp } from '../navigation/AppNavigator';

const RegisterScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>('');

  const handleCheck = () => {
    if (!fullName || !email || !password || !confirmPassword) {
      setModalText('Please fill all fields');
      setModalVisible(true);
    } else if (password !== confirmPassword) {
      setModalText('Password does not match');
      setModalVisible(true);
    } else {
      navigation.navigate('Login')
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Layout style={styles.layout}>
        <Image style={styles.shapeImage} source={require('../assets/shape.png')} />
        <Text category='h4' style={styles.welcomeText}>Welcome Onboard!</Text>
        <Text category='s1' style={styles.descriptionText}>Let`s help you meet your tasks</Text>
        <Layout style={styles.inputLayout}>
          <InputProfile
            onInputChange={setFullName}
            icon={(props) => <Icon {...props} name='person-outline' />}
            placeholder='Enter your full name'
          />
          <InputProfile
            onInputChange={setEmail}
            icon={(props) => <Icon {...props} name='email-outline' />}
            placeholder='Enter your email'
          />
          <InputProfile
            onInputChange={setPassword}
            icon={(props) => <Icon {...props} name='lock-outline' />}
            placeholder='Enter your password'
            isSecure={true}
          />
          <InputProfile
            onInputChange={setConfirmPassword}
            icon={(props) => <Icon {...props} name='lock-outline' />}
            placeholder='Confirm your password'
            isSecure={true}
          />
        </Layout>
        <Button style={styles.registerButton} onPress={handleCheck}>Register</Button>
        <Text style={styles.signInText}>Alredy have an account?
          <Text category='p1' style={styles.signInLink} onPress={() => navigation.navigate('Login')}> Sign In</Text>
        </Text>
        <Modal
          style={styles.modalContainer}
          visible={modalVisible}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => setModalVisible(false)}>
          <Card status='warning' disabled={true}>
            <Text>{modalText}</Text>
          </Card>
        </Modal>
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
  descriptionText: {
    textAlign: 'center',
    marginTop: 10,
    marginHorizontal: 50,
  },
  inputLayout: {
    marginTop: 33,
    backgroundColor: '#EEE',
  },
  registerButton: {
    margin: 20,
    marginBottom: 13,
    backgroundColor: '#50C2C9',
  },
  signInText: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  signInLink: {
    color: '#50C2C9',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    alignSelf: 'center',
    width: 300,
  },
});

export default RegisterScreen;