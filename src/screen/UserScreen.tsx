import React, { useState } from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import { Layout, Text, Button, Icon, Modal, Card } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import InputProfile from '../components/InputProfile';
import { AppNavigationProp } from '../navigation/AppNavigator';

const UserScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const [email, setEmail] = useState('phucnamvan@gmail.com');
  const [username, setUsername] = useState('Văn Nam Phúc');
  const [phone, setPhone] = useState('0867039122');
  const [address, setAddress] = useState('Quận 12, Tp.HCM');
  const [confirmVisible, setConfirmVisible] = useState(false);

  const handleLogout = () => {
    setConfirmVisible(true);
  }

  const confirmLogout = () => {
    setConfirmVisible(false);
    navigation.navigate('Welcome');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Layout style={styles.container}>
        <Layout style={styles.header}>
          <Image style={styles.image} source={require('../assets/shape.png')} />
          <Image style={styles.user} source={require('../assets/user.jpg')} />
          <Text style={styles.welcomeText} category='h4'>Welcome {username}</Text>
        </Layout>

        <InputProfile
          onInputChange={setEmail}
          icon={(props) => <Icon {...props} name='email-outline' />}
          placeholder='Your email'
          defaultValue={email}
        />
        <InputProfile
          onInputChange={setUsername}
          icon={(props) => <Icon {...props} name='person-outline' />}
          placeholder='Your username'
          defaultValue={username}
        />
        <InputProfile
          onInputChange={setPhone}
          icon={(props) => <Icon {...props} name='phone-outline' />}
          placeholder='Your phone'
          defaultValue={phone}
        />
        <InputProfile
          onInputChange={setAddress}
          icon={(props) => <Icon {...props} name='pin-outline' />}
          placeholder='Your address'
          defaultValue={address}
        />
        <Button style={styles.button} onPress={handleLogout}>Logout</Button>

        <Modal
          visible={confirmVisible}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => setConfirmVisible(false)}>
          <Card disabled={true} style={styles.card}>
            <Text style={styles.confirmText} category='h6'>Are you sure you want to logout?</Text>
            <Layout style={styles.confirmButtons}>
              <Button status='success' onPress={confirmLogout}>Yes</Button>
              <Button status='basic' onPress={() => setConfirmVisible(false)}>No</Button>
            </Layout>
          </Card>
        </Modal>
      </Layout>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE'
  },
  header: {
    backgroundColor: '#0DAB98',
    justifyContent: 'space-around',
  },
  image: {
    top: 0,
    left: 0
  },
  user: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15
  },
  welcomeText: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 10,
    marginTop: 10
  },
  button: {
    marginTop: 20,
    width: '90%',
    borderRadius: 150,
    marginBottom: 10,
    backgroundColor: '#0DAB98',
    alignSelf: 'center',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  card: {
    width: 330
  },
  confirmText: {
    textAlign: 'justify'
  },
  warningText: {
    textAlign: 'justify'
  },
  confirmButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50
  }
});

export default UserScreen;