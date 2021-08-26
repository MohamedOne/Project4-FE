import React from "react";
import { StyleSheet, View, Text } from "react-native";



const Account: React.FC = (props:any) => {



    return (
      <View style={styles.viewContainer}>
        <Text>Begin user account screen</Text>
      </View>
    );
}
export default Account;

const styles = StyleSheet.create({
    viewContainer : {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})


