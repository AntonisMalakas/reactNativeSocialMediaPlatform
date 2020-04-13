import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StatusBar, ToastAndroid } from 'react-native'
import { Thumbnail } from 'native-base'
import { auth } from "../../config/Config"

import ProfileHeaderComponent from '../../components/ProfileHeaderComponent';

import styles from './SettingsScreenStyle';
import { constStyle } from '../../baseComponent/constStyle';
import { DefaultText } from '../../baseComponent/defaultText';
import Icon from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';



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

            <View style={styles.container}>
                <View style={{ marginVertical: 100, alignItems: 'center' }}>

                    <Text style={{ fontSize: 18, marginBottom: 20 }}>
                        Settings
                </Text>
                    <Text style={{ fontSize: 18, marginBottom: 20, textAlign: 'center', marginLeft: 2, marginRight: 2 }}>
                        Here will be displayed a list of settings for your profile
                </Text>

                </View>

                <TouchableOpacity style={{
                    backgroundColor: 'aliceblue', padding: 10, flexDirection: 'row',
                    marginBottom: 5
                }}>
                    <SimpleLineIcons name="support" size={20} color={constStyle.baseColor} />
                    <View style={{ flex: 1, marginHorizontal: 5 }}>
                        <DefaultText text="Some Text" level={2} />
                    </View>
                    <TouchableOpacity>
                        <SimpleLineIcons name="arrow-right" size={20} color={constStyle.baseColor} />
                    </TouchableOpacity>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    backgroundColor: 'aliceblue', padding: 10, flexDirection: 'row',
                    marginBottom: 5
                }}
                    onPress={() => alert('logout pressed')}>
                    <SimpleLineIcons name="logout" size={20} color={constStyle.baseColor} />
                    <View style={{ flex: 1, marginHorizontal: 5 }}>
                        <DefaultText text="Logout" level={2} />
                    </View>
                    <TouchableOpacity>
                        <SimpleLineIcons name="arrow-right" size={20} color={constStyle.baseColor} />
                    </TouchableOpacity>
                </TouchableOpacity>


            </View >
            // <ProfileHeaderComponent
            //     name={auth.currentUser.displayName}
            //     email={auth.currentUser.email}
            //     image={profileImage}
            //     onTapProfile={() => alert('navigate to profile')}>
            // </ProfileHeaderComponent>
        )
    }
}
