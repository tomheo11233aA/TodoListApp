import React from 'react'
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserScreen from '../screen/UserScreen';
import HomeScreen from '../screen/HomeScreen';
import { Icon, IconElement, BottomNavigationProps } from '@ui-kitten/components';

const { Navigator, Screen } = createBottomTabNavigator();

const PersonIcon = (props: any): IconElement => (
    <Icon
        {...props}
        name='person-outline'
    />
);

const HomeIcon = (props: any): IconElement => (
    <Icon
        {...props}
        name='home-outline'
    />
);

const BottomTabBar = ({ navigation, state }: any) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab icon={HomeIcon} />
        <BottomNavigationTab icon={PersonIcon} />
    </BottomNavigation>
);

const BottomNavigator = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }} tabBar={props => <BottomTabBar {...props} />}>
            <Screen name='Home' component={HomeScreen} />
            <Screen name='User' component={UserScreen} />
        </Navigator>
    )
}

export default BottomNavigator

