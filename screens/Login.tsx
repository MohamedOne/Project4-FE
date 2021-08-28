import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react"
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from "react-native"
import Toast from "react-native-toast-message";
import { useDispatch, useSelector } from "react-redux";
import { AppAction } from "../redux/actions";
import { IAppState } from "../redux/store";


const LoginCard = () => {

    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const isSigningUp = useSelector((state: IAppState) => state.isSigningUp)


    const dispatch = useDispatch();
    const navigation = useNavigation();
    const submit = () => {
        if (userName == "" || password === "") {
            Toast.show({
                type: 'error',
                text1: 'Missing username or password'
            })
            return
        } else {
            Toast.show({
                type: 'success',
                text1: 'Glad to have you!'
            })
            dispatch({
                type: AppAction.LOGIN,
                payload: {
                    cartCount: 0,
                    user: {
                        username: userName,
                        password: password
                    }
                }
            })

            navigation.goBack();
        }
        
    }

    const redirectToSignUp = () => {
        dispatch({
            type: AppAction.SWITCH_LOGIN_SIGNUP,
            payload: {
                isSigningUp: true
            }
            
        })
    
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

        <TouchableOpacity 
                    onPress={redirectToSignUp}
                >
                <Text style={styles.newUserText}>New User? Sign Up</Text>
                <Image
                        source={require('../assets/hypercube.png')}
                        style={styles.smallImage}
                    />

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
    newUserText: {
        fontSize: 19,
        fontWeight: "bold",
        alignSelf: 'center'
    },
    smallImage: {
        width: 40,
        height: 40,
        alignSelf: 'center'
    }
})