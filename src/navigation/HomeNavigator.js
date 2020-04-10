import React, { Component } from 'react'
import { Button } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/home/HomeScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';

import { Ionicons } from 'react-native-vector-icons/Ionicons';

import { TabBarComponent } from '../components/TabBarComponent';

const Tab = createBottomTabNavigator();


class HomeNavigator extends Component {
    render() {
        return ( 
            <Tab.Navigator tabBar={props => <TabBarComponent {...props} />}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        )
    }
}

export default HomeNavigator

