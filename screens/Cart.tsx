import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { IAppState } from "../redux/store";
import CheckoutCard from "./CheckoutCard";
import { FlatList } from "react-native";
import { ImageBackground } from "react-native";
const image = { uri: 'https://belmontstudios.com/wp-content/uploads/marble-with-gold-gold-marble-by-blue-gold-marble-background-gold-marble-wallpaper-uk.jpg' };


const Cart: React.FC = (props: any) => {

    //Pull down state variables
    const initialCart: any = useSelector((state: IAppState) => state.cart);
    const initialCartCount = useSelector((state: IAppState) => state.cartCount);

    const onPress = () => {
        return
    }

    const calculateTotal = () => {
        let finalPrice: number = 0;
        for(let i = 0; i < initialCart.length; i++) {
            finalPrice += initialCart[i].price * initialCart[i].quantity;
        }

        return finalPrice;
    }

    return (
        <View style={styles.viewContainer}>
            <ImageBackground source={image} resizeMode="cover" style={{ justifyContent: 'center', flex: 1 }}
            >
                <Text style={styles.cartText}>Checkout: </Text>

                <FlatList
                    data={initialCart}
                    renderItem={({ item }) => <CheckoutCard data={item}  > </CheckoutCard>}
                />

                <Text style={styles.finalPrice}>Total: {calculateTotal()}</Text>

                <View style={{ flex: 1, paddingLeft: 19 }}>
                    <TouchableOpacity style={styles.working} onPress={() => { onPress() }}>
                        <View style={styles.touchableButton}>
                            <Text style={{ fontSize: 19, textAlign: 'center' }}>Login for 10% off your order!</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
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
        width: 270,
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
        paddingLeft: 19,
        fontWeight: 'bold'
    }
})


