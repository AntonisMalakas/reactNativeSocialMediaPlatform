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
    Image,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { DefaultText } from '../baseComponent/defaultText';
import { constStyle } from '../baseComponent/constStyle';

export default class ProfileHeaderComponent extends React.Component {

    render() {
        return (
            <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
                <TouchableOpacity style={{
                    backgroundColor: constStyle.baseColor, padding: 10,
                    marginTop: 30, marginHorizontal: 10, borderRadius: 10, flexDirection: 'row', marginBottom: 20
                }}
                    onPress={() => this.props.onTapProfile()}>
                    <View style={{
                        width: 70, height: 70, borderRadius: 70 / 2,
                        backgroundColor: 'aliceblue',
                        overflow: "hidden", borderWidth: 2,
                        borderColor: 'aliceblue',
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Image source={this.props.image} style={{ width: 70, height: 70 }} resizeMode={'cover'} />
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', marginLeft: 10 }}>
                        <DefaultText text={this.props.name} level={3} color='white' />
                        <Text numberOfLines={2} ellipsizeMode='tail' style={{ color: 'white', fontSize: 12 }}>
                            {this.props.email}
                        </Text>
                    </View>
                </TouchableOpacity>

            </SafeAreaView>
        )
    };
}


const styles = StyleSheet.create({

});
