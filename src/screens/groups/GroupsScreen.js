import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StatusBar, ToastAndroid } from 'react-native'
import { Thumbnail } from 'native-base'

import { constStyle } from '../../baseComponent/constStyle';

import styles from './GroupsScreenStyle';

import Icon from 'react-native-vector-icons/MaterialIcons';

import GroupListComponent from '../../components/GroupListComponent';

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


    // onItemTap(item) {
    //     // nav.navigate('ChatRoom', { item: item })
    //     console.log('item: ', item)
    //     this.props.navigation.navigate('ChatRoom', { item: item })
    // }

    handleAddGroup = () => {
        this.props.navigation.navigate('AddGroup')
    }

    render() {

        return (
            <View style={styles.container}>
                <TouchableOpacity style={[styles.floatBtn, { right: 20 }]} onPress={this.handleAddGroup}>
                    <Icon name="group-add" size={30} color={constStyle.baseColor} />
                </TouchableOpacity>

                <GroupListComponent  ></GroupListComponent>

            </View >

        )
    }
}
