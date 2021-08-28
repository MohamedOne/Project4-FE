import React from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppAction } from "../redux/actions";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import LoginCard from "./Login";

const image = { uri: 'https://belmontstudios.com/wp-content/uploads/marble-with-gold-gold-marble-by-blue-gold-marble-background-gold-marble-wallpaper-uk.jpg' };

const Account: React.FC = (props: any) => {

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
        <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
            <ImageBackground source={image} resizeMode="cover" style={{ justifyContent: 'center', flex: 1 }}
            >

                <View style={{}}>
                <Image
                            source={require('../assets/hypercube.png')}
                            style={styles.image}
                        />
                        <Text style={styles.welcomeText}>Fashion Cubed</Text>
                </View>

            <LoginCard />
            </ImageBackground>
        </View>




    )

};
export default Account;

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        maxHeight: 400,
        alignContent: 'center'
    },
    image: {
        height: 140,
        width: 140,
        alignSelf: 'center'
    },
    welcomeText: {
        fontSize: 43,
        fontStyle: 'italic',
        fontFamily: 'sans-serif',
        paddingLeft: 19,
        alignSelf: 'center'
    },
    input: {
        width: 350,
        paddingBottom: 10,
        alignItems: 'center',
        textAlign: 'center',
        borderBottomWidth: 2,
        borderColor: '#03a1fc',
        color: 'black',
        fontSize: 18,
        borderRadius: 10,
        paddingHorizontal: 25,
        alignSelf: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#03a1fc',
        fontSize: 18,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        justifyContent: 'space-between'
    },

    notWorking: {
        backgroundColor: 'purple'
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

    safeArea: {
        flex: 3,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#d8e8e1'
    },
    fillArea: {
        flex: 1
    }
});


