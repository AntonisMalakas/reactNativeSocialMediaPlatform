import React, { Component } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/login/LoginScreen';
import RegisterScreen from '../screens/register/RegisterScreen';

import HomeNavigator from '../navigation/HomeNavigator';

import { ChatRoomScreen } from '../screens/chatRoom/ChatRoomScreen';

const Stack = createStackNavigator();


class AppNavigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">

                    <Stack.Screen name="Login" component={LoginScreen}
                        options={({ navigation, route }) => ({
                            headerShown: false
                        })}
                    />
                    <Stack.Screen name="Register" component={RegisterScreen}
                        options={({ navigation, route }) => ({
                            headerShown: false
                        })} />

                    <Stack.Screen name="HomeNavigator" component={HomeNavigator}
                        options={({ navigation, route }) => ({
                            headerShown: false
                        })}
                    />

                    <Stack.Screen name="ChatRoom" component={ChatRoomScreen}
                    // options={({ navigation, route }) => ({
                    //     headerShown: false
                    // })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default AppNavigator

