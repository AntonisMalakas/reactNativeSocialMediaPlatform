import React, {
    useState,
    useEffect
} from 'react';

import ChatRoomComponent from '../../components/ChatRoomComponent';

// function profile(data, navigation) {
//     navigation.navigate('Profile', { item: data })
// }

export function ChatRoomScreen({ route, navigation }) {
    // console.log('rom chat room item: ', route.params.item)

    return (
        <ChatRoomComponent
            dataChat={route.params.item}
            // gotoProfile={() => profile(route.params.item, navigation)}
            navi={navigation}>

        </ChatRoomComponent>
    );
}
