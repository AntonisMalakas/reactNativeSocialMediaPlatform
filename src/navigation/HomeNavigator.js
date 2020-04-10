import React, { Component } from 'react'
import { Button } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/home/HomeScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';


const Tab = createBottomTabNavigator();


class HomeNavigator extends Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        )
    }
}

export default HomeNavigator

