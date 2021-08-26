import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import ExpandedItem from './ExpandedItem'
import { GoToButton } from "../App";





const HomeScreen: React.FC<any> = (props: any) => {

  const navigation = useNavigation<any>();


    return (
      <View style={styles.viewContainer}>
        <Text>Home Screen</Text>
        <Button title="Go to expanded item screen" onPress={() => navigation.navigate('ExpandedItem')} />
        
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


