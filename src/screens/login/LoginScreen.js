import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StatusBar, ToastAndroid } from 'react-native'
import { Thumbnail } from 'native-base'
import { auth } from "../../config/Config"

import styles from './LoginScreenStyle';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.state = {
            email: '',
            password: '',
            latitude: null,
            longitude: null,
            errorMessage: null,
            visible: false,
            Onprosess: false,
        };
    }

    componentDidMount() {
        this._isMounted = true;
    };

    componentWillUnmount() {
        this._isMounted = false;
    };

    hideToast = () => {
        this.setState({
            visible: false,
        });
    };

    handleLogin = () => {
        const { email, password } = this.state;
        if (email.length < 6) {
            ToastAndroid.show(
                'Please input a valid email address',
                ToastAndroid.LONG,
            );
        } else if (password.length < 6) {
            ToastAndroid.show(
                'Password must be at least 6 characters',
                ToastAndroid.LONG,
            );
        } else {
            // Action
            auth.signInWithEmailAndPassword(email, password)
                .then(async data => {
                    // console.log('displayName: ', data.user.displayName)
                    this.props.navigation.navigate("HomeNavigator")
                })
                .catch(error => {
                    // console.log(error.message);
                    ToastAndroid.show(
                        error.message,
                        ToastAndroid.LONG,
                    );
                });
        }
    };

    render() {

        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF"></StatusBar>
                <Text style={{ marginTop: 20, fontSize: 24, fontWeight: 'bold', textAlign: 'center', color: "#4D4957", }}>Hello!</Text>
                <Text style={{ marginTop: 4, textAlign: 'center', color: '#9F9DA3' }}>Log in to your account</Text>
                <Thumbnail large source={require('../../assets/img/Firebase.png')} style={styles.logo} />
                <View style={styles.errorMessage}>
                    {this.state.errorMessage && (
                        <Text style={styles.error}>{this.state.errorMessage}</Text>
                    )}
                </View>

                <View style={styles.form}>
                    <View>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            placeholder="Email"
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}>
                        </TextInput>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            autoCapitalize="none"
                            placeholder="Password"
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}></TextInput>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                        <Text style={{ color: "#ffffff", fontWeight: 'bold' }}>
                            SIGN IN
                    </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={{ alignSelf: 'center', marginTop: 32 }}
                    onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={{ color: '#414959', fontSize: 13 }}>
                        Don't have an account?{' '}
                        <Text style={{ fontWeight: 'bold', color: "#039be5" }}>
                            Sign up
                    </Text>
                    </Text>
                </TouchableOpacity>
            </View >
        )
    }
}
