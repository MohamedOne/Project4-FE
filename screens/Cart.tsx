import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useSelector } from "react-redux";
import { IAppState } from "../redux/store";
import CheckoutCard from "./CheckoutCard";
import { FlatList } from "react-native";
import { ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BlankCartCard from "./BlankCartCard";
import NotLoggedCartCard from "./NotLoggedCartCard";
import LoggedInCartCard from "./LoggedInCartCard";
const image = { uri: 'https://belmontstudios.com/wp-content/uploads/marble-with-gold-gold-marble-by-blue-gold-marble-background-gold-marble-wallpaper-uk.jpg' };


const Cart: React.FC = (props: any) => {

    //Pull down state variables
    const initialCart: any = useSelector((state: IAppState) => state.cart);
    const user: any = useSelector((state:IAppState) => state.user);
    let finalPrice: number = 0;
    let hasCart: boolean = false;
    let hasUser: boolean = false;

    const navigation = useNavigation<any>();

    if (initialCart.length > 0) {
        hasCart = true;
    }

    if(user !== undefined) {
        hasUser = true;
    }

    const onPress = () => {
        navigation.navigate('Account');
    }

    return (
        <View style={{ flex: 1 }}>
            {!hasCart ? <BlankCartCard /> :

                <View style={styles.viewContainer}>
                    <ImageBackground source={image} resizeMode="cover" style={{ justifyContent: 'center', flex: 1 }}
                    >
                        <Text style={styles.cartText}>Checkout: </Text>

                        <FlatList
                            data={initialCart}
                            renderItem={({ item }) => <CheckoutCard data={item}  > </CheckoutCard>}
                        />

                    {!hasUser? <NotLoggedCartCard /> : <LoggedInCartCard /> }                     

                    </ImageBackground>
                </View>
            }

        </View>


    );
}
export default Cart;

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1
    },
    cartText: {
        fontSize: 23,
        fontWeight: 'bold',
        paddingLeft: 19
    },
    touchableButton: {
        backgroundColor: '#03c6fc',
        width: 240,
        alignContent: 'center',
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 1
    },
    working: {
        flexDirection: 'row',
        alignContent: 'center',

    },
    finalPrice: {
        fontSize: 19,
        paddingLeft: 5,
        fontWeight: 'bold',
    },
    shipping: {
        fontSize: 19,
        paddingLeft: 5,
        fontWeight: 'bold'
    },
    finalPriceShipping: {
        fontSize: 19,
        paddingLeft: 5,
        fontWeight: 'bold'
    },
    encasingViewPopulatedCart: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center',
        maxHeight: 140,
        maxWidth: 400,
        padding: 5,
        elevation: 10
    },

})


