import React from "react";
import { StyleSheet, View, Text } from "react-native";



const HomeScreen = () => {



    return (
      <View style={styles.viewContainer}>
        <Text>Begin shopping cart screen</Text>
      </View>
    );
}
export default HomeScreen;

const styles = StyleSheet.create({
    viewContainer : {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})


