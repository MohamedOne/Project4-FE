import React from "react";
import { StyleSheet, View, Text } from "react-native";



const Cart: React.FC = (props: any) => {



    return (
      <View style={styles.viewContainer}>
        <Text>Begin shopping cart screen</Text>
      </View>
    );
}
export default Cart;

const styles = StyleSheet.create({
    viewContainer : {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})


