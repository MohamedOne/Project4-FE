import React, { useEffect } from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppAction } from "../redux/actions";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import LoginCard from "./Login";
import SignUpCard from "./SignUpCard";
import { IAppState } from "../redux/store";
import * as Font from 'expo-font';


const image = { uri: 'https://belmontstudios.com/wp-content/uploads/marble-with-gold-gold-marble-by-blue-gold-marble-background-gold-marble-wallpaper-uk.jpg' };

const Account: React.FC = (props: any) => {

    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const isSigningUp = useSelector((state: IAppState) => state.isSigningUp)



  useEffect(() => {
    async function getFonts() {
        Font.loadAsync({
            'oswaldesque-regular': require('../assets/fonts/Oswaldesque-Regular.ttf'),
            'oswaldesque-bold': require('../assets/fonts/Oswaldesque-Bold.ttf'),
            'oswaldesque-light': require('../assets/fonts/Oswaldesque-Light.ttf')
        
          });
    }
    getFonts();
  }, []);

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

            {isSigningUp? <SignUpCard /> : <LoginCard /> }
                
                



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


