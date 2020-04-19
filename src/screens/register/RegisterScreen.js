import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    StatusBar,
    LayoutAnimation,
    ScrollView,
    KeyboardAvoidingView,
    ToastAndroid,
} from 'react-native';
import { Thumbnail } from 'native-base'

import auth from '@react-native-firebase/auth';

import styles from './RegisterScreenStyle';

export default class RegisterScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isVisible: false,
            name: '',
            email: '',
            password: '',
            uid: '',
            latitude: null,
            longitude: null,
            errorMessage: null,
            loading: false,
            updatesEnabled: false,
        }
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

    handleSignUp = async () => {
        const { email, name, password } = this.state;
        if (name.length < 1) {
            ToastAndroid.show('Please input your fullname', ToastAndroid.LONG);
        } else if (email.length < 6) {
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
            await auth()
                .createUserWithEmailAndPassword(email, password)
                .then((userData) => {
                    userData.user.updateProfile({
                        displayName: name
                    }).then(() => {
                        // console.log('User account created & signed in!');
                        ToastAndroid.show("Success", ToastAndroid.LONG)
                        this.props.navigation.navigate("Login")
                    }).catch(error => {
                        ToastAndroid.show(error.message, ToastAndroid.LONG);

                    });
                })
                .catch(error => {
                    ToastAndroid.show(error.message, ToastAndroid.LONG);
                    // if (error.code === 'auth/email-already-in-use') {
                    //     console.log('That email address is already in use!');
                    // }
                    // if (error.code === 'auth/invalid-email') {
                    //     console.log('That email address is invalid!');
                    // }
                });

            // await auth.createUserWithEmailAndPassword(email, password)
            //     .then(async userCredentials => {

            //         db.ref('/user/' + userCredentials.user.uid)
            //             .set({
            //                 uid: userCredentials.user.uid,
            //                 name: this.state.name,
            //                 status: 'Online',
            //                 email: this.state.email,
            //                 photo: "http://photourl.com/photo"
            //             })
            //             .catch(error => {
            //                 // console.log(error.message);
            //                 ToastAndroid.show(error.message, ToastAndroid.LONG);
            //             })

            //         // console.log(userCredentials);
            //         ToastAndroid.show("Success", ToastAndroid.LONG)


            //         if (userCredentials.user) {
            //             userCredentials.user.updateProfile({
            //                 displayName: this.state.name,
            //                 photoURL: "http://linkphoto.com"
            //             }).then((s) => {
            //                 this.props.navigation.navigate("Login")
            //             })
            //         }
            //     })
            //     .catch(error => {
            //         ToastAndroid.show(error.message, ToastAndroid.LONG)
            //     })

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF"></StatusBar>

                <Text style={{ marginTop: 20, fontSize: 24, fontWeight: 'bold', textAlign: 'center', color: "#4D4957", }}>Let's Get Started!</Text>
                <Text style={{ marginTop: 4, textAlign: 'center', color: '#9F9DA3' }}>Create an account</Text>
                <Thumbnail large source={require('../../assets/img/Firebase.png')} style={styles.logo} />

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && (
                        <Text style={styles.error}>{this.state.errorMessage}</Text>
                    )}
                </View>

                <View style={styles.form}>
                    <KeyboardAvoidingView behavior="padding" enabled>
                        <View>
                            <TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                placeholder="Name"
                                onChangeText={name => this.setState({ name })}
                                value={this.state.name}
                            ></TextInput>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                placeholder="Email"
                                onChangeText={email => this.setState({ email })}
                                value={this.state.email}
                            ></TextInput>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <TextInput
                                style={styles.input}
                                secureTextEntry
                                autoCapitalize="none"
                                placeholder="Password"
                                onChangeText={password => this.setState({ password })}
                                value={this.state.password}
                            ></TextInput>
                        </View>
                    </KeyboardAvoidingView>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>SIGN UP</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{ alignSelf: "center", marginTop: 20 }} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={{ color: "#414959", fontSize: 13 }}>
                        Already have an account? <Text style={{ fontWeight: "bold", color: "#039be5" }}>Login Here</Text>
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}
