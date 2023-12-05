import React from 'react';
import { Layout, Text, Button, Input, Card, Modal } from '@ui-kitten/components';
import { StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppNavigationProp } from '../navigation/AppNavigator';

const WelcomeScreen = () => {
    const navigation = useNavigation<AppNavigationProp>();

    const handleGotoRegister = () => {
        navigation.navigate('Register')
    }

    return (
        <Layout style={styles.layout}>
            <Image style={styles.shapeImage} source={require('../assets/shape.png')} />
            <Image style={styles.logoImage} source={require('../assets/logo.png')} />
            <Text category='h4' style={styles.welcomeText}>Get things done with Todo</Text>
            <Text category='s1' style={styles.descriptionText}>
                Welcome to Todo, your personal task management tool. Organize your tasks, set priorities, and track your progress. Get started now and make your life more productive and organized.
            </Text>
            <Button style={styles.getStartedButton} onPress={handleGotoRegister}>Get Started</Button>
        </Layout>
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
    logoImage: {
        alignSelf: 'center',
        justifyContent: 'center',
        top: 100,
    },
    welcomeText: {
        textAlign: 'center',
        marginTop: 180,
    },
    descriptionText: {
        textAlign: 'justify',
        marginTop: 10,
        marginHorizontal: 25,
    },
    getStartedButton: {
        marginTop: 20,
        marginHorizontal: 20,
        backgroundColor: '#50C2C9',
    },
});

export default WelcomeScreen;