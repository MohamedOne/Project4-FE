import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import ItemCard from "./ItemCard";





const HomeScreen: React.FC<any> = (props: any) => {

  const navigation = useNavigation<any>();


    return (
            
      <View style={styles.viewContainer}>
                        <Text style={styles.welcomeText}>Fashion Cubed</Text>
        <Text style={styles.hotStuff}>Summer Merch</Text>

        <ItemCard />
        
        
      </View>

    );
}
export default HomeScreen;

const styles = StyleSheet.create({
    viewContainer : {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    welcomeText: {
      fontSize: 33,
      fontStyle: 'italic',
      fontFamily: 'sans-serif'
    },
    hotStuff: {
      fontSize: 23,
      alignContent: 'stretch',
      fontStyle: 'normal'
    },
    headerText: {
      fontSize: 28,
      fontStyle: 'italic',
    },
    outerMostView: {

    },
    headContainer: {
      alignItems: 'flex-start',
    }
})


