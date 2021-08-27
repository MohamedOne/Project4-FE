import React from "react";
import { StyleSheet, View, Text, Button, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import ItemCard from "./ItemCard";





const HomeScreen: React.FC<any> = (props: any) => {

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


    return (
            
      <View style={styles.viewContainer}>
                        <Text style={styles.welcomeText}>Fashion Cubed</Text>
        <Text style={styles.hotStuff}>Summer Merch</Text>

        <FlatList
          data={dummyData}
          renderItem={({item}) => <ItemCard data={item}  > </ItemCard>}
        />
        
        
        
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


