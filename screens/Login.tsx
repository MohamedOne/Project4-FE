import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react"
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native"
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";
import { AppAction } from "../redux/actions";


const LoginCard = () => {

    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const submit = () => {
        Toast.show({
            type: 'success',
            text1: 'Glad to see you!'
        })
        dispatch({
            type: AppAction.LOGIN,
            payload: {
                cartCount: 0,
                user : {
                    username: userName,
                    password: password
                }
            }
        })

        navigation.goBack();
        
    }

    return (
        <View style={styles.outerContainer}>
        <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="black"
            onChangeText={text => setUsername(text)}
            keyboardType="ascii-capable"
        />
        <TextInput
            style={styles.input}
            onChangeText={text => setPassword(text)}
            placeholderTextColor="black"
            placeholder="Password"
            secureTextEntry={true}
        />
        <TouchableOpacity
            style={styles.working}
            onPress={() => submit()}>
            <Text
                style={styles.text}>Submit</Text>
        </TouchableOpacity>
    </View>
    )
}
export default LoginCard

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        maxHeight: 400,
        alignContent: 'center'
    },
    input: {
        width: 350,
        paddingBottom: 10,
        alignItems: 'center',
        textAlign: 'center',
        borderBottomWidth: 2,
        borderColor: '#03a1fc',
        color: 'black',
        fontSize: 19,
        borderRadius: 10,
        paddingHorizontal: 25,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    working: {
        width: 99,
        height: 29,
        backgroundColor: '#03a1fc',
        borderRadius: 75,
        alignSelf: 'center',
        borderColor: 'black',
        borderWidth: 1
    },
    text: {
        fontSize: 19,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
})