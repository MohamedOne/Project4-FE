import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { IAppState } from "../redux/store";

const LoggedInCartCard = () => {

    const randomNumGenerator = () => {
        return Math.floor(Math.random() * 1010101);

    }

    const initialCart: any = useSelector((state: IAppState) => state.cart);
    const username = useSelector((state: IAppState) => { state.user?.username })
    //const orderId = useState(randomNumGenerator());

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




    const setTempStruct = () => {
        return new Promise((resolve, reject) => {
            return {
                orderId: 12345,
                username: username,
                order: initialCart
            }
        })
    }
    const onPress = async () => {
        setTempStruct().then((tempStruct) =>  {
            axios.post('https://wi6pqlczjk.execute-api.us-east-1.amazonaws.com/StageZero/cart', {
            body: tempStruct
            })
            .then(response => { }) 
            .catch(err => console.log(err)) 
        }).then(() => console.log("Inside callback function"))
            .then(navigation.navigate('Account'));

        


        navigation.navigate('Account');
    }

    return (
        <View style={styles.encasingViewPopulatedCart}>
            <Text style={styles.finalPrice}>Merch: {calculateTotal()}</Text>
            <Text style={styles.shipping}>Shipping: Free</Text>
            <Text style={styles.finalPriceShipping}>Total: {finalPrice}</Text>

            <View style={{ flex: 1, paddingLeft: 5 }}>
                <TouchableOpacity style={styles.working} onPress={() => { onPress() }}>
                    <View style={styles.touchableButton}>
                        <Text style={{ fontSize: 19, textAlign: 'center' }}>Checkout</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default LoggedInCartCard;

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

function useState(arg0: number) {
    throw new Error("Function not implemented.");
}
