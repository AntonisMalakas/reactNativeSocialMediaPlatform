import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';
import { DefaultText } from '../baseComponent/defaultText';

import { groupData } from '../sample';

let profileImage = require('../assets/img/male-18.png');


function listItem(data, props) {
    return (
        <TouchableOpacity style={{ flexDirection: 'row', padding: 10 }} onPress={() => props(data.item)}>

            {/* <View style={[styles.onlineIndicator, {
                backgroundColor: data.item.online ? 'limegreen' : 'lightgrey'
            }]}>
            </View> */}

            <View style={[styles.avaWrapper, {
                backgroundColor: 'aliceblue',
                borderColor: 'aliceblue'
            }]}>
                <Image source={profileImage} style={{ width: 50, height: 50 }} resizeMode={'cover'} />
            </View>

            <View style={styles.contentWrapper}>
                <View style={{ flex: 1 }}>
                    <DefaultText text={data.item.name} level={2} />
                    {/* <Text style={{ color: 'darkgrey', fontSize: 13 }} numberOfLines={2}>
                        {data.item.chat[0].message}
                    </Text> */}
                    <Text style={{ color: 'darkgrey', fontSize: 13 }} numberOfLines={2}>
                        Click to open
                    </Text>
                </View>

                {/* <DefaultText text={data.item.chat[0].time} level={0} /> */}
                <DefaultText text='Haloo' level={0} />
            </View>

        </TouchableOpacity>
    )
}

function listSeparator() {
    return (
        <View style={{ marginVertical: 10 }}></View>
    )
}

export default class GroupListComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            groupData: []
        }
    }
    componentDidMount() {
        this.setState({ groupData: groupData })
    }

    render() {
        return (
            <SafeAreaView style={{ backgroundColor: 'white', flex: 1, marginVertical: 50 }}>

                <FlatList
                    data={groupData}
                    renderItem={item => listItem(item, this.props.onItemTap)}
                    style={styles.flatlistStyle}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        )
    };
}


const styles = StyleSheet.create({
    flatlistStyle: {
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 20,
    },
    avaWrapper: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        overflow: "hidden",
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    onlineIndicator: {
        width: 15,
        height: 15,
        borderRadius: 15 / 2,
        borderWidth: 1,
        top: 7,
        left: 12,
        zIndex: 2,
        borderColor: 'whitesmoke',
        position: 'absolute'
    },
    contentWrapper: {
        flex: 1,
        marginLeft: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        paddingBottom: 10,
        flexDirection: 'row'
    }
});
