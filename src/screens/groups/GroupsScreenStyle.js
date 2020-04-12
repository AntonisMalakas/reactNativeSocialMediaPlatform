import { StyleSheet, Platform } from 'react-native'
export default StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        width: '100%',

    },
    logo: {
        width: '90%',
        height: '25%',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,

    },
    form: {
        marginTop: -20,
        marginBottom: 40,
        marginHorizontal: 30
    },
    input: {
        borderRadius: 30,
        height: 50,
        fontSize: 15,
        paddingLeft: 30,
        backgroundColor: 'white',
    },
    button: {
        marginHorizontal: 70,
        marginBottom: 10,
        backgroundColor: "#039be5",
        borderRadius: 30,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    errorMessage: {
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
    },
    error: {
        color: 'red',
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center',
    },
    back: {
        position: 'absolute',
        top: 48,
        left: 32,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: 'rgba(21, 22, 48, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    floatBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        position: 'absolute',
        zIndex: 10,
        top: 30
    }

})
