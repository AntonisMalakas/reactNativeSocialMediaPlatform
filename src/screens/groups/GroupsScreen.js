import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StatusBar, ToastAndroid } from 'react-native'
import { Thumbnail } from 'native-base'
import { auth } from "../../config/Config"

import { constStyle } from '../../baseComponent/constStyle';

import styles from './GroupsScreenStyle';

import Icon from 'react-native-vector-icons/MaterialIcons';


export default class GroupsScreen extends Component {
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
                <TouchableOpacity style={[styles.floatBtn, { right: 20 }]}>
                    <Icon name="group-add" size={30} color={constStyle.baseColor} />
                </TouchableOpacity>

                <View style={{ marginVertical: 50, alignItems: 'center' }}>


                    <Text style={{ fontSize: 18, marginBottom: 20 }}>
                        Groups
                    </Text>
                    <Text style={{ fontSize: 18, marginBottom: 20, textAlign: 'center', marginLeft: 2, marginRight: 2 }}>
                        Here will be displayed a list of the groups you are currently registered in
                    </Text>

                </View>
                
            </View >

        )
    }
}
