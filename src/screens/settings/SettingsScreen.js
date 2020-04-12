import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StatusBar, ToastAndroid } from 'react-native'
import { Thumbnail } from 'native-base'
import { auth } from "../../config/Config"

import ProfileHeaderComponent from '../../components/ProfileHeaderComponent';

import styles from './SettingsScreenStyle';

let profileImage = require('../../assets/img/male-18.png');

export default class SettingsScreen extends Component {
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
                name={auth.currentUser.displayName}
                email={auth.currentUser.email}
                image={profileImage}
                onTapProfile={() => alert('navigate to profile')}>

            </ProfileHeaderComponent>
            // <View style={styles.container}>
            //     <View style={{ marginVertical: 100, alignItems: 'center' }}>
            //         <Text style={{ fontSize: 23 }}>
            //             {auth.currentUser.displayName}
            //         </Text>
            //         <Text style={{ fontSize: 18, marginBottom: 20 }}>
            //             {auth.currentUser.email}
            //         </Text>
            //         <TouchableOpacity onPress={this.onLogout}>
            //             <Text>Logout</Text>
            //         </TouchableOpacity>
            //     </View>
            // </View >

        )
    }
}
