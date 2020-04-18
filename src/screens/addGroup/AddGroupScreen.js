import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import Utility from '../../utils/Utility'
import Strings from '../../const/String'

import CustomTextField from './../../components/CustomTextField'
import Button from './../../components/Button'

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


import styles from './AddGroupScreenStyle';



function AddGroupScreen({ navigation }) {
    const [groupName, setGroupName] = useState('')
    const [fieldError, setFieldError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    function validateField() {
        const isValidField = Utility.isValidField(groupName)
        isValidField ? setFieldError('') : setFieldError(Strings.GroupNameEmpty)
        return isValidField
    }

    function createGroupToFireBase() {
        setIsLoading(true)
        const groupsRef = firestore().collection("groups").doc()
        const userID = auth().currentUser.uid

        groupsRef.set({
            groupID: groupsRef.id,
            groupName: groupName,
            userID: userID,
        }).then(function (docRef) {
            setIsLoading(false)
            console.log('Document written with ID:', groupsRef.id)
            addMembersOfChatToFirebase(groupsRef.id, userID)

        }).catch(function (error) {
            Alert.alert(error.message)
            setIsLoading(false)
            console.error("error adding document: ", error)
        })
    }

    function addMembersOfChatToFirebase(groupId, userID) {
        const membersRef = firestore().collection("members").doc(groupId).collection('member').doc()
        membersRef.set({
            userID: userID
        }).then(function (docRef) {
            navigation.goBack()
        })
            .catch(function (error) {
                setIsLoading(false)
                console.error("Error adding document: ", error)
            })
    }

    function performCreateGroup () {
        const isValidField = validateField()
        if (isValidField) {
            createGroupToFireBase()
        }
    }


    return (
        <View style={styles.container}>
            <CustomTextField
                term={groupName}
                error={fieldError}
                placeHolder={Strings.EnterYourGroupName}
                onTermChange={newGroupName => setGroupName(newGroupName)}
                onValidateTextField={validateField}
            />

            <Button title={Strings.CreateGroup} onPress={performCreateGroup} isLoading={isLoading} />

        </View>
    )
}

export default AddGroupScreen