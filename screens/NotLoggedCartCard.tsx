import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { IAppState } from "../redux/store";

const NotLoggedCartCard = () => {

    const initialCart: any = useSelector((state: IAppState) => state.cart);
    let finalPrice: number = 0;
    const navigation = useNavigation<any>();
    const calculateTotal = () => {
        for (let i = 0; i < initialCart.length; i++) {
            finalPrice += initialCart[i].price * initialCart[i].quantity;
        }

        return finalPrice;
    }

    const calculateShipping = () => {
        let temp = finalPrice * .1;
        return temp.toFixed(2);
    }

    const calculatePriceShipping = () => {
        let temp = finalPrice * 1.1;
        return temp.toFixed(2);
    }

    const onPress = () => {
        navigation.navigate('Account');
    }

    return (
        <View style={styles.encasingViewPopulatedCart}>
        <Text style={styles.finalPrice}>Merch: {calculateTotal()}</Text>
        <Text style={styles.shipping}>Shipping: {calculateShipping()}</Text>
        <Text style={styles.finalPriceShipping}>Total: {calculatePriceShipping()}</Text>

        <View style={{ flex: 1, paddingLeft: 5 }}>
            <TouchableOpacity style={styles.working} onPress={() => { onPress() }}>
                <View style={styles.touchableButton}>
                    <Text style={{ fontSize: 19, textAlign: 'center' }}>Login for free shipping!</Text>
                </View>
            </TouchableOpacity>
        </View>

    </View>
    )
}
export default NotLoggedCartCard;

const styles = StyleSheet.create({
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