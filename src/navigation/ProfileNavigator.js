import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../screens/profile/ProfileScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';

const Stack = createStackNavigator();

class ProfileNavigator extends Component {
    render() {
        return (

            <Stack.Navigator initialRouteName="Profile">

                <Stack.Screen name="Profile" component={ProfileScreen}
                    options={({ navigation, route }) => ({
                        headerShown: false
                    })}
                />
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>

        )
    }
}

export default ProfileNavigator

