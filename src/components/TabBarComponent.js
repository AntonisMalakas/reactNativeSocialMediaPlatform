import React from 'react';
import {
    Text,
    StatusBar,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { DefaultText } from '../baseComponent/defaultText';
import { constStyle } from '../baseComponent/constStyle';



export function TabBarComponent({ state, descriptors, navigation }) {
    return (
        <View style={[styles.tabContainer, constStyle.shadow.depth4]}>

            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={[styles.tabItem]}>
                <MaterialIcons name="home" size={30} color={state.index == 0 ? constStyle.baseColor : 'darkgrey'} />
                {/* <DefaultText text="Home" level={0} state={state.index == 0 ? 'active' : 'deactive'} /> */}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Groups')} style={[styles.tabItem]}>
                <MaterialIcons name="group" size={30}
                    color={state.index == 1 ? constStyle.baseColor : 'darkgrey'} />
                {/* <DefaultText text="Groups" level={0} state={state.index == 1 ? 'active' : 'deactive'} /> */}
            </TouchableOpacity>

            {/* <TouchableOpacity style={[styles.tabItem]} onPress={() => navigation.navigate('NewChat')}>
                <View style={{ backgroundColor: constStyle.baseColor, width: 60, height: 60, borderRadius: 60 / 2, justifyContent: 'center', alignItems: 'center', bottom: 10 }}>
                    <Icon name="plus" size={30} color='white' />
                </View>
            </TouchableOpacity> */}

            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={[styles.tabItem]}>
                <MaterialIcons name="person" size={30} color={state.index == 2 ? constStyle.baseColor : 'darkgrey'} />
                {/* <DefaultText text="Profile" level={0} state={state.index == 2 ? 'active' : 'deactive'} /> */}
            </TouchableOpacity>

        </View>
    );
}


const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: 'white',
        height: 50,
        flexDirection: 'row'
    },
    tabItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
