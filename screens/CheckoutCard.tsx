import React from 'react'
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from "react-native";
import { Card, Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/core';
import Toast from 'react-native-toast-message';
import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { AppAction } from '../redux/actions';
import { IAppState } from '../redux/store';


const CheckoutCard = (props: any) => {

    //Pulling individual cart info here
    const singleItem = props.data;
    console.log(singleItem);

    const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

    const cartCount: any = useSelector((state: IAppState) => state.cartCount);

    const navigation = useNavigation<any>();
    const dispatch = useDispatch();

    const onPress = () => {
        navigation.navigate('ExpandedItem', { params: singleItem })
    }

    const deleteFromCart = () => {
        dispatch({
            type: AppAction.REMOVE_CART_ITEM,
            payload: {
                cartItem : singleItem,
                cartCount: cartCount - singleItem.quantity
            }
        })
        Toast.show({type: 'success', text1: 'Item successfully deleted from cart'});
        navigation.navigate('Cart');
    }

    return (
        <View style={styles.cardOuterView} >

            <Card containerStyle={styles.cardContainer} >
            <AnimatedLinearGradient
    colors={["rgba(255,255,255, 0)", "rgba(230,230,230, 1)"]}
    style={{ flex: 1, justifyContent: 'flex-start', borderRadius: 5 }}>
                <View style={styles.encasingViewMargin}>
                    <View style={styles.encasingViewOuter}>

                        <Image
                            source={require('../assets/roswell.png')}
                            style={styles.image}
                        />
                        <View style={styles.encasingView}>
                            <Text style={styles.itemName}>
                                {singleItem.name}
                            </Text>
                            <Text style={styles.price}>
                                {`${singleItem.price * singleItem.quantity}`}
                            </Text>
                            <Text style={{fontWeight: 'bold'}}>
                                {`Size: ${singleItem.size}`}
                            </Text>
                            <Text style={{}}>
                                {`Quantity: ${singleItem.quantity}`}
                            </Text>

                        </View>

                    </View>
                    <View style={styles.encaseRedirectIcon}>
                        <TouchableOpacity
                            onPress={deleteFromCart}
                        >
                            <Icon
                                name='close'
                                type='ionicon'
                                color='black'
                            />
                        </TouchableOpacity>

                    </View>
                </View>
                </AnimatedLinearGradient>

            </Card>
        </View>
    )
}
export default CheckoutCard

const styles = StyleSheet.create({
    cardOuterView: {
        flex: 1,
        justifyContent: 'center'
    },
    cardContainer: {
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: 'white',
        justifyContent: 'center',
        maxWidth: 340,
        elevation: 10

    },
    image: {
        width: 90,
        height: 90,
        borderWidth: 2,
        borderRadius: 25,
    },
    itemName: {
        fontSize: 20,
        color: "black",
        fontWeight: 'bold',
        maxWidth: 125
    },
    price: {
        fontSize: 17,
        color: "#03a1fc",
        fontStyle: 'italic'

    },
    encasingView: {
        paddingLeft: 12
    },
    encasingViewOuter: {
        flexDirection: 'row'
    },
    redirectIcon: {
        width: 30,
        height: 30,
        paddingLeft: 30
    },
    innerEncasingView: {
        flexDirection: 'row'
    },
    encasingViewMargin: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    encaseRedirectIcon: {
        paddingLeft: 30
    }
})