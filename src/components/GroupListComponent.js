import React, { useLayoutEffect, useState, useEffect } from 'react'
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


import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

let profileImage = require('../assets/img/male-18.png');

function ListItem({ data }) {
    return (
        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
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
                    <DefaultText text={data.item.groupName} level={2} />
                    {/* <Text style={{ color: 'darkgrey', fontSize: 13 }} numberOfLines={2}>
                        {data.item.chat[0].message}
                    </Text> */}
                    <Text style={{ color: 'darkgrey', fontSize: 13 }} numberOfLines={2}>
                        Click to open
                    </Text>
                </View>

                {/* <DefaultText text={data.item.chat[0].time} level={0} /> */}
                {/* <DefaultText text='Haloo' level={0} /> */}
            </View>
        </View>
    )
}

function listSeparator() {
    return (
        <View style={{ marginVertical: 10 }}></View>
    )
}


function GroupListComponent() {
    const navigation = useNavigation();
    const [groups, setGroups] = useState([])

    useLayoutEffect(() => {
    })

    useEffect(() => {
        getChats()
    }, [])

    function getChats() {
        const db = firestore()
        var groupArray = []

        db.collection("groups")
            .onSnapshot(function (snapshot) {
                snapshot.docChanges().forEach(function (change) {
                    if (change.type == "added") {
                        console.log("New Group: ", change.doc.data())
                        groupArray.push(change.doc.data())
                    }
                    if (change.type === "modified") {
                        console.log("Modified Group: ", change.doc.data())
                    }
                    if (change.type === "removed") {
                        console.log("Removed Group", change.doc.data())
                    }
                    setGroups(groupArray)
                })
            })
    }

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1, marginVertical: 50 }}>
            <FlatList
                data={groups}
                renderItem={item => {
                    return (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('ChatRoom', {
                                item
                            })
                        }}>
                            <ListItem data={item}></ListItem>
                        </TouchableOpacity>
                    )
                }}
                style={styles.flatlistStyle}
                keyExtractor={(item, index) => 'key' + index}
            />
        </SafeAreaView>
    )
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

export default GroupListComponent
