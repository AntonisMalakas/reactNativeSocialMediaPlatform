import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StatusBar, ToastAndroid } from 'react-native'
import { Thumbnail } from 'native-base'
import auth from '@react-native-firebase/auth';

import ProfileHeaderComponent from '../../components/ProfileHeaderComponent';

import styles from './ProfileScreenStyle';

let profileImage = require('../../assets/img/male-18.png');

export default class ProfileScreen extends Component {
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

    render() {
        return (
            <ProfileHeaderComponent
                name={auth().currentUser.displayName}
                email={auth().currentUser.email}
                image={profileImage}
                onTapProfile={() => this.props.navigation.navigate("Settings")}>
            </ProfileHeaderComponent>
        )
    }
}
