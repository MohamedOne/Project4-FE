import React from "react";
import { StyleSheet, View, Text } from "react-native";



const ExpandedItemScreen = () => {



    return (
      <View style={styles.viewContainer}>
        <Text>Begin expanded item screen</Text>
      </View>
    );
}
export default ExpandedItemScreen;

const styles = StyleSheet.create({
    viewContainer : {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})


