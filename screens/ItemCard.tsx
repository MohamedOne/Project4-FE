import React from 'react'
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from "react-native";
import { Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/core';



const ItemCard = (props: any) => {
    
    const navigation = useNavigation<any>();
    const onPress = () => {
        navigation.navigate('ExpandedItem', {props})
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
                            Roswell, NM
                        </Text>                        
                            <Text style={styles.price}>
                                {`$55`}
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
        backgroundColor: '#32a2a8',
        justifyContent: 'center',

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
        fontWeight: 'bold'
    },
    price: {
        fontSize: 17,
        color: "#e5eb34",
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