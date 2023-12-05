import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screen/LoginScreen'
import RegisterScreen from '../screen/RegisterScreen'
import HomeScreen from '../screen/HomeScreen'
import UserScreen from '../screen/UserScreen'
import WelcomeScreen from '../screen/WelcomeScreen'
import { StackNavigationProp } from '@react-navigation/stack'
import BottomNavigator from './BottomNavigator'


type AppStackParamList = {
  Welcome: undefined
  Login: undefined
  Register: undefined
  Home: undefined
  User: undefined
  Main: undefined
}

export type AppNavigationProp = StackNavigationProp<AppStackParamList>

// const [initialRouteName, initialRouteParams] = ['Login', 'Home']
// const [isCheckLogin, setCheckIsLogin] = React.useState<boolean>(false);
// const [isCheckRegister, setCheckIsRegister] = React.useState<boolean>(false);

const Stack = createStackNavigator<AppStackParamList>()
const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Main" component={BottomNavigator} />
    </Stack.Navigator>
  )
}

export default AppNavigator
