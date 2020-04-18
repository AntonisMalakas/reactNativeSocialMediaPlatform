import React, { useLayoutEffect, useState, useEffect } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Alert } from 'react-native'
import GroupItem from '../../components/GroupsItems'

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { constStyle } from '../../baseComponent/constStyle';

import Icon from 'react-native-vector-icons/MaterialIcons';


function GroupsScreen2({ navigation }) {
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

    function handleAddGroup() {
        navigation.navigate('AddGroup')
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.floatBtn, { right: 20 }]} onPress={() => handleAddGroup()}>
                <Icon name="group-add" size={30} color={constStyle.baseColor} />
            </TouchableOpacity>
            <FlatList
                data={groups}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('ChatRoom', {
                                item
                            })
                        }}>
                            <GroupItem item={item}></GroupItem>
                        </TouchableOpacity>
                    )
                }}
            >
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebebeb'
    },
    text: {
        color: '#101010',
        fontSize: 24,
        fontWeight: 'bold'
    }
})

export default GroupsScreen2