import React from 'react'
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from "react-native";
import { Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/core';
import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native";


const ItemCard = (props: any) => {

    //Pulling mini card info here
    const singleItem = props.data;
    console.log(singleItem);

    const dummyData =  [
        {
            id : 123,
            image: "../assets/roswell.png",
            name: "Roswell, NM",
            price: 55        },
        {
            id: 345,
            image: "../assets/roswell.png",
            name: "Houston, TX",
            price: 49
        },
        {
            id: 678,
            image: "../assets/roswell.png",
            name: "The Jersiest of Jerseys",
            price: 35,
        }
    ]
    
    const navigation = useNavigation<any>();
    const onPress = () => {
        navigation.navigate('ExpandedItem', {params : singleItem})
    }

    return (
        <View style={styles.cardOuterView} >
            <Card containerStyle={styles.cardContainer}>
                <TouchableOpacity
                    onPress={onPress}
                >
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
                                {`${singleItem.price}`}
                            </Text>

                    </View>

                </View>
                <View style={styles.encaseRedirectIcon}>
                    <Image
                                source={require('../assets/redirectIcon.png')}
                                style={styles.redirectIcon}
                            />
                    </View>
                </View>
                </TouchableOpacity>

            </Card>
        </View>
    )
}
export default ItemCard

const styles = StyleSheet.create({
    cardOuterView: {
        flex: 1,
        
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
        flexDirection : 'row',
        justifyContent: 'space-evenly'
    },
    encaseRedirectIcon: {
        paddingLeft: 30
    }
})