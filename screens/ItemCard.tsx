import React, { useEffect } from 'react'
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from "react-native";
import { Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/core';
import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native";


const ItemCard = (props: any) => {

    //Pulling mini card info here
    const singleItem = props.data;
    console.log(singleItem);

    useEffect(() => console.log(props.data.id), []);

    const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);


    
    const navigation = useNavigation<any>();
    const onPress = () => {
        navigation.navigate('ExpandedItem', {params : singleItem})
    }

    return (
        <View style={styles.cardOuterView} >
 
            <Card containerStyle={styles.cardContainer}>
            <AnimatedLinearGradient
    colors={["rgba(255,255,255, 0)", "rgba(230,230,230, 1)"]}
    style={{ flex: 1, justifyContent: 'flex-start', borderRadius: 5 }}>
                <TouchableOpacity
                    onPress={onPress}
                >
                <View style={styles.encasingViewMargin}>
                <View style={styles.encasingViewOuter}>

                    <Image
                            source={{uri: `${singleItem.image}`}}
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
                </AnimatedLinearGradient>

            </Card>
        </View>
    )
}
export default ItemCard

const styles = StyleSheet.create({
    cardOuterView: {
      
        
    },
    cardContainer: {
        
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: 'white',
        justifyContent: 'center',
        maxWidth: 340,
        elevation: 10,
        tintColor: "rgb(230, 230, 230)",
        overlayColor: "rgb(230, 230, 230)"

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