import  React  from "react";
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";
import { AppAction } from "../redux/actions";
import { IAppState } from "../redux/store";



const ExpandedItemScreen: React.FC= (props: any) => {

    const[working, setWorking] = useState(false);
    const[clothingSize, setClothingSize] = useState("Small");
    const[quantity, setQuantity] = useState("1");
    
    //Grab cart and cart quantity
    const initialCart: number = useSelector((state: IAppState) => state.cartCount);
    const cart: any = useSelector((state: IAppState) => state.cart);
    const navigation = useNavigation<any>();
    let parseQuant = parseInt(quantity, 10);



    const dispatch = useDispatch();


    //Pull down the info we already have
    const itemData  = props.route.params.params;
    console.log(itemData);

    //Add item to cart, redux, update cart badge
    const onPress = () => {
        let newCartCount = initialCart + parseQuant;
        console.log(newCartCount);
        dispatch({
            type: AppAction.UPDATE_CART_COUNT,
            payload: {
                cartCount: newCartCount
            }
        })
        //Second dispatch reflects cart's belongings
        itemData['quantity'] = parseQuant;
        itemData['size'] = clothingSize;
        dispatch({
            type: AppAction.UPDATE_CART,
            payload: {
                cart: itemData
            }
        })
        console.log(cart);
        navigation.navigate('Explore');
    }

    //Making an Api call here to get more information about product

    return (
      <View style={styles.viewContainer}>

        <Image
            source={require('../assets/roswell.png')}
            style={styles.image}
        />

        <View style={styles.encasingLineNamePrice}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>{itemData.name}</Text>
            <Text style={{fontSize: 17, color: 'black'}}>Price: {itemData.price}</Text>
        </View>

        <View>
        <Text style={{fontSize: 19}}>Choose size below:</Text>

        <Picker
            selectedValue={clothingSize}
            onValueChange={(itemValue: any, itemIndex: number) =>  setClothingSize(itemValue)}>
            <Picker.Item label="Small" value="Small" />
            <Picker.Item label="Medium" value="Medium" />
            <Picker.Item label="Large" value="Large" />
            <Picker.Item label="X-Large" value="X-Large" />
        </Picker>
        </View>

        <View>
        <Text style={{fontSize: 19}}>Choose quantity:</Text>

        <Picker
            selectedValue={quantity}
            onValueChange={(itemValue: any, itemIndex: number) =>  setQuantity(itemValue)}>
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />

        </Picker>
        </View>


        <View style={{flex: 1}}>
        <TouchableOpacity style={working ? styles.working : styles.notWorking} onPress={() => {onPress()}}>
            <View style={styles.touchableButton}>
                <Text style={{fontSize: 19, textAlign: 'center'}}>Add to Cart</Text>
            </View>
        </TouchableOpacity>
        </View>





      </View>
    );
}
export default ExpandedItemScreen;

const styles = StyleSheet.create({
    viewContainer : {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%'
    },
    image : {
    },
    encasingLineNamePrice: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    working: {
        flexDirection: 'row',
        alignContent: 'center'

    },
    notWorking: {

    },
    touchableButton: {
        backgroundColor:'#03c6fc', 
        width: 220, 
        alignContent: 'center', 
        borderRadius: 100,
    }
})


